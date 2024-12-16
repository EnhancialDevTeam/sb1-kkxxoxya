import { Institution } from '../../../../types/destinations';
import ResultCard from './ResultCard';

interface ResultsListProps {
  results: Institution[];
  bookmarkedIds: Set<string>;
  onBookmark: (id: string) => void;
}

export default function ResultsList({
  results,
  bookmarkedIds,
  onBookmark
}: ResultsListProps) {
  return (
    <div className="space-y-6">
      {results.map((institution) => (
        <ResultCard
          key={institution.id}
          institution={institution}
          isBookmarked={bookmarkedIds.has(institution.id)}
          onBookmark={onBookmark}
        />
      ))}
    </div>
  );
}