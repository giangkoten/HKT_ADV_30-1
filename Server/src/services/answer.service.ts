import db from "../utils/database";
export const getAllAnswer = async () => {
  return db.execute(`SELECT * FROM answer`);
};
