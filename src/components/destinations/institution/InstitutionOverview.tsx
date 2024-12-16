import { Institution } from '../../../types/destinations';
import { Trophy, GraduationCap, Globe } from 'lucide-react';

interface InstitutionOverviewProps {
  institution: Institution;
}

export default function InstitutionOverview({ institution }: InstitutionOverviewProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Trophy className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Rankings</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">World Rank</span>
                <span className="font-medium">#{institution.ranking.world}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">National Rank</span>
                <span className="font-medium">#{institution.ranking.country}</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <GraduationCap className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Programs</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Bachelor's</span>
                <span className="font-medium">{institution.programs.bachelors}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Master's</span>
                <span className="font-medium">{institution.programs.masters}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">PhD</span>
                <span className="font-medium">{institution.programs.phd}</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Globe className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Languages</h3>
            <div className="space-y-2">
              {institution.languages.map((language, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                  <span className="text-gray-600">{language}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About {institution.name}</h2>
          <p className="text-gray-600 mb-6">{institution.description}</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Accreditation</h3>
              <ul className="space-y-2">
                {institution.accreditation.map((acc, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                    <span className="text-gray-600">{acc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                  <span className="text-gray-600">World-class research facilities</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                  <span className="text-gray-600">International student support</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                  <span className="text-gray-600">Career development services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}