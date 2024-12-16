import { MessageSquare } from 'lucide-react';

interface AIQueryInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (query: string) => void;
  isLoading: boolean;
  error: string | null;
}

export default function AIQueryInput({
  value,
  onChange,
  onSubmit,
  isLoading,
  error
}: AIQueryInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter your study or scholarship related questions (e.g., 'What are the visa requirements for studying in Canada?' or 'Tell me about engineering scholarships in the UK')"
          className={`w-full h-32 p-4 border rounded-lg resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
          maxLength={500}
        />
        <div className="absolute bottom-2 right-2 text-sm text-gray-500">
          {value.length}/500
        </div>
      </div>

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={isLoading || value.length === 0}
        className="bg-primary-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center"
      >
        <MessageSquare className="w-5 h-5 mr-2" />
        {isLoading ? 'Processing...' : 'Ask Question'}
      </button>
    </form>
  );
}