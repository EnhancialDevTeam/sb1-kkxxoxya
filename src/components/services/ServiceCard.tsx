import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaText: string;
  onClick: () => void;
}

export default function ServiceCard({ icon: Icon, title, description, ctaText, onClick }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all h-full flex flex-col">
      <div className="flex-grow">
        <Icon className="w-12 h-12 text-primary-500 mb-4" />
        <h3 className="text-xl font-semibold text-primary-800 mb-2">{title}</h3>
        <p className="text-primary-600 mb-4">{description}</p>
      </div>
      <button
        onClick={onClick}
        className="text-primary-500 font-medium inline-flex items-center hover:text-primary-600 transition-colors mt-4"
      >
        {ctaText} →
      </button>
    </div>
  );
}