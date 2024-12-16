const faqs = [
  {
    question: 'How can I schedule a consultation?',
    answer: 'You can schedule a consultation by filling out our contact form, calling our office directly, or using our online booking system. Our counselors will get back to you within 24 hours.'
  },
  {
    question: 'What should I prepare for the consultation?',
    answer: 'Please have your academic transcripts, test scores (if any), and a brief outline of your academic goals ready. This helps us provide more targeted guidance during the consultation.'
  },
  {
    question: 'Are your consultations free?',
    answer: 'Yes, we offer free initial consultations to help you understand our services and how we can assist with your educational journey.'
  },
  {
    question: 'How long does the application process take?',
    answer: 'The application process typically takes 2-3 months, including document preparation and university response time. We recommend starting at least 6 months before your intended start date.'
  }
];

export default function ContactFAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Common questions about our consultation process
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