import { useState } from 'react';
import { Message } from '../types/chat';
import { getChatResponse, ApiKeyError } from '../services/ai';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (content: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const userMessage: Message = { role: 'user', content };
      setMessages(prev => [...prev, userMessage]);

      const response = await getChatResponse(content);
      
      const aiMessage: Message = { role: 'assistant', content: response };
      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      if (err instanceof ApiKeyError) {
        throw err; // Let the parent component handle API key errors
      } else {
        setError('Failed to get response. Please try again.');
        console.error(err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    isLoading,
    error,
    sendMessage
  };
}