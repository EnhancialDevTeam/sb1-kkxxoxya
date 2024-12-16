import { Search, Globe } from 'lucide-react';
import { useSearch } from '../../contexts/SearchContext';

export default function SearchHero() {
  const { dispatch } = useSearch();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('query') as string;
    dispatch({ type: 'SET_QUERY', payload: query });
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-900 to-primary-700 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Find Your Perfect Study & Scholarship Opportunities
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Get personalized recommendations and expert guidance for your educational journey
          </p>
        </div>

        <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="text"
              name="query"
              placeholder="Enter your study or scholarship related questions..."
              className="w-full px-6 py-4 rounded-lg text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              maxLength={500}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-500 text-white p-2 rounded-md hover:bg-primary-600"
            >
              <Search className="w-6 h-6" />
            </button>
          </div>
          <div className="flex items-center justify-center mt-4 text-primary-100">
            <Globe className="w-5 h-5 mr-2" />
            <span>Available in multiple languages</span>
          </div>
        </form>
      </div>
    </section>
  );
}