import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const [cateloryList, setCateloryList] = useState([]);
  const [choseNumber, setChoseNumber] = useState("");
  const [choseCatelory, setChoseCatelory] = useState("");
  const [choseLevel, setChoseLevel] = useState("");

  const navigate = useNavigate();

  const level = [
    { id: 1, level: "easy" },
    { id: 2, level: "medium" },
  ];

  const loadCatelory = () => {
    axios
      .get("http://localhost:8080/api/v1/quizz/")
      .then((res) => setCateloryList(res.data.data))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const info: any = {
      Number: choseNumber,
      Catelory: choseCatelory,
      Difficulty: choseLevel,
    };
    localStorage.setItem("infor", JSON.stringify(info));
    navigate("/question");
  };

  useEffect(() => {
    loadCatelory();
  }, []);

  return (
    <div className="container w-50">
      <h3>Setup Quizz</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Number of question</label>
          <input
            className="form-control"
            onChange={(e) => setChoseNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Catelory</label>
          <select
            className="form-select"
            onChange={(e) => setChoseCatelory(e.target.value)}
          >
            <option selected>Open this select menu</option>
            {cateloryList.length > 0 &&
              cateloryList.map((e: any, i: any) => (
                <option key={i} value={e.idCatelory}>
                  {e.nameCatelory}
                </option>
              ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Difficulty</label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setChoseLevel(e.target.value)}
          >
            <option selected>Open this select menu</option>
            {level.map((e, i) => (
              <option value={e.id} key={i}>
                {e.level}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Start
        </button>
      </form>
    </div>
  );
};

export default Todo;
