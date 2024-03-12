import { GoogleGenerativeAI } from "@google/generative-ai";

export class gemini {
  async askGemini(prompt: string) {
    const genAI = new GoogleGenerativeAI(process.env.GAMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    return await model.generateContentStream(prompt);
  }
}

