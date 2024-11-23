import React from 'react';
import { Key } from 'lucide-react';

export function ApiKeyMissing() {
  return (
    <div className="rounded-lg bg-red-50 p-6 text-center">
      <div className="mb-4 flex justify-center">
        <Key size={48} className="text-red-500" />
      </div>
      <h2 className="mb-2 text-lg font-semibold text-red-700">API Key Required</h2>
      <p className="mb-4 text-red-600">
        Please add your Gemini API key to continue:
      </p>
      <ol className="mx-auto max-w-md list-decimal text-left text-red-600">
        <li className="mb-2">Create a <code className="rounded bg-red-100 px-1">.env</code> file in the project root</li>
        <li className="mb-2">Add your API key: <code className="rounded bg-red-100 px-1">VITE_GEMINI_API_KEY=your-api-key-here</code></li>
        <li>Restart the development server</li>
      </ol>
    </div>
  );
}