import { Users, Gift, Clock } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'How it Works',
    description: 'Share your unique referral code with friends interested in studying abroad'
  },
  {
    icon: Gift,
    title: 'Benefits',
    description: 'Earn rewards for every successful referral while helping others achieve their dreams'
  },
  {
    icon: Clock,
    title: 'Quick Process',
    description: 'Simple registration and fast reward payment upon successful enrollment'
  }
];

export default function ReferOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Jestone Education's Refer and Earn Programme!
          </h2>
          <p className="text-xl text-gray-600">
            This is your chance to make a real impact by helping friends, family, and acquaintances 
            discover life-changing study abroad opportunities, all while earning amazing rewards in return.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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