import { Link } from 'react-router-dom';
import { GraduationCap, Globe, FileText, Briefcase } from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    title: 'Academic Counseling',
    description: 'Expert guidance for course selection and university admissions',
    url: '/services/academic-counseling'
  },
  {
    icon: Globe,
    title: 'Visa Assistance',
    description: '99% success rate in student visa applications',
    url: '/services/visa-assistance'
  },
  {
    icon: FileText,
    title: 'Test Preparation',
    description: 'Comprehensive preparation for IELTS, TOEFL, and other tests',
    url: '/services/test-preparation'
  },
  {
    icon: Briefcase,
    title: 'Career Support',
    description: 'Career guidance and placement assistance',
    url: '/services/career-support'
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
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.url}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              aria-label={`Learn more about ${service.title}`}
            >
              <service.icon className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <span className="text-primary-500 font-medium inline-flex items-center">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}