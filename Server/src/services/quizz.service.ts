import db from "../utils/database";
export const getAllCatelory = async () => {
  return db.execute(`SELECT * FROM catelory`);
};
export const getOne = async (id: number) => {
  return db.execute(`SELECT * FROM catelory WHERE idCatelory = ${id}`);
};

export const getCateloryById = async (id: number) => {
  return db.execute(
    `SELECT q.content as question, q.idQuestion ,  a.content as answer, a.check, a.idAnswer FROM question as q
    INNER JOIN catelory as c ON q.idCatelory = ?
    INNER JOIN answer as a ON a.idQuestion = q.idQuestion`,
    [id]
  );
};
