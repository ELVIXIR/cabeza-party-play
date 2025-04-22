
import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  variant?: 'text' | 'image' | 'full';
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'medium', 
  className = '',
  variant = 'text'
}) => {
  const sizeClasses = {
    small: 'h-8',
    medium: 'h-12',
    large: 'h-20'
  };
  
  if (variant === 'image') {
    return (
      <img 
        src="/lovable-uploads/82a75a5c-ef69-4607-981c-5a2756782ca4.png"
        alt="Hélixir"
        className={`${sizeClasses[size]} ${className}`}
      />
    );
  }

  if (variant === 'full') {
    return (
      <img 
        src="/lovable-uploads/3cd6069c-501a-48c5-9dd3-b7ce616e7b57.png"
        alt="Hélixir"
        className={`${sizeClasses[size]} ${className}`}
      />
    );
  }
  
  const textSizeClasses = {
    small: 'text-2xl',
    medium: 'text-4xl',
    large: 'text-6xl',
  };
  
  return (
    <div className={`font-extrabold tracking-widest text-helixir-primary ${textSizeClasses[size]} ${className}`}>
      HÉLIXIR
      <span className="animate-pulse-strong inline-block ml-1 text-helixir-secondary">!</span>
    </div>
  );
};

export default Logo;
