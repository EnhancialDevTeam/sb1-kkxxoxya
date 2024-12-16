import { Institution } from '../../../types/destinations';

interface ProgramsOfferedProps {
  institution: Institution;
}

export default function ProgramsOffered({ institution }: ProgramsOfferedProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Programs Offered</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Bachelor's Programs</h3>
            <div className="space-y-4">
              <div>
                <div className="font-medium text-gray-900 mb-2">Duration</div>
                <p className="text-gray-600">3-4 years</p>
              </div>
              <div>
                <div className="font-medium text-gray-900 mb-2">Popular Programs</div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                    <span className="text-gray-600">Computer Science</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                    <span className="text-gray-600">Business Administration</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                    <span className="text-gray-600">Engineering</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Master's Programs</h3>
            <div className="space-y-4">
              <div>
                <div className="font-medium text-gray-900 mb-2">Duration</div>
                <p className="text-gray-600">1-2 years</p>
              </div>
              <div>
                <div className="font-medium text-gray-900 mb-2">Popular Programs</div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                    <span className="text-gray-600">Data Science</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                    <span className="text-gray-600">MBA</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                    <span className="text-gray-600">International Relations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">PhD Programs</h3>
            <div className="space-y-4">
              <div>
                <div className="font-medium text-gray-900 mb-2">Duration</div>
                <p className="text-gray-600">3-5 years</p>
              </div>
              <div>
                <div className="font-medium text-gray-900 mb-2">Research Areas</div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                    <span className="text-gray-600">Artificial Intelligence</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                    <span className="text-gray-600">Biotechnology</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                    <span className="text-gray-600">Sustainable Energy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}