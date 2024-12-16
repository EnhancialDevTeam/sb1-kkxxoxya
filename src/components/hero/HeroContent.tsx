import { ArrowRight } from 'lucide-react';

interface Highlight {
  icon: string;
  text: string;
}

const highlights: Highlight[] = [
  { icon: '💰', text: 'Study Now, Pay Later' },
  { icon: '🎓', text: 'Study in 1000+ Schools Globally!' },
];

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center text-white">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Your Gateway to Study, Live, and Work Abroad!
        </h1>
        
        <div className="space-y-4 mb-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-2xl">{highlight.icon}</span>
              <span className="text-xl font-medium">{highlight.text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://prodigyfinance.com/?utm_source=jestone-education&utm_medium=website&utm_content=homepage&utm_campaign=partners-jestone-education-referral-2024"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-500 px-6 py-3 rounded-md font-semibold hover:bg-primary-50 flex items-center gap-2 transition-colors"
          >
            Explore Study Loans <ArrowRight size={20} />
          </a>
          <button className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors">
            Admission Enquiry
          </button>
        </div>
      </div>
    </div>
  );
}