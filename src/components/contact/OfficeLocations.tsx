import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const offices = [
  {
    city: 'Accra',
    address: '123 Independence Avenue, Accra, Ghana',
    phone: '+233 123 456 789',
    email: 'accra@jestone.edu',
    hours: 'Mon-Fri: 8 AM - 5 PM'
  },
  {
    city: 'Lagos',
    address: '456 Victoria Island, Lagos, Nigeria',
    phone: '+234 123 456 789',
    email: 'lagos@jestone.edu',
    hours: 'Mon-Fri: 8 AM - 5 PM'
  }
];

export default function OfficeLocations() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h2>
      
      <div className="space-y-8">
        {offices.map((office, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold text-primary-500 mb-4">
              {office.city} Office
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-1" />
                <span className="text-gray-600">{office.address}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-500" />
                <a
                  href={`tel:${office.phone}`}
                  className="text-gray-600 hover:text-primary-500"
                >
                  {office.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-500" />
                <a
                  href={`mailto:${office.email}`}
                  className="text-gray-600 hover:text-primary-500"
                >
                  {office.email}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-500" />
                <span className="text-gray-600">{office.hours}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-primary-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Connect With Us
        </h3>
        <p className="text-gray-600">
          Follow us on social media for the latest updates and educational insights.
        </p>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-primary-500 hover:text-primary-600">
            Facebook
          </a>
          <a href="#" className="text-primary-500 hover:text-primary-600">
            Instagram
          </a>
          <a href="#" className="text-primary-500 hover:text-primary-600">
            LinkedIn
          </a>
          <a href="#" className="text-primary-500 hover:text-primary-600">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}