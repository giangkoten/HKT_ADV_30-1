import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
const port: number = 8080;

dotenv.config();

import QuizzRouter from "./routes/quizz.routes";
import questionRouter from "./routes/question.routes";
import answerRouter from "./routes/answer.routes";

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//catelory
app.use("/api/v1/quizz", QuizzRouter);
//question
app.use("/api/v1/question", questionRouter);
//answer
app.use("/api/v1/answer", answerRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
