import { TweetSuggestion } from "../prompts/TweetSuggestion";
import { gemini } from "../repository/gemini";

export const tweetSuggestion = async (tweetText: string) => {
  const Gemini = new gemini();
  const SuggestionPrompt: string = TweetSuggestion(tweetText);
  return await Gemini.askGemini(SuggestionPrompt);
  
};
