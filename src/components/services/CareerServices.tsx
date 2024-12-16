import { Briefcase, Award, Users, TrendingUp } from 'lucide-react';

const careerServices = [
  {
    icon: Briefcase,
    title: 'Career Planning',
    description: 'Strategic guidance for your professional journey',
    features: [
      'Career path assessment',
      'Industry insights',
      'Skills gap analysis',
      'Professional development planning'
    ]
  },
  {
    icon: Award,
    title: 'Resume Building',
    description: 'Create compelling professional profiles',
    features: [
      'Resume optimization',
      'Cover letter writing',
      'LinkedIn profile enhancement',
      'Portfolio development'
    ]
  },
  {
    icon: Users,
    title: 'Interview Preparation',
    description: 'Comprehensive interview coaching',
    features: [
      'Mock interviews',
      'Industry-specific preparation',
      'Communication skills',
      'Feedback and improvement'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Job Placement',
    description: 'Connect with top employers worldwide',
    features: [
      'Job market analysis',
      'Employer networking',
      'Application support',
      'Offer negotiation'
    ]
  }
];

export default function CareerServices() {
  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Services</h2>
          <p className="text-xl text-gray-600">
            Launch and advance your global career with expert guidance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {careerServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}