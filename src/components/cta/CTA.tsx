import { MessageCircle, Briefcase, Phone } from 'lucide-react';
import CTAButton from './CTAButton';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-500 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl opacity-90">Take the first step towards your global education today</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <CTAButton
            icon={MessageCircle}
            text="Talk to a Counselor"
            variant="secondary"
            onClick={() => console.log('Navigate to booking form')}
          />
          
          <CTAButton
            icon={Briefcase}
            text="Career Advisory"
            variant="secondary"
            onClick={() => console.log('Navigate to career advisory')}
          />
          
          <CTAButton
            icon={Phone}
            text="Contact Us"
            variant="secondary"
            onClick={() => console.log('Navigate to contact page')}
          />
        </div>
      </div>
    </section>
  );
}