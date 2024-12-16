import { Linkedin } from 'lucide-react';

const leaders = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    bio: 'With 15 years of experience in international education, John is passionate about guiding students toward global opportunities.',
    linkedin: 'https://linkedin.com/in/johndoe'
  },
  {
    name: 'Sarah Johnson',
    role: 'Director of Student Success',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    bio: 'Sarah ensures every student receives personalized support throughout their journey with her decade of experience in student counseling.',
    linkedin: 'https://linkedin.com/in/sarahjohnson'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Global Partnerships',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    bio: 'Michael develops and maintains our extensive network of university partnerships, bringing 12 years of international education experience.',
    linkedin: 'https://linkedin.com/in/michaelchen'
  }
];

export default function Leadership() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600">
            Led by experienced professionals dedicated to transforming education
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{leader.name}</h3>
                    <p className="text-primary-500">{leader.role}</p>
                  </div>
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                    aria-label={`${leader.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-gray-600">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}