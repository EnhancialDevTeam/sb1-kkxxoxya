import { X } from 'lucide-react';
import { Institution } from '../../../types/destinations';

interface CompareModalProps {
  institutions: Institution[];
  onClose: () => void;
}

export default function CompareModal({ institutions, onClose }: CompareModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-auto m-4">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Compare Institutions</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {institutions.map((institution) => (
              <div key={institution.id}>
                <img
                  src={institution.logo}
                  alt={`${institution.name} logo`}
                  className="w-32 h-32 object-contain mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-center mb-6">
                  {institution.name}
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="font-medium mb-1">Location</div>
                    <div className="text-gray-600">
                      {institution.city}, {institution.country}
                    </div>
                  </div>

                  <div>
                    <div className="font-medium mb-1">Rankings</div>
                    <div className="text-gray-600">
                      World: #{institution.ranking.world}
                      <br />
                      National: #{institution.ranking.country}
                    </div>
                  </div>

                  <div>
                    <div className="font-medium mb-1">Programs Offered</div>
                    <div className="text-gray-600">
                      Bachelor's: {institution.programs.bachelors}
                      <br />
                      Master's: {institution.programs.masters}
                      <br />
                      PhD: {institution.programs.phd}
                    </div>
                  </div>

                  <div>
                    <div className="font-medium mb-1">Annual Costs</div>
                    <div className="text-gray-600">
                      Tuition: {institution.costs.tuition.currency}
                      {institution.costs.tuition.min.toLocaleString()} - 
                      {institution.costs.tuition.max.toLocaleString()}
                      <br />
                      Living: {institution.costs.living.currency}
                      {institution.costs.living.min.toLocaleString()} - 
                      {institution.costs.living.max.toLocaleString()}
                    </div>
                  </div>

                  <div>
                    <div className="font-medium mb-1">Application Deadlines</div>
                    <div className="text-gray-600">
                      Fall: {institution.applicationDeadlines.fall}
                      <br />
                      Spring: {institution.applicationDeadlines.spring}
                    </div>
                  </div>

                  <div>
                    <div className="font-medium mb-1">Languages</div>
                    <div className="text-gray-600">
                      {institution.languages.join(', ')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}