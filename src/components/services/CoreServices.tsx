import { GraduationCap, Globe, FileText, Briefcase } from 'lucide-react';

const coreServices = [
  {
    icon: GraduationCap,
    title: 'Academic Counseling',
    description: 'Expert guidance for course selection and university admissions',
    features: [
      'Personalized program recommendations',
      'University selection assistance',
      'Application strategy planning',
      'Document preparation support'
    ]
  },
  {
    icon: Globe,
    title: 'Visa Assistance',
    description: '99% success rate in student visa applications',
    features: [
      'Visa requirement analysis',
      'Documentation preparation',
      'Interview preparation',
      'Application tracking'
    ]
  },
  {
    icon: FileText,
    title: 'Test Preparation',
    description: 'Comprehensive preparation for IELTS, TOEFL, and other tests',
    features: [
      'Personalized study plans',
      'Practice tests and materials',
      'Expert instructors',
      'Score improvement guarantee'
    ]
  },
  {
    icon: Briefcase,
    title: 'Career Support',
    description: 'Career guidance and placement assistance',
    features: [
      'Career path planning',
      'Resume building',
      'Interview preparation',
      'Job placement support'
    ]
  }
];

export default function CoreServices() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive support throughout your educational journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreServices.map((service, index) => (
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