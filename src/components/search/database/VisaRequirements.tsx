import { Globe, FileText, Clock, DollarSign } from 'lucide-react';

const visaRequirements = [
  {
    country: 'United States',
    requirements: [
      'Valid passport',
      'Form I-20 from university',
      'DS-160 form',
      'SEVIS fee payment',
      'Financial documents'
    ],
    processingTime: '2-3 months',
    fees: 'USD 160'
  },
  {
    country: 'United Kingdom',
    requirements: [
      'Valid passport',
      'CAS number',
      'TB test results',
      'Financial proof',
      'English proficiency'
    ],
    processingTime: '3-4 weeks',
    fees: 'GBP 348'
  }
];

export default function VisaRequirements() {
  return (
    <div className="space-y-6">
      <p className="text-gray-600">
        Essential visa information for popular study destinations. Processing times and fees are approximate and subject to change.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {visaRequirements.map((visa, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-gray-900">{visa.country}</h3>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <FileText className="w-5 h-5 text-primary-500" />
                  <h4 className="font-medium text-gray-900">Requirements</h4>
                </div>
                <ul className="space-y-1">
                  {visa.requirements.map((req, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary-500" />
                  <span className="text-gray-600">{visa.processingTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-primary-500" />
                  <span className="text-gray-600">{visa.fees}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}