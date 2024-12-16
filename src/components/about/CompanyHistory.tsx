import { CheckCircle } from 'lucide-react';

const milestones = [
  {
    year: '2010',
    title: 'Foundation',
    description: 'Established with a vision to transform international education access',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
  },
  {
    year: '2015',
    title: 'Global Expansion',
    description: 'Expanded operations to 10+ countries with 50+ university partnerships',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80'
  },
  {
    year: '2018',
    title: 'Digital Innovation',
    description: 'Launched digital counseling platform and visa processing system',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
  },
  {
    year: '2023',
    title: 'Industry Leadership',
    description: 'Recognized as leading education consultancy with 20,000+ success stories',
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80'
  }
];

export default function CompanyHistory() {
  return (
    <section id="company-history" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From our humble beginnings to becoming a leading force in international education, 
            every step has been guided by our commitment to student success.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-1/2 h-full w-0.5 bg-primary-100 transform -translate-x-1/2" />
          
          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8`}
              >
                <div className="flex-1">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={milestone.image} 
                      alt={milestone.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="bg-primary-500 rounded-full p-2">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-primary-500 font-bold text-2xl mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}