import { createContext, useContext, useReducer, ReactNode } from 'react';
import { SearchFilters, SearchState, SearchAction } from '../types/search';

const initialState: SearchState = {
  query: '',
  filters: {
    country: '',
    studyLevel: '',
    fieldOfStudy: '',
    scholarshipType: '',
    visaRequirements: '',
    languageRequirements: '',
    financialRequirements: ''
  },
  conversationHistory: [],
  savedResponses: [],
  isLoading: false,
  error: null
};

const SearchContext = createContext<{
  state: SearchState;
  dispatch: React.Dispatch<SearchAction>;
} | undefined>(undefined);

function searchReducer(state: SearchState, action: SearchAction): SearchState {
  switch (action.type) {
    case 'SET_QUERY':
      return { ...state, query: action.payload };
    case 'UPDATE_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload } };
    case 'ADD_TO_HISTORY':
      return {
        ...state,
        conversationHistory: [...state.conversationHistory, action.payload]
      };
    case 'SAVE_RESPONSE':
      return {
        ...state,
        savedResponses: [...state.savedResponses, action.payload]
      };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export function SearchProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}