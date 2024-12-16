import { memo } from 'react';

interface TestimonialCardProps {
  name: string;
  course: string;
  university: string;
  image: string;
  quote: string;
}

function TestimonialCard({ name, course, university, image, quote }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mx-4">
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
          <p className="text-primary-600">{course}</p>
          <p className="text-sm text-gray-600">{university}</p>
        </div>
      </div>
      <blockquote className="text-gray-700 italic">"{quote}"</blockquote>
    </div>
  );
}

export default memo(TestimonialCard);