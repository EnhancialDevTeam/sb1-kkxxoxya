import { useState } from 'react';
import { School, Building2, Wrench, Cpu, BookOpen } from 'lucide-react';

const partnerships = [
  {
    Icon: School,
    title: 'Educational Institutions',
    description: 'Partner with universities and colleges to expand your global reach and attract qualified international students.',
    benefits: [
      'Access to qualified student pipeline',
      'Local market representation',
      'Admission process support',
      'Student recruitment campaigns'
    ]
  },
  {
    Icon: Building2,
    title: 'Corporate Partners',
    description: 'Collaborate on internship programs, career development initiatives, and industry-specific training.',
    benefits: [
      'Talent pipeline development',
      'Industry-specific programs',
      'Work placement opportunities',
      'Professional development'
    ]
  },
  {
    Icon: Wrench,
    title: 'Service Providers',
    description: 'Join our network of accommodation, insurance, and student service providers.',
    benefits: [
      'Access to international students',
      'Marketing exposure',
      'Service integration',
      'Growth opportunities'
    ]
  },
  {
    Icon: Cpu,
    title: 'Technology Partners',
    description: 'Integrate your EdTech solutions with our platform to enhance the student experience.',
    benefits: [
      'Platform integration',
      'Market validation',
      'User feedback',
      'Joint development'
    ]
  },
  {
    Icon: BookOpen,
    title: 'Research Collaborators',
    description: 'Engage in research projects focused on international education and student mobility.',
    benefits: [
      'Data access',
      'Research funding',
      'Publication opportunities',
      'Industry insights'
    ]
  }
];

export default function PartnershipTypes() {
  const [activeTab, setActiveTab] = useState(0);
  const activePartnership = partnerships[activeTab];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
          <p className="text-xl text-gray-600">
            Explore our diverse partnership programs designed for different stakeholders
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {partnerships.map((partnership, index) => {
            const Icon = partnership.Icon;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-md font-medium flex items-center ${
                  activeTab === index
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {partnership.title}
              </button>
            );
          })}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <activePartnership.Icon className="w-12 h-12 text-primary-500 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {activePartnership.title}
              </h3>
              <p className="text-gray-600">{activePartnership.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Key Benefits</h4>
              <ul className="space-y-3">
                {activePartnership.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}