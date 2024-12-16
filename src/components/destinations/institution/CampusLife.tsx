import { Institution } from '../../../types/destinations';
import { Home, Bus, Heart, Users } from 'lucide-react';

interface CampusLifeProps {
  institution: Institution;
}

export default function CampusLife({ institution }: CampusLifeProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Campus Life</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Home className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Accommodation</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">On-Campus</h4>
                <p className="text-gray-600">
                  Student dormitories and shared apartments available
                </p>
                <p className="text-primary-600 mt-1">
                  {institution.costs.living.currency} {institution.costs.living.min.toLocaleString()}/year
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Off-Campus</h4>
                <p className="text-gray-600">
                  Private rentals and shared housing options
                </p>
                <p className="text-primary-600 mt-1">
                  {institution.costs.living.currency} {institution.costs.living.max.toLocaleString()}/year
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Bus className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Transportation</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2" />
                <span className="text-gray-600">Campus shuttle service</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2" />
                <span className="text-gray-600">Public transit access</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2" />
                <span className="text-gray-600">Bike-sharing program</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Heart className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Healthcare</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2" />
                <span className="text-gray-600">On-campus medical center</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2" />
                <span className="text-gray-600">Mental health services</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2" />
                <span className="text-gray-600">Health insurance support</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Student Life</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2" />
                <span className="text-gray-600">Student clubs & societies</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2" />
                <span className="text-gray-600">Sports facilities</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2" />
                <span className="text-gray-600">Cultural events</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}