import { DestinationGuide } from '../../../types/destinations';
import { FileText, Languages, Calendar } from 'lucide-react';

interface AdmissionRequirementsProps {
  requirements: DestinationGuide['admissionRequirements'];
}

export default function AdmissionRequirements({ requirements }: AdmissionRequirementsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Admission Requirements
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <FileText className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Academic Requirements
            </h3>
            <ul className="space-y-3">
              {requirements.academic.map((req, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3" />
                  <span className="text-gray-600">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <Languages className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Language Requirements
            </h3>
            <div className="space-y-4">
              {requirements.languageRequirements.map((req, index) => (
                <div key={index} className="border-b border-gray-200 pb-3">
                  <div className="font-medium text-gray-900">{req.test}</div>
                  <div className="text-gray-600">
                    Minimum Score: {req.minimumScore}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <Calendar className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Application Deadlines
            </h3>
            <div className="space-y-4">
              {requirements.deadlines.map((deadline, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-600">{deadline.season}</span>
                  <span className="font-medium text-gray-900">{deadline.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-primary-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Required Documents
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {requirements.documents.map((doc, index) => (
              <div key={index} className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3" />
                <span className="text-gray-600">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}