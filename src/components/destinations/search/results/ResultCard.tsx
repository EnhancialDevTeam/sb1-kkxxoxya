import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Institution } from '../../../../types/destinations';
import InstitutionImage from '../InstitutionImage';

interface ResultCardProps {
  institution: Institution;
  isBookmarked: boolean;
  onBookmark: (id: string) => void;
}

export default function ResultCard({
  institution,
  isBookmarked,
  onBookmark
}: ResultCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="md:flex">
        <Link
          to={`/institutions/${institution.id}`}
          className="md:w-1/3 block hover:opacity-90 transition-opacity"
        >
          <InstitutionImage
            src={institution.campusImage}
            alt={`${institution.name} campus`}
            type="campus"
            className="w-full h-48 md:h-full object-cover"
          />
        </Link>
        <div className="p-6 md:w-2/3">
          <div className="flex justify-between items-start">
            <Link
              to={`/institutions/${institution.id}`}
              className="flex items-center space-x-4 group"
            >
              <InstitutionImage
                src={institution.logo}
                alt={`${institution.name} logo`}
                type="institution"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {institution.name}
                </h3>
                <p className="text-gray-500">
                  {institution.city}, {institution.country}
                </p>
              </div>
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault();
                onBookmark(institution.id);
              }}
              className={`p-2 rounded-full ${
                isBookmarked
                  ? 'text-primary-500'
                  : 'text-gray-400 hover:text-primary-500'
              }`}
              aria-label={`${isBookmarked ? 'Remove from' : 'Add to'} bookmarks`}
            >
              <Heart className="w-6 h-6" />
            </button>
          </div>

          <p className="text-gray-600 mt-4">{institution.description}</p>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-500">World Ranking</div>
              <div className="font-medium">#{institution.ranking.world}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Programs</div>
              <div className="font-medium">
                {institution.programs.bachelors + 
                 institution.programs.masters + 
                 institution.programs.phd}+ Total
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Tuition (Annual)</div>
              <div className="font-medium">
                {institution.costs.tuition.currency} 
                {institution.costs.tuition.min.toLocaleString()} - 
                {institution.costs.tuition.max.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Languages</div>
              <div className="font-medium">
                {institution.languages.join(', ')}
              </div>
            </div>
          </div>

          <Link
            to={`/institutions/${institution.id}`}
            className="inline-block mt-4 text-primary-500 font-medium hover:text-primary-600 transition-colors"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}