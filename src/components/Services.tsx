import { GraduationCap, Globe, BookOpen, Users } from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    title: 'Academic Counseling',
    description: 'Expert guidance for course selection and university admissions.',
  },
  {
    icon: Globe,
    title: 'Study Destinations',
    description: 'Explore opportunities in top educational destinations worldwide.',
  },
  {
    icon: BookOpen,
    title: 'Visa Assistance',
    description: 'Complete support for student visa application and documentation.',
  },
  {
    icon: Users,
    title: 'Student Support',
    description: 'Comprehensive assistance for a smooth transition abroad.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive support for your educational journey</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}