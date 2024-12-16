import { Shield, Globe, Clock, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'No Collateral Required',
    description: 'Secure your loan without the need for property or assets as security'
  },
  {
    icon: Globe,
    title: 'Available Worldwide',
    description: 'Support for students from 150+ countries studying at top universities'
  },
  {
    icon: Clock,
    title: 'Flexible Repayment',
    description: 'Up to 6-month grace period after graduation to start repayments'
  },
  {
    icon: DollarSign,
    title: 'Competitive Rates',
    description: 'Variable interest rates based on your profile and program'
  }
];

export default function LoanFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Prodigy Finance?
          </h2>
          <p className="text-xl text-gray-600">
            Tailored financial solutions for international students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}