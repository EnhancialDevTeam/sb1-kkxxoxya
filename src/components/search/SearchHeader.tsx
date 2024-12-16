import { Sparkles } from 'lucide-react';

export default function SearchHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-center space-x-2">
          <Sparkles className="w-6 h-6 text-primary-500" />
          <h1 className="text-2xl font-bold text-gray-900">AI-Powered Search</h1>
        </div>
        <p className="mt-2 text-center text-gray-600">
          Get instant answers to your education-related questions
        </p>
      </div>
    </header>
  );
}