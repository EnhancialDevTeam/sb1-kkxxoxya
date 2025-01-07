import { GraduationCap, CheckCircle, Users, BookOpen } from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Personalized Program Selection',
    description: 'Expert guidance to find the perfect academic program matching your goals and qualifications'
  },
  {
    icon: CheckCircle,
    title: 'Application Support',
    description: '100% success rate in university applications with our comprehensive support'
  },
  {
    icon: Users,
    title: 'Expert Counselors',
    description: 'Access to experienced counselors with deep knowledge of global education systems'
  },
  {
    icon: BookOpen,
    title: 'Document Preparation',
    description: 'Professional assistance with all required documentation and translations'
  }
];

const testimonials = [
  {
    quote: "The counseling team helped me secure admission to my dream university. Their guidance was invaluable!",
    author: "Sarah Chen",
    program: "MSc Computer Science, University of Toronto",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  }
];

export default function AcademicCounseling() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
            alt="Academic counseling session"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Expert Academic Counseling
            </h1>
            <p className="text-xl text-primary-100">
              Get personalized guidance from experienced counselors to achieve your academic goals
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Academic Counseling?
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support for your educational journey
            </p>
          </div>

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
              Our Counseling Process
            </h2>
            <p className="text-xl text-gray-600">
              A structured approach to help you achieve your goals
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              'Initial Assessment',
              'Program Selection',
              'Application Support',
              'Ongoing Guidance'
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step}
                  </h3>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-primary-500 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from students who achieved their dreams with our guidance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-primary-500">{testimonial.program}</div>
                  </div>
                </div>
                <blockquote className="text-gray-600 italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  q: "How long does the counseling process take?",
                  a: "The duration varies based on your goals and timeline. Typically, we recommend starting 6-12 months before your intended admission date."
                },
                {
                  q: "What documents do I need to prepare?",
                  a: "Required documents include academic transcripts, standardized test scores, CV/resume, and identification documents. We'll provide a detailed checklist during your initial consultation."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Start Your Academic Journey?
          </h2>
          <button className="bg-white text-primary-500 px-6 py-3 rounded-md font-semibold hover:bg-primary-50">
            Book a Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}