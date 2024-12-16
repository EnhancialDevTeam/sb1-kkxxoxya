import { ArrowDown } from 'lucide-react';

export default function AboutHero() {
  const scrollToHistory = () => {
    const historySection = document.getElementById('company-history');
    historySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[80vh] pt-16">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
          alt="Jestone office and team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Empowering Students. Transforming Futures.
          </h1>
          <p className="text-xl text-primary-100 mb-8">
            With over a decade of experience, Jestone Education bridges the gap between 
            aspirations and global opportunities.
          </p>
          <button 
            onClick={scrollToHistory}
            className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-md hover:bg-primary-50 transition-colors"
          >
            Learn More About Our Journey
            <ArrowDown className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}