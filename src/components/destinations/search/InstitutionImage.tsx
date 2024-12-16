import { validateImageUrl, getFallbackImage } from '../../../utils/imageUtils';

interface InstitutionImageProps {
  src: string;
  alt: string;
  type: 'institution' | 'campus';
  className?: string;
}

export default function InstitutionImage({ src, alt, type, className = '' }: InstitutionImageProps) {
  const imageSrc = validateImageUrl(src) ? src : getFallbackImage(type);
  
  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = getFallbackImage(type);
      }}
    />
  );
}