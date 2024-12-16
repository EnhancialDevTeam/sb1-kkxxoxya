interface SearchResultCardProps {
  title: string;
  content: string;
  source?: string;
}

export default function SearchResultCard({ title, content, source }: SearchResultCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{content}</p>
      {source && (
        <p className="text-sm text-gray-500">
          Source: {source}
        </p>
      )}
    </div>
  );
}