
import React from 'react';
import { cn } from '@/lib/utils';

interface CabezaButtonProps {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent) => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const CabezaButton: React.FC<CabezaButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  className = '',
  disabled = false,
  icon,
  type = 'button'
}) => {
  const variantClasses = {
    primary: 'bg-cabeza-primary hover:bg-red-600 text-white',
    secondary: 'bg-cabeza-secondary hover:bg-yellow-500 text-black',
    outline: 'bg-transparent hover:bg-cabeza-primary text-cabeza-primary hover:text-white border-2 border-cabeza-primary'
  };
  
  const sizeClasses = {
    small: 'py-2 px-4 text-sm',
    medium: 'py-3 px-6 text-base',
    large: 'py-4 px-8 text-lg'
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2',
        variantClasses[variant],
        sizeClasses[size],
        disabled && 'opacity-50 cursor-not-allowed hover:scale-100',
        className
      )}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default CabezaButton;
