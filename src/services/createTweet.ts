import { generateTweet } from "../prompts/createTweet";
import { gemini } from "../repository/gemini";

export const createTweet = async (tweetTopic: string) => {
  const Gemini = new gemini();
  const createTweetPrompt = generateTweet(tweetTopic);
  const response = await Gemini.askGemini(createTweetPrompt);
  return response.stream.return;
};
