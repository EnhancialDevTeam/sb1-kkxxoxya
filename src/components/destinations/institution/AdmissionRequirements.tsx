import { Institution } from '../../../types/destinations';
import { Calendar, FileText, Languages } from 'lucide-react';

interface AdmissionRequirementsProps {
  institution: Institution;
}

export default function AdmissionRequirements({ institution }: AdmissionRequirementsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Admission Requirements
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Calendar className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Application Deadlines</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Fall Intake</span>
                <span className="font-medium">{institution.applicationDeadlines.fall}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Spring Intake</span>
                <span className="font-medium">{institution.applicationDeadlines.spring}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Languages className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Language Requirements</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">IELTS</h4>
                <p className="text-gray-600">Minimum score: 6.5</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">TOEFL</h4>
                <p className="text-gray-600">Minimum score: 90</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <FileText className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Required Documents</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                <span className="text-gray-600">Academic transcripts</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                <span className="text-gray-600">Statement of purpose</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                <span className="text-gray-600">Letters of recommendation</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                <span className="text-gray-600">CV/Resume</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}