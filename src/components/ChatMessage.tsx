import React from 'react';
import { MessageCircle, Bot } from 'lucide-react';
import { Message } from '../types/chat';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
        {isUser ? <MessageCircle size={20} /> : <Bot size={20} />}
      </div>
      <div className={`max-w-[80%] rounded-lg p-3 ${
        isUser ? 'bg-indigo-500 text-white' : 'bg-gray-100'
      }`}>
        {message.content}
      </div>
    </div>
  );
}