import { GraduationCap, FileText, Languages } from 'lucide-react';

const admissionRequirements = [
  {
    level: "Bachelor's Degree",
    academic: [
      'High school diploma or equivalent',
      'Minimum GPA requirements',
      'SAT/ACT scores (for US universities)',
      'Letters of recommendation'
    ],
    documents: [
      'Academic transcripts',
      'Statement of purpose',
      'CV/Resume',
      'Portfolio (for specific programs)'
    ],
    language: {
      IELTS: '6.0-7.0',
      TOEFL: '80-100',
      notes: 'Some universities may accept other English proficiency tests'
    }
  },
  {
    level: "Master's Degree",
    academic: [
      'Bachelor\'s degree',
      'Minimum GPA in undergraduate studies',
      'GRE/GMAT scores (program specific)',
      'Research proposal (for research programs)'
    ],
    documents: [
      'Academic transcripts',
      'Statement of purpose',
      'Letters of recommendation',
      'Work experience (if required)'
    ],
    language: {
      IELTS: '6.5-7.5',
      TOEFL: '90-110',
      notes: 'Requirements may vary by program and university'
    }
  }
];

export default function AdmissionRequirements() {
  return (
    <div className="space-y-6">
      <p className="text-gray-600">
        General admission requirements for different study levels. Requirements may vary by institution and program.
      </p>

      <div className="space-y-8">
        {admissionRequirements.map((req, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-gray-900">{req.level}</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <FileText className="w-5 h-5 text-primary-500" />
                  <h4 className="font-medium text-gray-900">Academic Requirements</h4>
                </div>
                <ul className="space-y-2">
                  {req.academic.map((item, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <FileText className="w-5 h-5 text-primary-500" />
                  <h4 className="font-medium text-gray-900">Required Documents</h4>
                </div>
                <ul className="space-y-2">
                  {req.documents.map((doc, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Languages className="w-5 h-5 text-primary-500" />
                  <h4 className="font-medium text-gray-900">Language Requirements</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600">IELTS: {req.language.IELTS}</p>
                  <p className="text-gray-600">TOEFL: {req.language.TOEFL}</p>
                  <p className="text-sm text-gray-500 mt-2">{req.language.notes}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}