import { GraduationCap, Globe, CheckCircle, Briefcase, Users } from 'lucide-react';

interface StatItem {
  icon: typeof GraduationCap;
  title: string;
  description: string;
}

const stats: StatItem[] = [
  {
    icon: GraduationCap,
    title: 'Career Pathway Counseling',
    description: 'Expert guidance for your academic journey'
  },
  {
    icon: Globe,
    title: 'Overseas Admissions Processing',
    description: 'Seamless applications to top institutions'
  },
  {
    icon: CheckCircle,
    title: 'Study Visa Success',
    description: '99% visa approval rate'
  },
  {
    icon: Briefcase,
    title: 'Post-Study Career Support',
    description: 'Dedicated placement assistance'
  },
  {
    icon: Users,
    title: 'Student Support Services',
    description: '24/7 assistance throughout your journey'
  }
];

export default function OverviewStats() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex-shrink-0">
            <stat.icon className="w-8 h-8 text-primary-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {stat.title}
            </h3>
            <p className="text-gray-600">{stat.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}