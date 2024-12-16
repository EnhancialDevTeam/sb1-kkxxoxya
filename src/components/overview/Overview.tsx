import { ArrowRight } from 'lucide-react';
import OverviewStats from './OverviewStats';

export default function Overview() {
  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-800 sm:text-4xl mb-6">
            Why Choose Jestone Education?
          </h2>
          <p className="text-xl text-primary-700 leading-relaxed mb-12">
            With over 20,000 successful applications and partnerships with 300+ global institutions, 
            Jestone Education turns your study abroad dreams into reality. From career counseling 
            to visa processing, we're with you every step of the way!
          </p>
        </div>

        <OverviewStats />

        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 transition-colors">
            Learn More About Our Services
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}