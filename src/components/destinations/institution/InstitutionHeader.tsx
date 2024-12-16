import { Institution } from '../../../types/destinations';
import InstitutionImage from '../search/InstitutionImage';

interface InstitutionHeaderProps {
  institution: Institution;
}

export default function InstitutionHeader({ institution }: InstitutionHeaderProps) {
  return (
    <header className="relative h-[60vh] pt-16">
      <div className="absolute inset-0">
        <InstitutionImage
          src={institution.campusImage}
          alt={`${institution.name} campus`}
          type="campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-16">
        <div className="flex items-center space-x-6">
          <InstitutionImage
            src={institution.logo}
            alt={institution.name}
            type="institution"
            className="w-24 h-24 rounded-lg bg-white p-2"
          />
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-2">{institution.name}</h1>
            <p className="text-xl opacity-90">
              {institution.city}, {institution.country}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}