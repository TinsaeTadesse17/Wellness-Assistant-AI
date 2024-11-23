import React from 'react';
import { Brain } from 'lucide-react';

export function Header() {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2">
        <Brain size={32} className="text-indigo-500" />
        <h1 className="text-2xl font-bold">Mental Wellness Assistant</h1>
      </div>
      <p className="mt-2 text-gray-600">
        Your companion for evidence-based mental wellness guidance and support
      </p>
    </div>
  );
}