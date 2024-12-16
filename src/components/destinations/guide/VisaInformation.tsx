import { DestinationGuide } from '../../../types/destinations';
import { FileCheck, Clock, DollarSign } from 'lucide-react';

interface VisaInformationProps {
  visa: DestinationGuide['visa'];
}

export default function VisaInformation({ visa }: VisaInformationProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Visa Information
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Requirements */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FileCheck className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h3>
            <ul className="space-y-3">
              {visa.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2" />
                  <span className="text-gray-600">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Clock className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Application Process</h3>
            <div className="space-y-4">
              {visa.process.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full text-white flex items-center justify-center mr-3">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">{step.step}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-primary-50 rounded-lg">
              <p className="text-gray-700">
                <span className="font-medium">Processing Time:</span> {visa.processingTime}
              </p>
            </div>
          </div>

          {/* Costs */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <DollarSign className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Associated Costs</h3>
            <div className="space-y-4">
              {visa.costs.map((cost, index) => (
                <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">{cost.item}</span>
                  <span className="font-medium text-gray-900">
                    {cost.currency} {cost.amount.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}