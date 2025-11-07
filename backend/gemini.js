import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function summarizeStudentNotes(noteContent) {
  try {
    const prompt = `You are a helpful study assistant. Summarize the following notes for a college student.
Make the summary short, easy to read, and focus on key points and definitions.
Avoid complex sentences and make it understandable even if the topic is technical.

Text: ${noteContent}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text || "Unable to generate summary";
  } catch (error) {
    console.error("Gemini API error:", error);
    throw new Error("Failed to generate summary");
  }
}


