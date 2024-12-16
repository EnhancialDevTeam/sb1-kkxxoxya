import { Award, Calendar, DollarSign } from 'lucide-react';

const scholarships = [
  {
    name: 'Chevening Scholarships',
    type: 'Government-funded',
    coverage: 'Full tuition, living expenses, flights, and visa fees',
    eligibility: [
      'Bachelor\'s degree',
      'Work experience',
      'Return to home country after studies',
      'Strong leadership potential'
    ],
    deadline: 'November 2024',
    value: 'Up to £35,000'
  },
  {
    name: 'Fulbright Foreign Student Program',
    type: 'Government-funded',
    coverage: 'Full tuition, living stipend, health insurance',
    eligibility: [
      'Bachelor\'s degree',
      'Strong academic record',
      'English proficiency',
      'Leadership qualities'
    ],
    deadline: 'February 2025',
    value: 'Varies by program'
  }
];

export default function ScholarshipOpportunities() {
  return (
    <div className="space-y-6">
      <p className="text-gray-600">
        Browse available scholarships and funding opportunities for international students.
      </p>

      <div className="space-y-6">
        {scholarships.map((scholarship, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-primary-500" />
                <h3 className="text-lg font-semibold text-gray-900">{scholarship.name}</h3>
              </div>
              <span className="text-sm font-medium text-primary-500 bg-primary-50 px-3 py-1 rounded-full">
                {scholarship.type}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Coverage</h4>
                <p className="text-gray-600">{scholarship.coverage}</p>

                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 mb-2">Eligibility</h4>
                  <ul className="space-y-2">
                    {scholarship.eligibility.map((req, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-5 h-5 text-primary-500" />
                    <h4 className="font-medium text-gray-900">Application Deadline</h4>
                  </div>
                  <p className="text-gray-600">{scholarship.deadline}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign className="w-5 h-5 text-primary-500" />
                    <h4 className="font-medium text-gray-900">Scholarship Value</h4>
                  </div>
                  <p className="text-gray-600">{scholarship.value}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}