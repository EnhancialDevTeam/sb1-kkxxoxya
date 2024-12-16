import { LucideIcon } from 'lucide-react';

interface CTAButtonProps {
  icon: LucideIcon;
  text: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick: () => void;
}

export default function CTAButton({ icon: Icon, text, variant = 'primary', onClick }: CTAButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-200 text-base";
  
  const variants = {
    primary: "bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl",
    secondary: "bg-white text-primary-500 hover:bg-primary-50 shadow-lg hover:shadow-xl",
    outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-50"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      <Icon className="w-5 h-5 mr-2" />
      {text}
    </button>
  );
}