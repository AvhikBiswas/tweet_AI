import { Request, Response } from "express";
import { createTweet } from "../services/createTweet";

const createTweet_controller = async (req: Request, res: Response) => {
  try {
    const {topic} = req.body;
    const Tweets = await createTweet(topic);
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
