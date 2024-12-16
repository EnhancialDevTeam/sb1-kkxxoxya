import { Calendar, Phone } from 'lucide-react';

export default function ServicesCTA() {
  return (
    <section className="py-24 bg-primary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Ready to Start Your Journey?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-primary-500 px-6 py-3 rounded-md font-semibold hover:bg-primary-50 inline-flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            Book a Free Consultation
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 inline-flex items-center">
            <Phone className="mr-2 h-5 w-5" />
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}