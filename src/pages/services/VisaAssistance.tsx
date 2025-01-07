import { Globe, CheckCircle, Clock, FileText } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: '99% Success Rate',
    description: 'Proven track record of successful visa applications across major study destinations'
  },
  {
    icon: Clock,
    title: 'Timely Processing',
    description: 'Efficient handling of applications with strict adherence to deadlines'
  },
  {
    icon: FileText,
    title: 'Document Support',
    description: 'Complete assistance with visa documentation and requirements'
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Expert knowledge of visa processes for all major study destinations'
  }
];

const processSteps = [
  {
    title: 'Initial Assessment',
    description: 'Review of academic background and visa requirements',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80'
  },
  {
    title: 'Documentation',
    description: 'Preparation and verification of all required documents',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80'
  },
  {
    title: 'Application Filing',
    description: 'Submission of visa application with proper documentation',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80'
  }
];

export default function VisaAssistance() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1569982175971-d92b01cf8694?auto=format&fit=crop&q=80"
            alt="Visa assistance and documentation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Student Visa Assistance
            </h1>
            <p className="text-xl text-primary-100">
              Expert guidance for successful visa applications with our 99% success rate
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Visa Application Process
            </h2>
            <p className="text-xl text-gray-600">
              A streamlined approach to ensure successful visa outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-primary-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: '99%', label: 'Success Rate' },
              { value: '30+', label: 'Countries Covered' },
              { value: '10k+', label: 'Successful Applications' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Start Your Visa Application?
          </h2>
          <button className="bg-primary-500 text-white px-8 py-4 rounded-md font-semibold hover:bg-primary-600 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}