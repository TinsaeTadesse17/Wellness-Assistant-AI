export interface ChatHistory {
  role: 'user' | 'model';
  parts: string;
}

export interface ChatResponse {
  text: string;
}

export class AIServiceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AIServiceError';
  }
}