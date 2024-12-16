import { ArrowRight } from 'lucide-react';

interface FollowUpSuggestionsProps {
  onSelect: (question: string) => void;
}

export default function FollowUpSuggestions({ onSelect }: FollowUpSuggestionsProps) {
  const suggestions = [
    'What are the language requirements for this program?',
    'Tell me about available scholarships',
    'What are the application deadlines?'
  ];

  return (
    <div className="mt-6">
      <h3 className="text-sm font-medium text-gray-900 mb-3">
        Follow-up Questions
      </h3>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSelect(suggestion)}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-gray-200"
          >
            {suggestion}
            <ArrowRight className="ml-1 w-4 h-4" />
          </button>
        ))}
      </div>
    </div>
  );
}