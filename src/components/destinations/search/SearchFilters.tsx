import { useState } from 'react';
import { SearchFilters as SearchFiltersType } from '../../../types/destinations';
import FilterSection from './filters/FilterSection';
import SelectFilter from './filters/SelectFilter';

interface SearchFiltersProps {
  filters: SearchFiltersType;
  onFilterChange: (filters: SearchFiltersType) => void;
}

export default function SearchFilters({ filters, onFilterChange }: SearchFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = (key: keyof SearchFiltersType, value: string | number[]) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' }
  ];

  const programLevelOptions = [
    { value: 'bachelors', label: "Bachelor's" },
    { value: 'masters', label: "Master's" },
    { value: 'phd', label: 'PhD' }
  ];

  const fieldOfStudyOptions = [
    { value: 'business', label: 'Business & Management' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'it', label: 'IT & Computer Science' },
    { value: 'arts', label: 'Arts & Humanities' }
  ];

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' }
  ];

  const durationOptions = [
    { value: '1-2', label: '1-2 years' },
    { value: '3-4', label: '3-4 years' },
    { value: '4+', label: '4+ years' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden w-full flex items-center justify-between text-lg font-medium mb-4"
      >
        Filters
        <span>{isOpen ? '−' : '+'}</span>
      </button>

      <div className={`${isOpen ? 'block' : 'hidden'} md:block space-y-6`}>
        <FilterSection label="Country/Region">
          <SelectFilter
            value={filters.country}
            onChange={(value) => handleFilterChange('country', value)}
            options={countryOptions}
          />
        </FilterSection>

        <FilterSection label="Program Level">
          <SelectFilter
            value={filters.programLevel}
            onChange={(value) => handleFilterChange('programLevel', value)}
            options={programLevelOptions}
          />
        </FilterSection>

        <FilterSection label="Field of Study">
          <SelectFilter
            value={filters.fieldOfStudy}
            onChange={(value) => handleFilterChange('fieldOfStudy', value)}
            options={fieldOfStudyOptions}
          />
        </FilterSection>

        <FilterSection label="Language of Instruction">
          <SelectFilter
            value={filters.language}
            onChange={(value) => handleFilterChange('language', value)}
            options={languageOptions}
          />
        </FilterSection>

        <FilterSection label="Duration">
          <SelectFilter
            value={filters.duration}
            onChange={(value) => handleFilterChange('duration', value)}
            options={durationOptions}
          />
        </FilterSection>
      </div>
    </div>
  );
}