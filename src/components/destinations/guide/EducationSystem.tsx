import { DestinationGuide } from '../../../types/destinations';
import { Calendar, GraduationCap, Globe, Award } from 'lucide-react';

interface EducationSystemProps {
  system: DestinationGuide['educationSystem'];
}

export default function EducationSystem({ system }: EducationSystemProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Education System</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Calendar className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Calendar</h3>
            <div className="space-y-2">
              <p className="text-gray-600">Start: {system.academicCalendar.start}</p>
              <p className="text-gray-600">End: {system.academicCalendar.end}</p>
              <div className="mt-4">
                <h4 className="font-medium text-gray-900 mb-2">Breaks:</h4>
                <ul className="space-y-1">
                  {system.academicCalendar.breaks.map((break_, index) => (
                    <li key={index} className="text-gray-600">
                      {break_.name}: {break_.period}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <GraduationCap className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Degrees Offered</h3>
            <div className="space-y-4">
              {system.degrees.map((degree, index) => (
                <div key={index}>
                  <h4 className="font-medium text-gray-900">{degree.type}</h4>
                  <p className="text-sm text-gray-500">Duration: {degree.duration}</p>
                  <p className="text-gray-600">{degree.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Globe className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Languages of Instruction</h3>
            <ul className="space-y-2">
              {system.languages.map((language, index) => (
                <li key={index} className="text-gray-600">{language}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Award className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Accreditation</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Accrediting Bodies:</h4>
                <ul className="space-y-1">
                  {system.accreditation.bodies.map((body, index) => (
                    <li key={index} className="text-gray-600">{body}</li>
                  ))}
                </ul>
              </div>
              <p className="text-gray-600">{system.accreditation.process}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}