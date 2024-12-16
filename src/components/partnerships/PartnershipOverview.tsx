import { Users, Globe, School } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '20,000+',
    label: 'Student Placements'
  },
  {
    icon: School,
    value: '300+',
    label: 'Partner Institutions'
  },
  {
    icon: Globe,
    value: '30+',
    label: 'Study Destinations'
  }
];

export default function PartnershipOverview() {
  return (
    <section id="about-partnership" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Partner with Jestone Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Jestone Education, we believe in the power of collaboration to create lasting impact. 
            As a trusted leader in global education consulting, we are always seeking partnerships 
            that align with our vision of empowering students and transforming lives through education.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}