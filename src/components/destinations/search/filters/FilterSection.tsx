import { ReactNode } from 'react';

interface FilterSectionProps {
  label: string;
  children: ReactNode;
}

export default function FilterSection({ label, children }: FilterSectionProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}