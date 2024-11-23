import React from 'react';
import { Sparkles } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <Sparkles size={40} className="mb-4 text-indigo-500" />
      <h2 className="mb-2 text-xl font-semibold text-gray-800">
        Welcome to Your Wellness Journey
      </h2>
      <p className="max-w-md text-gray-600">
        Feel free to ask about:
      </p>
      <ul className="mt-4 space-y-2 text-gray-600">
        <li>• Stress management techniques</li>
        <li>• Mindfulness and meditation</li>
        <li>• Emotional well-being</li>
        <li>• Self-care strategies</li>
        <li>• Sleep improvement tips</li>
      </ul>
    </div>
  );
}