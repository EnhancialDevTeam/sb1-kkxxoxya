import { ArrowRight } from 'lucide-react';

const programs = [
  {
    category: 'Business & Management',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    programs: [
      'Master of Business Administration (MBA)',
      'Bachelor of Commerce',
      'International Business Management'
    ],
    universities: '200+',
    countries: '15+'
  },
  {
    category: 'Engineering & Technology',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80',
    programs: [
      'Computer Science & IT',
      'Mechanical Engineering',
      'Electrical Engineering'
    ],
    universities: '300+',
    countries: '20+'
  },
  {
    category: 'Health Sciences',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    programs: [
      'Medicine',
      'Nursing',
      'Public Health'
    ],
    universities: '150+',
    countries: '12+'
  },
  {
    category: 'Arts & Humanities',
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80',
    programs: [
      'Media & Communications',
      'Design',
      'Liberal Arts'
    ],
    universities: '180+',
    countries: '18+'
  }
];

export default function FeaturedPrograms() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Programs</h2>
          <p className="text-xl text-gray-600">
            Explore our most popular academic programs across various disciplines
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={program.image}
                  alt={program.category}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{program.category}</h3>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-2 mb-4">
                  {program.programs.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>{program.universities} Universities</span>
                  <span>{program.countries} Countries</span>
                </div>
                <button className="text-primary-500 font-medium inline-flex items-center hover:text-primary-600">
                  Explore Programs <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}