const faqs = [
  {
    question: 'How do I know if I\'m eligible?',
    answer: 'You\'re eligible if you\'re admitted to a supported school and program, are from a supported country, and plan to study abroad (UK residents excepted).'
  },
  {
    question: 'How do I start my application?',
    answer: 'Visit the Prodigy Finance website through our referral link to receive an instant provisional offer. The entire process can be completed online with a conditional offer provided within 5 business days.'
  },
  {
    question: 'How much can I borrow?',
    answer: 'Depending on your program, you may request up to the full cost of tuition. For US and some other programs, you may also request funding for living expenses.'
  },
  {
    question: 'What is the interest rate?',
    answer: 'Our variable rates comprise an individual fixed margin rate plus a quarterly averaged US SOFR base rate. Rates are competitive and based on your profile and program.'
  },
  {
    question: 'Can my loan be used as proof of funds?',
    answer: 'Yes! Our loan confirmation letter is valid proof of funds during your visa application. We do not charge any fees for your loan confirmation/sanction letter.'
  }
];

export default function LoanFAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Common questions about Prodigy Finance loans
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