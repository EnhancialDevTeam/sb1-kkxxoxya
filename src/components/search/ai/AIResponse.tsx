import { Bookmark, Share2 } from 'lucide-react';

interface AIResponseProps {
  response: {
    text: string;
    sources: Array<{ title: string; url: string }>;
  };
}

export default function AIResponse({ response }: AIResponseProps) {
  const handleSave = () => {
    // Implement save functionality
  };

  const handleShare = () => {
    // Implement share functionality
  };

  return (
    <div className="mt-8 bg-gray-50 rounded-lg p-6">
      <div className="prose max-w-none mb-6">
        {response.text}
      </div>

      {response.sources.length > 0 && (
        <div className="border-t border-gray-200 pt-4 mt-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Sources:</h3>
          <ul className="space-y-1">
            {response.sources.map((source, index) => (
              <li key={index}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-500 hover:text-primary-600"
                >
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-end space-x-4 mt-4">
        <button
          onClick={handleSave}
          className="text-gray-500 hover:text-primary-500 flex items-center"
        >
          <Bookmark className="w-5 h-5 mr-1" />
          Save
        </button>
        <button
          onClick={handleShare}
          className="text-gray-500 hover:text-primary-500 flex items-center"
        >
          <Share2 className="w-5 h-5 mr-1" />
          Share
        </button>
      </div>
    </div>
  );
}