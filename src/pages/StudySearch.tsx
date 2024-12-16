import SearchHero from '../components/search/SearchHero';
import AISearchSection from '../components/search/ai/AISearchSection';
import FilterSection from '../components/search/filters/FilterSection';
import DatabaseSection from '../components/search/database/DatabaseSection';
import { SearchProvider } from '../contexts/SearchContext';

export default function StudySearch() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SearchProvider>
        <SearchHero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <FilterSection />
            </div>
            <div className="lg:col-span-9">
              <AISearchSection />
              <DatabaseSection />
            </div>
          </div>
        </div>
      </SearchProvider>
    </div>
  );
}