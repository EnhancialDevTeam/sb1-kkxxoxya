import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

export default function Hero() {
  return (
    <div className="relative h-[70vh] pt-16">
      <HeroBackground />
      <HeroContent />
    </div>
  );
}