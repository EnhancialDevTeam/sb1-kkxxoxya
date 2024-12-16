const faqs = [
  {
    question: 'How do I choose the right program?',
    answer: 'Our expert counselors will help you evaluate your academic background, career goals, and interests to recommend the most suitable programs. We consider factors like university ranking, location, and career prospects.'
  },
  {
    question: 'What support do you provide during the application process?',
    answer: 'We offer comprehensive support including program selection, document preparation, application submission, visa guidance, and pre-departure orientation. Our team assists with every step of your journey.'
  },
  {
    question: 'Are scholarships available for international students?',
    answer: 'Yes, many universities offer scholarships for international students. Our team will help you identify and apply for relevant scholarship opportunities based on your academic profile and chosen program.'
  },
  {
    question: 'How long does the application process take?',
    answer: 'The application process typically takes 2-3 months, including document preparation and university response time. We recommend starting the process at least 6 months before your intended start date.'
  }
];

export default function ProgramsFAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Common questions about our programs and application process
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}