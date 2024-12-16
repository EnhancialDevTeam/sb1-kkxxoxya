const testimonials = [
  {
    quote: "Prodigy Finance made my dream of studying at London Business School possible. The application process was smooth, and I didn't need any collateral.",
    author: "Sarah Chen",
    program: "MBA, London Business School",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    quote: "As an international student, getting a loan was challenging until I found Prodigy Finance. Their support team was incredibly helpful throughout the process.",
    author: "Michael Patel",
    program: "MSc Computer Science, Stanford University",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    quote: "The competitive interest rates and flexible repayment terms made Prodigy Finance the perfect choice for funding my studies abroad.",
    author: "Emma Thompson",
    program: "Master in Finance, HEC Paris",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"
  }
];

export default function LoanTestimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Hear from students who achieved their dreams with Prodigy Finance
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
  );
}