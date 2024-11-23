import React, { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { ChatContainer } from './components/Chat/ChatContainer';
import { ChatInput } from './components/ChatInput';
import { Disclaimer } from './components/Disclaimer';
import { ApiKeyMissing } from './components/ApiKeyMissing';
import { useChat } from './hooks/useChat';
import { ApiKeyError } from './services/ai';

export default function App() {
  const { messages, isLoading, error, sendMessage } = useChat();
  const [isApiKeyMissing, setIsApiKeyMissing] = useState(false);

  useEffect(() => {
    if (!import.meta.env.VITE_GEMINI_API_KEY) {
      setIsApiKeyMissing(true);
    }
  }, []);

  const handleSendMessage = async (content: string) => {
    try {
      await sendMessage(content);
    } catch (err) {
      if (err instanceof ApiKeyError) {
        setIsApiKeyMissing(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-2xl">
        <Header />
        <Disclaimer />
        
        {isApiKeyMissing ? (
          <ApiKeyMissing />
        ) : (
          <ChatContainer messages={messages} error={error} />
        )}

        <div className="mt-4">
          <ChatInput 
            onSend={handleSendMessage} 
            disabled={isLoading || isApiKeyMissing} 
          />
        </div>
      </div>
    </div>
  );
}