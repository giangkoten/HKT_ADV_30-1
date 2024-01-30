import * as answerService from "../services/answer.service";
import { Request, Response } from "express";

export const getAllAnswer = async (req: Request, res: Response) => {
  try {
    let [data] = await answerService.getAllAnswer();

    if (!Array.isArray(data)) {
      throw new Error("is valid");
    }
    res.json({
      message: "Get all question",
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};
