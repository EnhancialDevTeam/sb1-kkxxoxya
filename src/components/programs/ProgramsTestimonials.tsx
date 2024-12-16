import TestimonialsCarousel from '../testimonials/TestimonialsCarousel';

export default function ProgramsTestimonials() {
  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Hear from our alumni about their experiences with our programs
          </p>
        </div>

        <TestimonialsCarousel />
      </div>
    </section>
  );
}