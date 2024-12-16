import { Bot } from 'lucide-react';

export default function SearchResults() {
  return (
    <section className="mt-8">
      <div className="flex items-center space-x-2 mb-4">
        <Bot className="w-6 h-6 text-primary-500" />
        <h2 className="text-xl font-semibold text-gray-900">Results</h2>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <p className="text-gray-500 text-center">
          Your results will appear here.
        </p>
      </div>
    </section>
  );
}