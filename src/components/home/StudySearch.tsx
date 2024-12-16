import { Search, GraduationCap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const highlights = [
  {
    icon: GraduationCap,
    title: '1000+ Programs',
    description: 'Across top-ranked universities worldwide'
  },
  {
    icon: Globe,
    title: '30+ Countries',
    description: 'Study destinations to choose from'
  }
];

export default function StudySearch() {
  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Find Your Perfect Study Program & Scholarship
            </h2>
            
            <p className="text-lg text-gray-600 mb-4">
              Access our comprehensive database of study programs across 30+ countries, 
              from undergraduate to postgraduate levels. Our extensive network includes 
              partnerships with over 300 prestigious institutions worldwide.
            </p>
            
            <p className="text-lg text-gray-600 mb-6">
              Discover scholarships and funding opportunities tailored to your profile. 
              Our expert team helps match you with programs that align with your academic 
              goals and financial requirements.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <highlight.icon className="w-6 h-6 text-primary-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/study-search"
              className="inline-flex items-center bg-primary-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-600 transition-colors"
            >
              <Search className="w-5 h-5 mr-2" />
              Find Your Perfect Study Program
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-500 rounded-lg opacity-20" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500 rounded-lg opacity-20" />
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
                alt="Diverse students celebrating graduation"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}