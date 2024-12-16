export function validateQuery(query: string): string | null {
  if (!query.trim()) {
    return 'Query cannot be empty';
  }

  if (query.length < 10) {
    return 'Query must be at least 10 characters long';
  }

  if (/[<>]/.test(query)) {
    return 'Query contains invalid characters';
  }

  // Add more validation rules as needed

  return null;
}