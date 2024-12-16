import { Search } from 'lucide-react';

export default function ProgramsHero() {
  return (
    <section className="relative min-h-[70vh] pt-16 bg-gradient-to-br from-primary-900 to-primary-700">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
          alt="Students studying"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center text-white mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Your Perfect Program
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Explore our comprehensive range of programs and courses designed to help you achieve your academic goals
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search programs, courses, or universities..."
              className="w-full px-6 py-4 rounded-lg text-gray-900 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}