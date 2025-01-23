import { GraduationCap, Globe, TrendingUp, Users, ClipboardCheck, BookOpen, LineChart, School, ArrowRight } from 'lucide-react';

export default function AcademicCounseling() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced with parallax effect and better typography */}
      <section className="relative h-[70vh] pt-16 overflow-hidden">
        <div className="absolute inset-0 transform scale-105">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
            alt="Academic counseling session"
            className="w-full h-full object-cover transform scale-105 motion-safe:animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/90" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 bg-primary-400/20 backdrop-blur-sm rounded-full text-primary-50 mb-6">
              Expert Academic Guidance
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Shape Your Future with Expert Guidance
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Navigate your educational journey with confidence through our comprehensive counseling services
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all transform hover:translate-y-[-2px] hover:shadow-lg inline-flex items-center">
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section - New addition */}
      <section className="bg-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Years Experience' },
              { value: '10k+', label: 'Students Guided' },
              { value: '95%', label: 'Success Rate' },
              { value: '30+', label: 'Countries' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Pathway Counselling Section - Enhanced with better layout */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary-100 text-primary-600 rounded-full mb-4">
              Your Career Journey
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Career Pathway Counselling</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Jestone Education, we help you navigate your career journey with expert guidance and strategic insights from our team of experienced global career consultants. With a combined industry experience of over 50 years and a network of globally trained professionals from top career markets including the UK, USA, Canada, and Australia, we are uniquely positioned to provide valuable career counselling that aligns with the evolving future of work trends.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Jestone Section - Enhanced with hover effects */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary-100 text-primary-600 rounded-full mb-4">
              Why Choose Us
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Jestone Education?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We bring together expertise, global perspective, and future-focused strategies
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: 'Expert Guidance',
                description: 'Our team of experienced global career consultants brings combined industry experience of over 50 years.'
              },
              {
                icon: Globe,
                title: 'Global Perspective',
                description: 'Our network includes globally trained professionals from top career markets worldwide.'
              },
              {
                icon: TrendingUp,
                title: 'Future-Proof Strategy',
                description: 'We stay ahead of evolving trends to ensure your career pathway aligns with the future of work.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-primary-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section - Enhanced with better visual hierarchy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary-100 text-primary-600 rounded-full mb-4">
              Our Services
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive support tailored to your educational journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: ClipboardCheck,
                title: 'Comprehensive Career Assessment',
                description: 'We begin by understanding your interests, skills, values, and goals through a detailed assessment process.'
              },
              {
                icon: BookOpen,
                title: 'Personalized Career Planning',
                description: 'With a focus on your strengths and aspirations, we create a strategic career roadmap.'
              },
              {
                icon: LineChart,
                title: 'Industry Insights and Market Trends',
                description: 'Our team provides up-to-date information on industry demands and emerging careers.'
              },
              {
                icon: School,
                title: 'Education and Study Abroad Consultation',
                description: 'Expert advice on the best programs, institutions, and countries that align with your career goals.'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-gray-50 p-8 rounded-2xl hover:bg-primary-50 transition-colors duration-300"
              >
                <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="text-primary-500 font-medium inline-flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve Section - Enhanced with better visuals */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary-100 text-primary-600 rounded-full mb-4">
              Our Audience
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Serve</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored guidance for every stage of your educational journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Students',
                description: 'Explore the best academic programs and career pathways that match your interests and strengths.',
                image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80'
              },
              {
                title: 'Young Professionals',
                description: 'Navigate the early stages of your career with confidence and identify growth opportunities.',
                image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80'
              },
              {
                title: 'Experienced Professionals',
                description: 'Take your career to the next level with strategic guidance and industry insights.',
                image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80'
              }
            ].map((audience, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={audience.image}
                    alt={audience.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{audience.title}</h3>
                  <p className="text-gray-600 mb-6">{audience.description}</p>
                  <button className="text-primary-500 font-medium inline-flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section - Enhanced with better timeline visualization */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary-100 text-primary-600 rounded-full mb-4">
              The Journey
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured approach to help you achieve your goals
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 h-full w-0.5 bg-primary-100 transform -translate-x-1/2" />
              
              <div className="space-y-16">
                {[
                  {
                    step: 1,
                    title: 'Initial Consultation',
                    description: 'Begin with a one-on-one session to discuss your career goals, challenges, and expectations.'
                  },
                  {
                    step: 2,
                    title: 'Career Assessment',
                    description: 'Complete a comprehensive career assessment to identify your strengths, interests, and values.'
                  },
                  {
                    step: 3,
                    title: 'Strategy Development',
                    description: 'Receive a personalized career roadmap with actionable steps and recommendations.'
                  },
                  {
                    step: 4,
                    title: 'Ongoing Support',
                    description: 'Benefit from continuous support and guidance as you progress along your career journey.'
                  }
                ].map((step, index) => (
                  <div key={index} className="relative flex items-center">
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 ml-auto'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with better visual appeal */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
            Take the first step towards your dream career with expert guidance from Jestone Education
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all transform hover:-translate-y-1 hover:shadow-lg inline-flex items-center">
              Book a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all transform hover:-translate-y-1 inline-flex items-center">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}