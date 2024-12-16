import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutCTA() {
  return (
    <section className="py-24 bg-primary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Join Thousands of Students Who Trust Jestone
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="bg-white text-primary-500 px-6 py-3 rounded-md font-semibold hover:bg-primary-50 inline-flex items-center"
          >
            Start Your Journey Today <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/services"
            className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 inline-flex items-center"
          >
            Learn More About Our Services <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}