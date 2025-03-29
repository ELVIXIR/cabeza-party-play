
import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', className = '' }) => {
  const sizeClasses = {
    small: 'text-2xl',
    medium: 'text-4xl',
    large: 'text-6xl',
  };
  
  return (
    <div className={`font-extrabold tracking-widest text-cabeza-primary ${sizeClasses[size]} ${className}`}>
      CABEZA
      <span className="animate-pulse-strong inline-block ml-1 text-cabeza-secondary">!</span>
    </div>
  );
};

export default Logo;
