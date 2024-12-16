import { Trophy, Users, Clock, Globe } from 'lucide-react';

const features = [
  {
    icon: Trophy,
    title: 'Top-Ranked Programs',
    description: 'Access to programs at globally recognized institutions'
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Personalized support from experienced education counselors'
  },
  {
    icon: Clock,
    title: 'Fast Processing',
    description: 'Efficient application processing and quick turnaround times'
  },
  {
    icon: Globe,
    title: 'Global Recognition',
    description: 'Programs recognized by employers worldwide'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Jestone Education?
          </h2>
          <p className="text-xl text-gray-600">
            We ensure your academic success through comprehensive support and guidance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-primary-50 rounded-lg hover:shadow-lg transition-shadow"
            >
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