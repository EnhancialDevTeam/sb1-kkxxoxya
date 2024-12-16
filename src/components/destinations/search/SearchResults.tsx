import { SortOption, Institution } from '../../../types/destinations';
import ResultsHeader from './results/ResultsHeader';
import ResultsList from './results/ResultsList';
import NoResults from './results/NoResults';

interface SearchResultsProps {
  results: Institution[];
  sortOption: SortOption;
  onSort: (option: SortOption) => void;
  onBookmark: (institutionId: string) => void;
  bookmarkedIds: Set<string>;
}

export default function SearchResults({
  results,
  sortOption,
  onSort,
  onBookmark,
  bookmarkedIds
}: SearchResultsProps) {
  if (results.length === 0) {
    return <NoResults />;
  }

  return (
    <div>
      <ResultsHeader
        count={results.length}
        sortOption={sortOption}
        onSort={onSort}
      />
      <ResultsList
        results={results}
        bookmarkedIds={bookmarkedIds}
        onBookmark={onBookmark}
      />
    </div>
  );
}