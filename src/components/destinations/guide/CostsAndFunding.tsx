import { DestinationGuide } from '../../../types/destinations';
import { DollarSign, Home, GraduationCap } from 'lucide-react';

interface CostsAndFundingProps {
  costs: DestinationGuide['costs'];
}

export default function CostsAndFunding({ costs }: CostsAndFundingProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Costs and Funding
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <GraduationCap className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Tuition Fees</h3>
            <div className="space-y-4">
              {costs.tuition.map((level, index) => (
                <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">{level.level}</span>
                  <span className="font-medium text-gray-900">
                    {level.range.currency} {level.range.min.toLocaleString()} - {level.range.max.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Home className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Living Costs</h3>
            <div className="space-y-4">
              {costs.living.map((expense, index) => (
                <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">{expense.type}</span>
                  <span className="font-medium text-gray-900">
                    {expense.cost.currency} {expense.cost.min.toLocaleString()} - {expense.cost.max.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <DollarSign className="w-8 h-8 text-primary-500 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">Available Scholarships</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {costs.scholarships.map((scholarship, index) => (
              <div key={index} className="border-l-4 border-primary-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">{scholarship.name}</h4>
                <p className="text-gray-500 text-sm mb-2">Provider: {scholarship.provider}</p>
                <p className="text-primary-600 font-medium mb-3">Amount: {scholarship.amount}</p>
                <div className="space-y-2 mb-3">
                  {scholarship.eligibility.map((criteria, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2" />
                      <span className="text-gray-600 text-sm">{criteria}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={scholarship.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 hover:text-primary-600 text-sm font-medium"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}