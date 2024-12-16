import { ArrowRight } from 'lucide-react';
import TestimonialsCarousel from './TestimonialsCarousel';

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Hear from Our Students</h2>
          <p className="text-xl text-gray-600">Success stories from our global alumni network</p>
        </div>

        <TestimonialsCarousel />

        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 transition-colors">
            Read More Stories
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}