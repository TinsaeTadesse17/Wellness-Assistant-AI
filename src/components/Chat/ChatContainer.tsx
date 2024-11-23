import React from 'react';
import { Message } from '../../types/chat';
import { ChatMessage } from './ChatMessage';
import { EmptyState } from './EmptyState';

interface ChatContainerProps {
  messages: Message[];
  error: string | null;
}

export function ChatContainer({ messages, error }: ChatContainerProps) {
  return (
    <div className="mt-6 space-y-4 rounded-lg bg-white p-4 shadow-md">
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
      
      {error && (
        <div className="rounded-lg bg-red-50 p-3 text-red-700">
          {error}
        </div>
      )}

      {messages.length === 0 && <EmptyState />}
    </div>
  );
}