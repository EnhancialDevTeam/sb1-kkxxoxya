import { Search } from 'lucide-react';

export default function BlogHero() {
  return (
    <section className="relative h-[50vh] pt-16 bg-gradient-to-br from-primary-900 to-primary-700">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80"
          alt="Students studying"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Jestone Education Blog</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Insights, tips, and guides for your international education journey
          </p>
        </div>

        <div className="w-full max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-6 py-4 rounded-lg text-gray-900 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}