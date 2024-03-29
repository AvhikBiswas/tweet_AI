import { Request, Response } from "express";
import { tweetSuggestion } from "../services/tweetSuggestion";

const suggestTweets_contreoller = async (req: Request, res: Response) => {
  console.log("req.body", req.body);

  try {
    const { text } = req.body;

    if (!text) throw new Error("Text Cant Be Null");
    console.log("text", text);
    const Tweets = await tweetSuggestion(text);

    res.status(200).json({
      createdTweets: Tweets,
      success: true,
      err: {},
      messege: "Tweet Genarated",
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({
      success: false,
      err: { error },
      mess: "Somthing Went Weong",
    });
  }
};

export default suggestTweets_contreoller;
