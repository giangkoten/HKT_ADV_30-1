import mysql2, { PoolOptions, Pool } from "mysql2";

// Tao cac config de ket noi
const databaseConfig: PoolOptions = {
  database: "quizz",
  port: 3306,
  user: "root",
  password: "giang20071999",
  host: "localhost",
};

//Khoi tao ket noi
const database: Pool = mysql2.createPool(databaseConfig);

// Day database ra ben ngoai de su dung
export default database.promise();
