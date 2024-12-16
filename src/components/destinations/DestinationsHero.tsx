import { useState } from 'react';
import { Search } from 'lucide-react';
import WorldMap from './WorldMap';

export default function DestinationsHero() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative min-h-[70vh] pt-16 bg-gradient-to-br from-primary-900 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center text-white mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Global Education Journey Starts Here
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Explore top study destinations worldwide and find the perfect university
            for your academic aspirations
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for countries or universities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-lg text-gray-900 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="relative h-[400px] bg-white rounded-lg shadow-xl overflow-hidden">
          <WorldMap />
        </div>
      </div>
    </section>
  );
}