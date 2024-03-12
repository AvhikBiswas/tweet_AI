import { gemini } from "../repository/gemini";



export const createTweet = async (prompt:string) => {
  const Gemini = new gemini();

  const response=await Gemini.askGemini(prompt);
  return response.stream.return;

};
