
import React from 'react';

interface BottleLampLogoProps {
  className?: string;
  size?: number;
}

const BottleLampLogo: React.FC<BottleLampLogoProps> = ({ 
  className = '', 
  size = 60 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Bottle Body */}
      <path
        d="M40 20V25C40 30 35 35 35 40V80C35 85 40 90 50 90C60 90 65 85 65 80V40C65 35 60 30 60 25V20H40Z"
        fill="#FFD700"
        fillOpacity="0.15"
        stroke="#FFD700"
        strokeWidth="2"
      />
      
      {/* Bottle Neck */}
      <path
        d="M43 15V20H57V15C57 12 55 10 50 10C45 10 43 12 43 15Z"
        fill="#FFD700"
        fillOpacity="0.15"
        stroke="#FFD700"
        strokeWidth="2"
      />
      
      {/* Bottle Cap */}
      <rect x="42" y="7" width="16" height="3" rx="1" fill="#FFD700" stroke="#FFD700" />
      
      {/* Light Bulb Base */}
      <circle cx="50" cy="45" r="8" fill="#FF4136" fillOpacity="0.3" />
      
      {/* Filaments */}
      <path
        d="M50 37V30"
        stroke="#FF4136"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M45 40L40 35"
        stroke="#FF4136"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M55 40L60 35"
        stroke="#FF4136"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M50 53V58"
        stroke="#FF4136"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M43 50L38 53"
        stroke="#FF4136"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M57 50L62 53"
        stroke="#FF4136"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Light Glow Outer */}
      <circle 
        cx="50" 
        cy="45" 
        r="15" 
        fill="#FF4136" 
        fillOpacity="0.1" 
      />
      
      {/* Light Glow Inner */}
      <circle 
        cx="50" 
        cy="45" 
        r="10" 
        fill="#FF4136" 
        fillOpacity="0.2" 
      />
    </svg>
  );
};

export default BottleLampLogo;
