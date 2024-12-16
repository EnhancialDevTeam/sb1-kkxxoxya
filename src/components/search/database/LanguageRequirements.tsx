import { Languages, CheckCircle, HelpCircle } from 'lucide-react';

const languageTests = [
  {
    name: 'IELTS Academic',
    description: 'International English Language Testing System',
    sections: [
      'Listening (40 minutes)',
      'Reading (60 minutes)',
      'Writing (60 minutes)',
      'Speaking (11-14 minutes)'
    ],
    scoring: 'Band scores from 1-9',
    validity: '2 years',
    acceptedBy: 'Most universities worldwide',
    tips: [
      'Practice with official materials',
      'Take mock tests',
      'Focus on time management',
      'Understand the scoring criteria'
    ]
  },
  {
    name: 'TOEFL iBT',
    description: 'Test of English as a Foreign Language',
    sections: [
      'Reading (54-72 minutes)',
      'Listening (41-57 minutes)',
      'Speaking (17 minutes)',
      'Writing (50 minutes)'
    ],
    scoring: 'Total score 0-120',
    validity: '2 years',
    acceptedBy: 'Primarily US, Canadian universities',
    tips: [
      'Familiarize with computer-based format',
      'Practice note-taking',
      'Build typing speed',
      'Use official ETS resources'
    ]
  }
];

export default function LanguageRequirements() {
  return (
    <div className="space-y-6">
      <p className="text-gray-600">
        Information about major English language proficiency tests accepted by universities worldwide.
      </p>

      <div className="space-y-8">
        {languageTests.map((test, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Languages className="w-6 h-6 text-primary-500" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{test.name}</h3>
                <p className="text-sm text-gray-600">{test.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Test Format</h4>
                <ul className="space-y-2">
                  {test.sections.map((section, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2" />
                      {section}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary-500" />
                    <span className="text-gray-600">Scoring: {test.scoring}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary-500" />
                    <span className="text-gray-600">Validity: {test.validity}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Preparation Tips</h4>
                <ul className="space-y-2">
                  {test.tips.map((tip, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <HelpCircle className="w-4 h-4 text-primary-500 mt-1 mr-2" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}