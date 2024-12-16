import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredDestinations = [
  {
    country: 'United States',
    image: 'https://images.unsplash.com/photo-1569982175971-d92b01cf8694?auto=format&fit=crop&q=80',
    universities: '1000+',
    students: '5000+',
    description: 'Home to world-renowned institutions like Harvard, MIT, and Stanford.',
    features: ['Optional Practical Training (OPT)', 'Diverse Campus Life', 'Research Opportunities']
  },
  {
    country: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80',
    universities: '500+',
    students: '3000+',
    description: 'Quality education from Oxford, Cambridge, and Imperial College London.',
    features: ['Post-Study Work Visa', 'Rich Cultural Heritage', 'Global Recognition']
  },
  {
    country: 'Canada',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80',
    universities: '300+',
    students: '2500+',
    description: 'Excellent quality of life and post-graduation work opportunities.',
    features: ['Work While Studying', 'Immigration Pathways', 'Affordable Education']
  },
  {
    country: 'Australia',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80',
    universities: '200+',
    students: '2000+',
    description: 'World-class education in a multicultural environment.',
    features: ['Post-Study Work Rights', 'High Living Standards', 'Strong Job Market']
  }
];

export default function FeaturedDestinations() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Study Destinations</h2>
          <p className="text-xl text-gray-600">
            Choose from our most sought-after educational destinations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDestinations.map((destination, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={destination.image}
                  alt={destination.country}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{destination.country}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <ul className="space-y-2 mb-4">
                  {destination.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{destination.universities} Universities</span>
                  <span>{destination.students} Students</span>
                </div>
                <Link
                  to="/study-destinations"
                  className="mt-4 text-primary-500 font-medium inline-flex items-center hover:text-primary-600"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}