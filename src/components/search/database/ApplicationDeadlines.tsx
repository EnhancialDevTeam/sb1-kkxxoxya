import { Calendar, AlertCircle } from 'lucide-react';

const deadlines = [
  {
    country: 'United States',
    intakes: [
      {
        name: 'Fall 2024',
        period: 'August/September',
        deadlines: {
          early: 'November 1-15, 2023',
          regular: 'January 1-15, 2024',
          rolling: 'Check university websites'
        }
      },
      {
        name: 'Spring 2025',
        period: 'January',
        deadlines: {
          regular: 'October 1-15, 2024',
          rolling: 'Check university websites'
        }
      }
    ]
  },
  {
    country: 'United Kingdom',
    intakes: [
      {
        name: 'September 2024',
        period: 'September/October',
        deadlines: {
          undergraduate: 'January 15, 2024 (UCAS)',
          postgraduate: 'Varies by university'
        }
      },
      {
        name: 'January 2025',
        period: 'January/February',
        deadlines: {
          undergraduate: 'October 15, 2024',
          postgraduate: 'Check university websites'
        }
      }
    ]
  }
];

export default function ApplicationDeadlines() {
  return (
    <div className="space-y-6">
      <div className="flex items-start space-x-2">
        <AlertCircle className="w-5 h-5 text-primary-500 mt-1" />
        <p className="text-gray-600">
          Application deadlines vary by institution and program. Always verify exact dates on university websites.
        </p>
      </div>

      <div className="space-y-8">
        {deadlines.map((country, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="w-6 h-6 text-primary-500" />
              <h3 className="text-lg font-semibold text-gray-900">{country.country}</h3>
            </div>

            <div className="space-y-6">
              {country.intakes.map((intake, idx) => (
                <div key={idx} className="border-l-2 border-primary-200 pl-4">
                  <h4 className="font-medium text-gray-900 mb-2">{intake.name}</h4>
                  <p className="text-sm text-gray-500 mb-3">Main intake period: {intake.period}</p>
                  
                  <div className="space-y-2">
                    {Object.entries(intake.deadlines).map(([type, date], i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-gray-600 capitalize">{type} Decision</span>
                        <span className="text-gray-900 font-medium">{date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}