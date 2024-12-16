import { useState, useEffect, useMemo } from 'react';
import { Institution, SearchFilters, SortOption } from '../types/destinations';

const ITEMS_PER_PAGE = 10;

export function useDestinationSearch(initialData: Institution[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({
    country: '',
    institution: '',
    programLevel: '',
    fieldOfStudy: '',
    tuitionRange: [0, 100000],
    language: '',
    duration: ''
  });
  const [sortOption, setSortOption] = useState<SortOption>('relevance');
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [compareIds, setCompareIds] = useState<Set<string>>(new Set());

  // Filter and sort results
  const filteredResults = useMemo(() => {
    return initialData.filter(institution => {
      const matchesSearch = !searchQuery || 
        institution.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        institution.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCountry = !filters.country || 
        institution.country.toLowerCase() === filters.country.toLowerCase();

      const matchesLanguage = !filters.language ||
        institution.languages.includes(filters.language);

      return matchesSearch && matchesCountry && matchesLanguage;
    });
  }, [initialData, searchQuery, filters]);

  // Sort results
  const sortedResults = useMemo(() => {
    return [...filteredResults].sort((a, b) => {
      switch (sortOption) {
        case 'ranking':
          return a.ranking.world - b.ranking.world;
        case 'tuition-low':
          return a.costs.tuition.min - b.costs.tuition.min;
        case 'tuition-high':
          return b.costs.tuition.max - a.costs.tuition.max;
        default:
          return 0;
      }
    });
  }, [filteredResults, sortOption]);

  // Paginate results
  const paginatedResults = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedResults.slice(start, start + ITEMS_PER_PAGE);
  }, [sortedResults, currentPage]);

  const totalPages = Math.ceil(sortedResults.length / ITEMS_PER_PAGE);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleCompare = (id: string) => {
    setCompareIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else if (next.size < 3) {
        next.add(id);
      }
      return next;
    });
  };

  return {
    results: paginatedResults,
    totalResults: filteredResults.length,
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
  };
}