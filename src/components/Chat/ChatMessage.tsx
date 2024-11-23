import React from 'react';
import { MessageCircle, Brain } from 'lucide-react';
import { Message } from '../../types/chat';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
        {isUser ? <MessageCircle size={20} /> : <Brain size={20} />}
      </div>
      <div 
        className={`max-w-[80%] rounded-lg p-4 ${
          isUser ? 'bg-indigo-500 text-white' : 'bg-gray-100'
        } whitespace-pre-wrap`}
      >
        {message.content}
      </div>
    </div>
  );
}