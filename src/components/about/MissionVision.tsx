import { Target, Eye, Heart, Lock, Award } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We operate with honesty and transparency in all we do.'
  },
  {
    icon: Lock,
    title: 'Confidentiality',
    description: 'We respect and protect client information.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive to exceed expectations in every service.'
  }
];

export default function MissionVision() {
  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
          <p className="text-xl text-gray-600">Our mission, vision, and core values</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <Target className="w-10 h-10 text-primary-500 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 text-lg">
              To empower students worldwide with access to quality education and 
              career opportunities through expert guidance and support.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <Eye className="w-10 h-10 text-primary-500 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 text-lg">
              To be the world's most trusted education consultancy, transforming 
              lives through innovative solutions and personalized guidance.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <value.icon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}