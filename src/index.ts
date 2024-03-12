import express, { Express } from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Request, Response } from "express";
dotenv.config();

export const app: Express = express();
const port = process.env.PORT || 8000;
export const genAI = new GoogleGenerativeAI(process.env.GAMINI_API_KEY!);

app.use(express.json());

app.get("/api/v1/suggestion", async (req: Request, res: Response) => {

  const tweetText: string = req.query.tweetText as string;

  console.log("tweetText", tweetText);
  if (!tweetText) {
    return res.status(400).json({
      error: "tweetText Param Missing",
    });
  }
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `This is the user's tweet: "${tweetText}". I want to make a suggestion for a tweet without changing the contweetText and hashtags. In response, provide an array of suggested tweets that the user can use in the following format:

    Suggested Tweets:
    -> Provide tweet suggestions with numbered increments.`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const textRes = response.text();
    console.log(textRes);

    res.status(200).json({
      result: textRes,
    });
  } catch (error) {
    console.log("error", error);
    throw new Error("got Some error");
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
