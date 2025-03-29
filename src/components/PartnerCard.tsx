
import React from 'react';
import CabezaButton from './CabezaButton';

interface PartnerCardProps {
  name: string;
  logo: string;
  promoCode: string;
  website: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ 
  name, 
  logo, 
  promoCode, 
  website 
}) => {
  const handleVisit = () => {
    // In a real app, you might want to track this click for commissions
    window.open(website, '_blank');
  };
  
  return (
    <div className="bg-gray-800 rounded-xl p-5 shadow-lg">
      <div className="flex flex-col items-center">
        <img 
          src={logo} 
          alt={`Logo de ${name}`} 
          className="w-24 h-24 object-contain mb-4"
        />
        <h3 className="text-xl font-bold text-cabeza-secondary mb-2">{name}</h3>
        
        <div className="bg-gray-700 p-3 rounded-lg w-full text-center mb-4">
          <p className="text-sm text-gray-300 mb-1">Code promo:</p>
          <p className="text-lg font-bold text-cabeza-primary">{promoCode}</p>
        </div>
        
        <CabezaButton onClick={handleVisit}>
          Visiter la boutique
        </CabezaButton>
      </div>
    </div>
  );
};

export default PartnerCard;
