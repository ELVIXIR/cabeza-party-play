
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
    <div className={`font-extrabold tracking-widest text-helixir-primary ${sizeClasses[size]} ${className}`}>
      HÉLIXIR
      <span className="animate-pulse-strong inline-block ml-1 text-helixir-secondary">!</span>
    </div>
  );
};

export default Logo;
