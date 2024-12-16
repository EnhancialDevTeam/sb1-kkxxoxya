import { ArrowUpDown } from 'lucide-react';
import { SortOption } from '../../../../types/destinations';

interface ResultsHeaderProps {
  count: number;
  sortOption: SortOption;
  onSort: (option: SortOption) => void;
}

export default function ResultsHeader({
  count,
  sortOption,
  onSort
}: ResultsHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="text-gray-600">{count} results found</div>
      <div className="flex items-center space-x-2">
        <ArrowUpDown className="w-4 h-4 text-gray-400" />
        <select
          value={sortOption}
          onChange={(e) => onSort(e.target.value as SortOption)}
          className="border-none text-sm focus:ring-0"
          aria-label="Sort results"
        >
          <option value="relevance">Most Relevant</option>
          <option value="ranking">Highest Ranked</option>
          <option value="tuition-low">Lowest Tuition</option>
          <option value="tuition-high">Highest Tuition</option>
        </select>
      </div>
    </div>
  );
}