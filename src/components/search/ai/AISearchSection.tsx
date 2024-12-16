import { useState, useEffect } from 'react';
import { useSearch } from '../../../contexts/SearchContext';
import AIQueryInput from './AIQueryInput';
import AIResponse from './AIResponse';
import FollowUpSuggestions from './FollowUpSuggestions';
import ConversationHistory from './ConversationHistory';
import { useAutoSave } from '../../../hooks/useAutoSave';
import { validateQuery } from '../../../utils/queryValidation';

export default function AISearchSection() {
  const { state, dispatch } = useSearch();
  const [draftQuery, setDraftQuery] = useState('');
  const { error } = useAutoSave(draftQuery);

  const handleSubmit = async (query: string) => {
    const validationError = validateQuery(query);
    if (validationError) {
      dispatch({ type: 'SET_ERROR', payload: validationError });
      return;
    }

    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      // Simulate API call - replace with actual OpenAI integration
      const response = await new Promise(resolve => 
        setTimeout(() => resolve({ text: 'AI Response...', sources: [] }), 1000)
      );
      dispatch({ 
        type: 'ADD_TO_HISTORY', 
        payload: { query, response, timestamp: new Date().toISOString() }
      });
    } catch (err) {
      dispatch({ 
        type: 'SET_ERROR', 
        payload: 'Failed to get response. Please try again.' 
      });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        AI-Powered Study & Scholarship Assistant
      </h2>
      
      <AIQueryInput
        value={draftQuery}
        onChange={setDraftQuery}
        onSubmit={handleSubmit}
        isLoading={state.isLoading}
        error={state.error}
      />

      {state.conversationHistory.length > 0 && (
        <>
          <AIResponse 
            response={state.conversationHistory[state.conversationHistory.length - 1].response}
          />
          <FollowUpSuggestions onSelect={setDraftQuery} />
          <ConversationHistory history={state.conversationHistory} />
        </>
      )}
    </div>
  );
}