import { useEffect, useState } from 'react';
import { debounce } from '../utils/debounce';

export function useAutoSave(content: string) {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const saveContent = debounce(async () => {
      try {
        // Implement actual save logic here
        localStorage.setItem('draftQuery', content);
        setError(null);
      } catch (err) {
        setError('Failed to save draft');
      }
    }, 1000);

    if (content) {
      saveContent();
    }

    return () => {
      saveContent.cancel();
    };
  }, [content]);

  return { error };
}