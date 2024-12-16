import { GraduationCap, Globe, Users, Briefcase, Heart, DollarSign } from 'lucide-react';

const benefits = [
  {
    icon: GraduationCap,
    title: 'World-Class Education',
    description: 'Access to top-ranked universities and diverse academic programs'
  },
  {
    icon: Globe,
    title: 'Cultural Exposure',
    description: 'Immerse yourself in new cultures and expand your global perspective'
  },
  {
    icon: Users,
    title: 'Global Network',
    description: 'Build international connections and lifelong friendships'
  },
  {
    icon: Briefcase,
    title: 'Career Opportunities',
    description: 'Enhanced career prospects and global job market access'
  },
  {
    icon: Heart,
    title: 'Personal Growth',
    description: 'Develop independence, adaptability, and confidence'
  },
  {
    icon: DollarSign,
    title: 'Investment Value',
    description: 'Strong return on investment with global career opportunities'
  }
];

export default function WhyStudyAbroad() {
  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Study Abroad with Jestone?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your educational journey into a life-changing experience
            with our comprehensive support and guidance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <benefit.icon className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}