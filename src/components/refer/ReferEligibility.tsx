import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const terms = [
  {
    title: 'Who can participate?',
    content: [
      'Be a registered user with Jestone Education',
      'Obtain a unique referral code upon registration',
      'Must be 18 years or older',
      'No previous violations of referral program terms'
    ]
  },
  {
    title: 'What constitutes a valid referral?',
    content: [
      'Referred student must create account using your code',
      'Must enroll in a qualifying institution',
      'Minimum one-year course duration',
      'Cannot refer immediate family members'
    ]
  },
  {
    title: 'Payment terms',
    content: [
      'Rewards processed within 30 days of successful enrollment',
      'Maximum of 10 successful referrals per academic year',
      'Rewards subject to local tax regulations',
      'Payment via gift voucher or bank transfer'
    ]
  },
  {
    title: 'Program restrictions',
    content: [
      'Not valid for short-term courses',
      'One referral reward per student',
      'Program may be modified or terminated at any time',
      'Terms and conditions apply'
    ]
  }
];

export default function ReferEligibility() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Eligibility & Terms
          </h2>
          <p className="text-xl text-gray-600">
            Important information about our referral programme
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {terms.map((term, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenSection(openSection === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {term.title}
                  </h3>
                  {openSection === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {openSection === index && (
                  <div className="px-6 pb-4">
                    <ul className="space-y-2">
                      {term.content.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}