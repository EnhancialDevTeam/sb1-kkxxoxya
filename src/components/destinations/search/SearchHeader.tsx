import { Search } from 'lucide-react';

interface SearchHeaderProps {
  onSearch: (query: string) => void;
}

export default function SearchHeader({ onSearch }: SearchHeaderProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = new FormData(form).get('query') as string;
    onSearch(query);
  };

  return (
    <header className="bg-primary-900 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 text-center">
          Find Your Perfect Study Destination
        </h1>
        
        <p className="text-lg text-primary-100 max-w-2xl mx-auto text-center mb-8 md:mb-10">
          Search through our database of top universities and educational institutions worldwide
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="text"
              name="query"
              placeholder="Search universities, programs, or locations..."
              className="w-full px-6 py-4 rounded-lg text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 border-none"
              aria-label="Search universities, programs, or locations"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Search"
            >
              <Search className="w-6 h-6" />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}