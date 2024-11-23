import { GoogleGenerativeAI } from '@google/generative-ai';
import { ChatHistory, AIServiceError } from '../types/ai';
import { AI_CONFIG, INITIAL_CHAT_HISTORY } from '../config/constants';
import { getEnvVar } from '../utils/env';
import { formatResponse } from '../utils/formatResponse';

export class ApiKeyError extends Error {
  constructor() {
    super('Gemini API key is missing. Please add it to your .env file.');
    this.name = 'ApiKeyError';
  }
}

function initializeAI() {
  try {
    const apiKey = getEnvVar('VITE_GEMINI_API_KEY');
    const genAI = new GoogleGenerativeAI(apiKey);
    return genAI.getGenerativeModel({ model: AI_CONFIG.MODEL });
  } catch (error) {
    throw new ApiKeyError();
  }
}

const model = initializeAI();

export async function getChatResponse(message: string): Promise<string> {
  try {
    const chat = model.startChat({
      history: INITIAL_CHAT_HISTORY,
    });

    const structuredPrompt = `
Please provide a response in the following structured format:

Understanding:
[Empathetic acknowledgment of the user's situation]

Strategy:
[Evidence-based approaches and psychological framework]

Action Plan:
[Specific, actionable steps]

Summary:
[Brief recap and encouragement]

User's question: ${message}`;

    const result = await chat.sendMessage(structuredPrompt);
    const response = await result.response;
    return formatResponse(response.text());
  } catch (error) {
    throw new AIServiceError('Failed to get AI response');
  }
}