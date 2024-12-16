import { ArrowRight } from 'lucide-react';

interface NewsCardProps {
  title: string;
  snippet: string;
  date: string;
  image: string;
  onClick: () => void;
}

export default function NewsCard({ title, snippet, date, image, onClick }: NewsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <p className="text-sm text-primary-500 mb-2">{date}</p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{snippet}</p>
        </div>
        <button
          onClick={onClick}
          className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors mt-4"
        >
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}