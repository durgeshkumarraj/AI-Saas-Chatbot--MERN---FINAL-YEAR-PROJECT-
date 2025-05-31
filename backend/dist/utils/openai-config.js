import OpenAI from "openai";

export const configureOpenAI = () => {
  return new OpenAI({
    apiKey: process.env.DEEPSEEK_API_KEY, // Securely use environment variable
    baseURL: "https://api.deepseek.com",  // Pointing to DeepSeek API
  });
};
