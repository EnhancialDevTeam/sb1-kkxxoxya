import { DestinationGuide } from '../../../types/destinations';
import { Briefcase, TrendingUp, Globe } from 'lucide-react';

interface PostStudyOpportunitiesProps {
  postStudy: DestinationGuide['postStudy'];
}

export default function PostStudyOpportunities({ postStudy }: PostStudyOpportunitiesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Post-Study Opportunities
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Work Permit */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Briefcase className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Work Permit</h3>
            <div className="space-y-4">
              <p className="text-gray-600">Duration: {postStudy.workPermit.duration}</p>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
                <ul className="space-y-2">
                  {postStudy.workPermit.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2" />
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-gray-600">{postStudy.workPermit.process}</p>
            </div>
          </div>

          {/* Career Prospects */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <TrendingUp className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Career Prospects</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Key Industries</h4>
                <ul className="space-y-2">
                  {postStudy.careerProspects.industries.map((industry, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2" />
                      <span className="text-gray-600">{industry}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Average Salaries</h4>
                <div className="space-y-2">
                  {postStudy.careerProspects.averageSalaries.map((salary, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600">{salary.role}</span>
                      <span className="font-medium text-gray-900">
                        {salary.range.currency} {salary.range.min.toLocaleString()} - {salary.range.max.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Immigration Pathways */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Globe className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Immigration Pathways</h3>
            <div className="space-y-6">
              {postStudy.immigration.pathways.map((pathway, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                  <h4 className="font-medium text-gray-900 mb-2">{pathway.name}</h4>
                  <ul className="space-y-2 mb-2">
                    {pathway.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2" />
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-primary-600">Timeframe: {pathway.timeframe}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}