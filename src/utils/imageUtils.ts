export function validateImageUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function getFallbackImage(type: 'institution' | 'campus'): string {
  return type === 'institution'
    ? 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80'
    : 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80';
}