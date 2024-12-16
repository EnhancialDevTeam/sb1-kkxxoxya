import { Wallet, GraduationCap, Stamp, Briefcase } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: Wallet,
    title: 'Study Loans',
    description: 'Flexible study loan options for over 1,000 schools worldwide. Let us guide you through the process!',
    ctaText: 'Explore Study Loans',
    action: () => console.log('Navigate to study loans'),
  },
  {
    icon: GraduationCap,
    title: 'Admissions Processing',
    description: 'Seamless admission to 300+ partner institutions across 30 countries.',
    ctaText: 'Start Your Application',
    action: () => console.log('Navigate to admissions'),
  },
  {
    icon: Stamp,
    title: 'Visa Assistance',
    description: '99% success rate in securing study visas for top global destinations.',
    ctaText: 'Get Visa Support',
    action: () => console.log('Navigate to visa assistance'),
  },
  {
    icon: Briefcase,
    title: 'Career Advisory',
    description: 'Expert guidance for building a global career post-graduation.',
    ctaText: 'Free Career Advice',
    action: () => console.log('Navigate to career advisory'),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600">Comprehensive support for your educational journey</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              ctaText={service.ctaText}
              onClick={service.action}
            />
          ))}
        </div>
      </div>
    </section>
  );
}