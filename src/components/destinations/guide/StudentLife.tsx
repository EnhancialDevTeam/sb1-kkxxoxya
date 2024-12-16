import { DestinationGuide } from '../../../types/destinations';
import { Home, Bus, Heart, Briefcase, Globe } from 'lucide-react';

interface StudentLifeProps {
  studentLife: DestinationGuide['studentLife'];
}

export default function StudentLife({ studentLife }: StudentLifeProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Student Life</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Accommodation */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Home className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Accommodation</h3>
            <div className="space-y-4">
              {studentLife.accommodation.map((option, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h4 className="font-medium text-gray-900 mb-2">{option.type}</h4>
                  <p className="text-gray-600 mb-2">{option.description}</p>
                  <p className="text-primary-600">
                    {option.averageCost.currency} {option.averageCost.amount.toLocaleString()}/{option.averageCost.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Transportation */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Bus className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Transportation</h3>
            <div className="space-y-4">
              {studentLife.transportation.map((option, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h4 className="font-medium text-gray-900 mb-2">{option.type}</h4>
                  <p className="text-gray-600 mb-2">{option.description}</p>
                  <p className="text-primary-600">{option.cost}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Healthcare */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Heart className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Healthcare</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Insurance</h4>
                <p className="text-gray-600">{studentLife.healthcare.insurance}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Available Facilities</h4>
                <ul className="space-y-2">
                  {studentLife.healthcare.facilities.map((facility, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2" />
                      <span className="text-gray-600">{facility}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Costs</h4>
                <p className="text-gray-600">{studentLife.healthcare.costs}</p>
              </div>
            </div>
          </div>

          {/* Work Rights */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Briefcase className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Work Rights</h3>
            <div className="space-y-4">
              <p className="text-gray-600">{studentLife.workRights.duringStudy}</p>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Restrictions</h4>
                <ul className="space-y-2">
                  {studentLife.workRights.restrictions.map((restriction, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2" />
                      <span className="text-gray-600">{restriction}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Common Student Jobs</h4>
                <ul className="space-y-2">
                  {studentLife.workRights.typicalJobs.map((job, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2" />
                      <span className="text-gray-600">{job}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Culture */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md lg:col-span-2">
            <Globe className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Culture & Lifestyle</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Cultural Highlights</h4>
                <ul className="space-y-2">
                  {studentLife.culture.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2" />
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Local Customs</h4>
                <ul className="space-y-2">
                  {studentLife.culture.customs.map((custom, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2" />
                      <span className="text-gray-600">{custom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}