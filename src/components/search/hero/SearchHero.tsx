import { Search } from 'lucide-react';

export default function SearchHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 to-primary-700 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Find Your Perfect Study Program & Scholarship
          </h1>
          <h2 className="text-xl text-primary-100 max-w-2xl mx-auto">
            Get instant information on study & scholarships
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-primary-100">
            <p className="mb-4">
              Access our comprehensive database of study programs across 30+ countries, 
              from undergraduate to postgraduate levels. Our extensive network includes 
              partnerships with over 300 prestigious institutions worldwide.
            </p>
            <p>
              Discover scholarships and funding opportunities tailored to your profile. 
              Our expert team helps match you with programs that align with your academic 
              goals and financial requirements.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center mt-8 text-primary-100">
          <Search className="w-5 h-5 mr-2" />
          <span>Start searching to explore opportunities</span>
        </div>
      </div>
    </section>
  );
}