import { Shield, Clock, HeartHandshake, Headphones } from 'lucide-react';

const supportServices = [
  {
    icon: Shield,
    title: 'Pre-Departure Support',
    description: 'Comprehensive preparation for your journey abroad',
    features: [
      'Travel arrangements assistance',
      'Accommodation guidance',
      'Cultural orientation',
      'Insurance support'
    ]
  },
  {
    icon: Clock,
    title: 'Post-Arrival Assistance',
    description: 'Helping you settle into your new environment',
    features: [
      'Airport pickup coordination',
      'Bank account setup',
      'Local registration support',
      'Emergency assistance'
    ]
  },
  {
    icon: HeartHandshake,
    title: 'Student Welfare',
    description: 'Ensuring your well-being throughout your stay',
    features: [
      'Regular check-ins',
      'Mental health support',
      'Academic progress monitoring',
      'Social integration activities'
    ]
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for emergencies',
    features: [
      'Emergency helpline',
      'Online support portal',
      'Quick response team',
      'Local support network'
    ]
  }
];

export default function SupportServices() {
  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive assistance for a smooth transition abroad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportServices.map((service, index) => (
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