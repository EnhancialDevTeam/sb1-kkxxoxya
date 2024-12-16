import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const partners = [
  {
    name: 'University of Melbourne',
    logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80',
    country: 'Australia'
  },
  {
    name: 'University of Toronto',
    logo: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80',
    country: 'Canada'
  },
  {
    name: 'Imperial College London',
    logo: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80',
    country: 'UK'
  }
];

export default function Partnerships() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Global Connections for Global Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our partnerships with 300+ institutions across 30+ countries enable us to 
            provide unparalleled opportunities to students worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
              <p className="text-primary-500">{partner.country}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/study-destinations"
            className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
          >
            Explore Our Study Destinations <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}