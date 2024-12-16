import { Globe, TrendingUp, Users, Laptop } from 'lucide-react';

const values = [
  {
    icon: Globe,
    title: 'Global Network Access',
    description: 'Leverage our extensive presence in key markets across Africa, Asia, and beyond.'
  },
  {
    icon: TrendingUp,
    title: 'Market Expertise',
    description: '50+ years of combined industry experience in international education.'
  },
  {
    icon: Users,
    title: 'Student Pipeline',
    description: 'Strong presence in African markets with a growing network of qualified students.'
  },
  {
    icon: Laptop,
    title: 'Innovation Capability',
    description: 'State-of-the-art technology platform and operational excellence.'
  }
];

export default function ValueProposition() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner with Jestone?</h2>
          <p className="text-xl text-gray-600">
            Discover the unique advantages of partnering with a leader in global education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <value.icon className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}