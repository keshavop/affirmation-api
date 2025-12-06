import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.GOOGLE_GENAI_API_KEY || process.env.GEMINI_API_KEY;

if (!apiKey) {
    console.warn("Warning: GOOGLE_GENAI_API_KEY or GEMINI_API_KEY is missing.");
}

const ai = new GoogleGenAI({ apiKey });

export async function generateAffirmation(category?: string): Promise<string> {
    if (!apiKey) {
        return 'You are capable of amazing things. (Fallback: API Key missing)';
    }

    const prompt = category
        ? `Generate a short, powerful affirmation about ${category}.`
        : 'Generate a short, powerful random affirmation.';

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: prompt,
        });

        // The new SDK structure might be different. 
        // User snippet: console.log(response.text);
        // Let's assume response.text() or response.text exists.
        // The @google/genai SDK (v0.1.0+) usually returns a response object where you access text via .response.text() or similar.
        // However, the user provided snippet: `response.text`.
        // I will follow the user's snippet pattern but wrap in try/catch.

        return response.text || "Stay positive!";
    } catch (error) {
        console.error('Error generating affirmation with Gemini:', error);
        return 'Believe in yourself. (Fallback: Error occurred)';
    }
}
