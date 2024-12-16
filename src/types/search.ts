export interface SearchFilters {
  country: string;
  studyLevel: string;
  fieldOfStudy: string;
  scholarshipType: string;
  visaRequirements: string;
  languageRequirements: string;
  financialRequirements: string;
}

export interface SearchState {
  query: string;
  filters: SearchFilters;
  conversationHistory: Array<{
    query: string;
    response: { text: string; sources?: Array<{ title: string; url: string }> };
    timestamp: string;
  }>;
  savedResponses: Array<{
    query: string;
    response: { text: string; sources?: Array<{ title: string; url: string }> };
    timestamp: string;
  }>;
  isLoading: boolean;
  error: string | null;
}

export type SearchAction =
  | { type: 'SET_QUERY'; payload: string }
  | { type: 'UPDATE_FILTERS'; payload: Partial<SearchFilters> }
  | { type: 'ADD_TO_HISTORY'; payload: { query: string; response: any; timestamp: string } }
  | { type: 'SAVE_RESPONSE'; payload: { query: string; response: any; timestamp: string } }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };