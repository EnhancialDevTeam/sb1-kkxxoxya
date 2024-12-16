import { useState } from 'react';
import SearchHeader from '../components/destinations/search/SearchHeader';
import SearchFilters from '../components/destinations/search/SearchFilters';
import SearchResults from '../components/destinations/search/SearchResults';
import CompareModal from '../components/destinations/search/CompareModal';
import FeaturedDestinations from '../components/destinations/featured/FeaturedDestinations';
import { useDestinationSearch } from '../hooks/useDestinationSearch';
import { mockInstitutions } from '../data/mockInstitutions';

export default function StudyDestinations() {
  const {
    results,
    totalResults,
    currentPage,
    totalPages,
    bookmarkedIds,
    compareIds,
    setSearchQuery,
    setFilters,
    setSortOption,
    setCurrentPage,
    toggleBookmark,
    toggleCompare
  } = useDestinationSearch(mockInstitutions);

  const [showCompare, setShowCompare] = useState(false);

  const compareInstitutions = mockInstitutions.filter(
    inst => compareIds.has(inst.id)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <SearchHeader onSearch={setSearchQuery} />
      <FeaturedDestinations />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <SearchFilters
              filters={{
                country: '',
                institution: '',
                programLevel: '',
                fieldOfStudy: '',
                tuitionRange: [0, 100000],
                language: '',
                duration: ''
              }}
              onFilterChange={setFilters}
            />
          </div>
          
          <div className="md:col-span-3">
            <SearchResults
              results={results}
              sortOption="relevance"
              onSort={setSortOption}
              onBookmark={toggleBookmark}
              bookmarkedIds={bookmarkedIds}
            />
          </div>
        </div>
      </div>

      {compareIds.size > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div>
              <span className="font-medium">{compareIds.size}</span> institutions selected
            </div>
            <button
              onClick={() => setShowCompare(true)}
              className="bg-primary-500 text-white px-6 py-2 rounded-md hover:bg-primary-600"
            >
              Compare Selected
            </button>
          </div>
        </div>
      )}

      {showCompare && (
        <CompareModal
          institutions={compareInstitutions}
          onClose={() => setShowCompare(false)}
        />
      )}
    </div>
  );
}