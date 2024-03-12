import { generateTweet } from "../prompts/createTweet";
import { gemini } from "../repository/gemini";

export const createTweet = async (tweetTopic: string) => {
  const Gemini = new gemini();
  const createTweetPrompt = generateTweet(tweetTopic);
  return Gemini.askGemini(createTweetPrompt);

};
