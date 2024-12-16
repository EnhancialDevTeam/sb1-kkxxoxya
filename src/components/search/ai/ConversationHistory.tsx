import { formatDistanceToNow } from 'date-fns';
import { MessageSquare } from 'lucide-react';

interface ConversationHistoryProps {
  history: Array<{
    query: string;
    response: { text: string };
    timestamp: string;
  }>;
}

export default function ConversationHistory({ history }: ConversationHistoryProps) {
  if (history.length <= 1) return null;

  return (
    <div className="mt-8 border-t border-gray-200 pt-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Previous Questions
      </h3>
      <div className="space-y-4">
        {history.slice(0, -1).reverse().map((item, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <MessageSquare className="w-5 h-5 text-primary-500 mt-1" />
              <div>
                <p className="text-gray-900 font-medium">{item.query}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {formatDistanceToNow(new Date(item.timestamp), { addSuffix: true })}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}