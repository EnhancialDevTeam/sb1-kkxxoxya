import { useState } from 'react';
import { Globe, DollarSign, Users, Briefcase, Clock, ArrowRight, Search, MapPin, ChevronDown } from 'lucide-react';

const destinations = [
  {
    country: 'United States',
    flag: 'https://images.unsplash.com/photo-1508433957232-3107f5fd5995?auto=format&fit=crop&q=80',
    continent: 'North America',
    language: 'English',
    livingCost: {
      amount: '15,000 - 25,000',
      currency: 'USD',
      period: 'per year'
    },
    dependentPolicy: {
      allowed: true,
      details: 'Spouse and children under 21 can apply for F-2 visa'
    },
    workPolicy: {
      hours: '20 hours per week during semester, 40 hours during breaks',
      wage: '7.25 - 15.00 USD per hour',
      restrictions: 'On-campus work only in first year'
    },
    postStudyWork: {
      available: true,
      duration: 'Up to 3 years (OPT)',
      conditions: 'Must be related to field of study'
    }
  },
  {
    country: 'United Kingdom',
    flag: 'https://images.unsplash.com/photo-1508433957232-3107f5fd5995?auto=format&fit=crop&q=80',
    continent: 'Europe',
    language: 'English',
    livingCost: {
      amount: '12,000 - 15,000',
      currency: 'GBP',
      period: 'per year'
    },
    dependentPolicy: {
      allowed: true,
      details: 'Dependent visa available for courses longer than 9 months'
    },
    workPolicy: {
      hours: '20 hours per week during term, Full-time during holidays',
      wage: '9.50 - 11.00 GBP per hour',
      restrictions: 'No self-employment or professional sports'
    },
    postStudyWork: {
      available: true,
      duration: '2 years (Graduate Route)',
      conditions: 'Must complete degree in the UK'
    }
  },
  {
    country: 'Canada',
    flag: 'https://images.unsplash.com/photo-1508433957232-3107f5fd5995?auto=format&fit=crop&q=80',
    continent: 'North America',
    language: 'English, French',
    livingCost: {
      amount: '15,000 - 20,000',
      currency: 'CAD',
      period: 'per year'
    },
    dependentPolicy: {
      allowed: true,
      details: 'Spouse can get open work permit, children can study'
    },
    workPolicy: {
      hours: '20 hours per week off-campus during semester, Full-time during breaks',
      wage: '15.00 - 17.00 CAD per hour',
      restrictions: 'Must have valid study permit'
    },
    postStudyWork: {
      available: true,
      duration: 'Up to 3 years (PGWP)',
      conditions: 'Based on length of study program'
    }
  }
];

export default function DestinationGuide() {
  const [selectedContinent, setSelectedContinent] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDestination, setActiveDestination] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-[80vh] pt-16 overflow-hidden">
        <div className="absolute inset-0 transform scale-105">
          <img
            src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?auto=format&fit=crop&q=80"
            alt="Global Education"
            className="w-full h-full object-cover motion-safe:animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/95 via-primary-900/80 to-primary-900/70 backdrop-blur-sm" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-primary-400/20 backdrop-blur-sm rounded-full text-primary-50 mb-6">
              Your Global Education Journey
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Discover Your Perfect Study Destination
            </h1>
            <p className="text-xl text-primary-100 mb-12 leading-relaxed">
              Explore comprehensive information about popular study destinations, living costs, and work opportunities
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-12">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
              />
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {['all', 'North America', 'Europe', 'Asia', 'Oceania'].map((continent) => (
                <button
                  key={continent}
                  onClick={() => setSelectedContinent(continent)}
                  className={`px-6 py-2 rounded-full backdrop-blur-md transition-all ${
                    selectedContinent === continent
                      ? 'bg-white text-primary-600'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {continent === 'all' ? 'All Regions' : continent}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl ${
                  activeDestination === index ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column - Overview */}
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-8">
                      <img
                        src={destination.flag}
                        alt={`${destination.country} flag`}
                        className="w-16 h-16 rounded-lg object-cover shadow-md"
                      />
                      <div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-primary-500" />
                          <span className="text-sm text-gray-500">{destination.continent}</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">{destination.country}</h2>
                      </div>
                    </div>

                    {/* Info Cards */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <DollarSign className="w-6 h-6 text-primary-500 mb-2" />
                        <p className="text-sm text-gray-500">Living Cost</p>
                        <p className="font-semibold text-gray-900">
                          {destination.livingCost.currency} {destination.livingCost.amount}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <Globe className="w-6 h-6 text-primary-500 mb-2" />
                        <p className="text-sm text-gray-500">Language</p>
                        <p className="font-semibold text-gray-900">{destination.language}</p>
                      </div>
                    </div>

                    {/* Expandable Content */}
                    <button
                      onClick={() => setActiveDestination(activeDestination === index ? null : index)}
                      className="w-full text-left"
                    >
                      <div className="flex items-center justify-between text-primary-500 hover:text-primary-600">
                        <span className="font-medium">View Details</span>
                        <ChevronDown className={`w-5 h-5 transform transition-transform ${
                          activeDestination === index ? 'rotate-180' : ''
                        }`} />
                      </div>
                    </button>
                  </div>

                  {/* Right Column - Details */}
                  <div className={`bg-gray-50 p-8 transition-all duration-500 ${
                    activeDestination === index ? 'opacity-100' : 'opacity-70'
                  }`}>
                    {/* Work Policy */}
                    <div className="mb-8">
                      <div className="flex items-center space-x-2 mb-4">
                        <Briefcase className="w-6 h-6 text-primary-500" />
                        <h3 className="text-xl font-semibold text-gray-900">Work Rights</h3>
                      </div>
                      <div className="space-y-3 text-gray-600">
                        <p><span className="font-medium">Hours:</span> {destination.workPolicy.hours}</p>
                        <p><span className="font-medium">Wage:</span> {destination.workPolicy.wage}</p>
                        <p><span className="font-medium">Restrictions:</span> {destination.workPolicy.restrictions}</p>
                      </div>
                    </div>

                    {/* Post-Study Work */}
                    <div className="mb-8">
                      <div className="flex items-center space-x-2 mb-4">
                        <Clock className="w-6 h-6 text-primary-500" />
                        <h3 className="text-xl font-semibold text-gray-900">Post-Study Work</h3>
                      </div>
                      <div className="space-y-3 text-gray-600">
                        <p><span className="font-medium">Duration:</span> {destination.postStudyWork.duration}</p>
                        <p><span className="font-medium">Conditions:</span> {destination.postStudyWork.conditions}</p>
                      </div>
                    </div>

                    {/* Dependent Policy */}
                    <div>
                      <div className="flex items-center space-x-2 mb-4">
                        <Users className="w-6 h-6 text-primary-500" />
                        <h3 className="text-xl font-semibold text-gray-900">Dependent Policy</h3>
                      </div>
                      <p className="text-gray-600">{destination.dependentPolicy.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-500 to-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
            Take the first step towards your international education dream with expert guidance
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all transform hover:-translate-y-1 hover:shadow-lg inline-flex items-center">
              Book a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all transform hover:-translate-y-1">
              Download Destination Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}