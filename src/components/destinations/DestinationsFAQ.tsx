const faqs = [
  {
    question: 'What are the general requirements to study abroad?',
    answer: 'Requirements typically include academic transcripts, language proficiency tests (IELTS/TOEFL), letters of recommendation, and proof of funds. Specific requirements vary by country and institution.'
  },
  {
    question: 'How much does it cost to study abroad?',
    answer: 'Costs vary by country and program. Generally, you should budget for tuition fees, living expenses, health insurance, and travel costs. Many countries offer scholarships and financial aid options.'
  },
  {
    question: 'Can I work while studying abroad?',
    answer: 'Most countries allow international students to work part-time during their studies. Work hours and conditions vary by country, typically ranging from 20-40 hours per week.'
  },
  {
    question: 'How long does the visa process take?',
    answer: 'Visa processing times vary by country, typically ranging from 2-12 weeks. We recommend starting the application process at least 3-6 months before your intended start date.'
  }
];

export default function DestinationsFAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Common questions about studying abroad
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