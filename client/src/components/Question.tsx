import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const [option, setOption] = useState<{
    Number: number;
    Catelory: number;
    Difficulty: number;
  } | null>(JSON.parse(localStorage.getItem("infor") as any));
  const [listQuestion, setListQuestion] = useState<string[]>([]);

  // const limit = Number(option?.Number);
  const categoryId = Number(option?.Catelory);
  // const level = Number(option?.Difficulty);
  const navigate = useNavigate();
  const loadPlay = () => {
    axios
      .get(`http://localhost:8080/api/v1/quizz/play/${categoryId}`)
      .then((res) => {
        const groupedQuestions = res.data.data.reduce(
          (accumulator: any, item: any) => {
            const existingQuestion = accumulator.find(
              (q: any) => q.idQuestion === item.idQuestion
            );
            if (!existingQuestion) {
              accumulator.push({
                idQuestion: item.idQuestion,
                question: item.question,
                answer: [
                  {
                    idAnswer: item.idAnswer,
                    answer: item.answer,
                    check: item.check,
                  },
                ],
              });
            } else {
              const existingAnswer = existingQuestion.answer.find(
                (a: any) => a.idAnswer === item.idAnswer
              );
              if (!existingAnswer) {
                existingQuestion.answer.push({
                  idAnswer: item.idAnswer,
                  answer: item.answer,
                  check: item.check,
                });
              }
            }
            return accumulator;
          },
          []
        );
        setListQuestion(groupedQuestions);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadPlay();
  }, []);
  const [selectedAnswers, setSelectedAnswers] = useState<
    | {
        [key: number]: { answerId: number | null; check: number };
      }
    | any
  >({});

  const handleSelectAnswer = (
    questionId: number,
    answerId: number,
    check: number
  ) => {
    setSelectedAnswers((prevState: any) => ({
      ...prevState,
      [questionId]: {
        answerId:
          answerId === prevState[questionId]?.answerId ? null : answerId,
        check: check,
      },
    }));
  };

  console.log(selectedAnswers);
  // MOdal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="container w-50 mt-5">
        {listQuestion.length > 0 &&
          listQuestion.map((item: any, index: any) => (
            <div key={index}>
              <h4>{item.question}</h4>
              <ul className="list-group list-group-flush mb-3">
                {item.answer.map((answer: any) => (
                  <li
                    className={`list-group-item ${
                      selectedAnswers[item.idQuestion]?.answerId ===
                      answer.idAnswer
                        ? "bg-success"
                        : ""
                    }`}
                    key={answer.idAnswer}
                    onClick={() =>
                      handleSelectAnswer(
                        item.idQuestion,
                        answer.idAnswer,
                        answer.check
                      )
                    }
                  >
                    {answer.answer}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        <button
          type="button"
          className="btn btn-primary mt-5 w-100"
          onClick={showModal}
        >
          Xác nhận
        </button>
      </div>
      {/* MOdal */}
      <Modal
        title="Kết quả"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {selectedAnswers && (
          <h4>
            Bạn trả lời đúng:{" "}
            {
              Object.values(selectedAnswers).filter(
                (answer: any) => answer.check === 1
              ).length
            }{" "}
            câu
          </h4>
        )}
      </Modal>
    </div>
  );
};

export default Question;
