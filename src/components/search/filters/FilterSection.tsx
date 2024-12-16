import { Filter } from 'lucide-react';
import { useSearch } from '../../../contexts/SearchContext';
import FilterSelect from './FilterSelect';
import { countryOptions, studyLevelOptions, fieldOptions, scholarshipOptions, visaOptions, languageOptions, financialOptions } from '../../../data/filterOptions';

export default function FilterSection() {
  const { state, dispatch } = useSearch();

  const handleFilterChange = (key: string, value: string) => {
    dispatch({
      type: 'UPDATE_FILTERS',
      payload: { [key]: value }
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Filter className="w-5 h-5 text-primary-500" />
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
      </div>

      <div className="space-y-6">
        <FilterSelect
          label="Country/Region"
          value={state.filters.country}
          onChange={(value) => handleFilterChange('country', value)}
          options={countryOptions}
        />

        <FilterSelect
          label="Study Level"
          value={state.filters.studyLevel}
          onChange={(value) => handleFilterChange('studyLevel', value)}
          options={studyLevelOptions}
        />

        <FilterSelect
          label="Field of Study"
          value={state.filters.fieldOfStudy}
          onChange={(value) => handleFilterChange('fieldOfStudy', value)}
          options={fieldOptions}
        />

        <FilterSelect
          label="Scholarship Type"
          value={state.filters.scholarshipType}
          onChange={(value) => handleFilterChange('scholarshipType', value)}
          options={scholarshipOptions}
        />

        <FilterSelect
          label="Visa Requirements"
          value={state.filters.visaRequirements}
          onChange={(value) => handleFilterChange('visaRequirements', value)}
          options={visaOptions}
        />

        <FilterSelect
          label="Language Requirements"
          value={state.filters.languageRequirements}
          onChange={(value) => handleFilterChange('languageRequirements', value)}
          options={languageOptions}
        />

        <FilterSelect
          label="Financial Requirements"
          value={state.filters.financialRequirements}
          onChange={(value) => handleFilterChange('financialRequirements', value)}
          options={financialOptions}
        />
      </div>
    </div>
  );
}