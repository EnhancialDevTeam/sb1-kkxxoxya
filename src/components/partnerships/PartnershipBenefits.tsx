import { TrendingUp, Globe, Award, Users } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'A Track Record of Success',
    description: '20,000+ successful student placements | 300+ partner institutions | 30+ study destinations'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Access our extensive network across UK, USA, Canada, Australia, Germany, South Korea, and beyond'
  },
  {
    icon: Award,
    title: 'Mutual Growth Opportunities',
    items: [
      'Expand access to international education',
      'Provide enhanced student opportunities',
      'Drive education innovation'
    ]
  },
  {
    icon: Users,
    title: 'Expertise and Resources',
    description: '50+ years combined industry experience from our expert consultants'
  }
];

export default function PartnershipBenefits() {
  return (
    <section id="why-partner" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner with Us</h2>
          <p className="text-xl text-gray-600">
            Discover the unique advantages of partnering with a leader in global education
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <benefit.icon className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              {benefit.description ? (
                <p className="text-gray-600">{benefit.description}</p>
              ) : (
                <ul className="space-y-2">
                  {benefit.items?.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}