import { School, GraduationCap, Globe, FileCheck } from 'lucide-react';

const eligibilityCriteria = [
  {
    icon: School,
    title: 'Supported Schools',
    description: 'You want to study at a school & programme we support',
    details: [
      'Top-ranked universities worldwide',
      'MBA, Engineering, and other postgraduate programs',
      'View the full list of supported schools on Prodigy Finance'
    ]
  },
  {
    icon: Globe,
    title: 'Eligible Countries',
    description: 'You\'re from a country or state we support',
    details: [
      'Available to students from 150+ countries',
      'Some restrictions may apply based on local regulations',
      'Check country eligibility on the application'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Study Location',
    description: 'You plan to study abroad (UK residents excepted)',
    details: [
      'International study programs',
      'Cross-border education',
      'Specific country requirements may apply'
    ]
  },
  {
    icon: FileCheck,
    title: 'Required Documents',
    description: 'Essential documentation for your application',
    details: [
      'Proof of ID & proof of address',
      'Proof of admission',
      'Credit Report',
      'Proof of income & savings (if applicable)'
    ]
  }
];

export default function LoanEligibility() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Loan Eligibility
          </h2>
          <p className="text-xl text-gray-600">
            Check if you meet the requirements for a Prodigy Finance loan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {eligibilityCriteria.map((criteria, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <criteria.icon className="w-10 h-10 text-primary-500 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {criteria.title}
                  </h3>
                  <p className="text-gray-600">{criteria.description}</p>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {criteria.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2" />
                    <span className="text-gray-600">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}