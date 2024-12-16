const faqs = [
  {
    question: 'How do I track my referrals?',
    answer: 'You can track all your referrals through your personalized dashboard after logging in. The dashboard shows the status of each referral and pending rewards.'
  },
  {
    question: 'When will I receive my reward?',
    answer: 'Rewards are processed within 30 days after your referred friend completes their enrollment and pays the required fees.'
  },
  {
    question: 'Is there a limit to how many people I can refer?',
    answer: 'You can refer up to 10 students per academic year. Each successful referral earns you a £100 gift voucher.'
  },
  {
    question: 'How do I contact support about my referral?',
    answer: 'You can contact our dedicated referral support team at referrals@jestoneedu.com or call us at +234 908 015 9222.'
  }
];

export default function ReferFAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Common questions about our referral programme
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