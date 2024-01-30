import exp from "constants";
import db from "../utils/database";
export const getAllQuestion = async () => {
  return db.execute(`SELECT * FROM question`);
};

export const getOneQuestion = async (id: number) => {
  return db.execute(`SELECT * FROM question WHERE idQuestion = ${id}`);
};

export const getQuestionForAnswer = async (id: number) => {
  return db.execute(
    `SELECT * , q.content  FROM question  as q INNER JOIN answer as a ON q.idQuestion = a.idQuestion WHERE q.idQuestion = ?`,
    [id]
  );
};

export const getQueryQuestion = async (
  category_id: number,
  level: number,
  limit: number
) => {
  const query = `SELECT *  FROM question as q INNER JOIN answer as a ON q.idQuestion = a.idQuestion INNER JOIN catelory as c ON q.idCatelory = c.idCatelory WHERE c.idCatelory = ${category_id} AND q.level = ${level} LIMIT ${limit}`;

  return db.execute(query);
};
