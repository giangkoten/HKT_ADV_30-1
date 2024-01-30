import * as questionService from "../services/question.service";
import { Request, Response } from "express";

export const getAllQuestion = async (req: Request, res: Response) => {
  try {
    const category_id = Number(req.query.category_id);
    const level = Number(req.query.level);
    const limit = Number(req.query.limit);

    if (!category_id && !level && !limit) {
      let [data] = await questionService.getAllQuestion();

      if (!Array.isArray(data)) {
        throw new Error("is valid");
      }
      res.json({
        message: "Get all question",
        data: data,
      });
    } else {
      let data = await questionService.getQueryQuestion(
        category_id,
        level,
        limit
      );

      if (!Array.isArray(data)) {
        throw new Error("is valid");
      }
      res.json({
        message: "Get all question",
        data: data[0],
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getOneQuestion = async (req: Request, res: Response) => {
  try {
    let { id } = req.params;
    let [data] = await questionService.getOneQuestion(+id);

    if (!Array.isArray(data)) {
      throw new Error("is valid");
    }
    res.json({
      message: `Get question id=${id}`,
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getQuestionForAnswer = async (req: Request, res: Response) => {
  try {
    let { id } = req.params;
    let [data] = await questionService.getQuestionForAnswer(+id);

    if (!Array.isArray(data)) {
      throw new Error("is valid");
    }
    res.json({
      message: `Get question for answer id=${id}`,
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};
