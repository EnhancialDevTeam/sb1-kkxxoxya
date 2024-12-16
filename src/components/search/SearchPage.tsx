import SearchHero from './hero/SearchHero';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import SearchFooter from './SearchFooter';

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SearchHero />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <SearchBox />
        <SearchResults />
      </main>
      <SearchFooter />
    </div>
  );
}