import { ArrowRight } from 'lucide-react';

export default function ReferHero() {
  const scrollToForm = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[70vh] pt-16">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
          alt="Students studying together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Help Others Achieve Their Study Abroad Dreams – And Earn Rewards!
          </h1>
          <p className="text-xl text-primary-100 mb-8">
            Join Jestone Education's Refer and Earn Programme and earn exciting rewards when they sign up for our services.
          </p>
          <button 
            onClick={scrollToForm}
            className="bg-white text-primary-500 px-6 py-3 rounded-md font-semibold hover:bg-primary-50 inline-flex items-center"
          >
            Join the Programme <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}