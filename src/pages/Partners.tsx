
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import HelixirButton from '@/components/HelixirButton';
import PartnerCard from '@/components/PartnerCard';
import { ArrowLeft } from 'lucide-react';

// Normally these would come from an API or backend
const partners = [
  {
    id: 1,
    name: 'Distillerie du Léman',
    logo: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    promoCode: 'CABEZA10',
    website: 'https://www.distillerieduleman.ch/'
  },
  {
    id: 2,
    name: 'Souboz',
    logo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    promoCode: 'CABEZA15',
    website: 'https://www.souboz.ch/'
  },
  {
    id: 3,
    name: 'Gin Atelier',
    logo: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    promoCode: 'CABEZA20',
    website: 'https://www.ginatelier.com/'
  }
];

const Partners: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen p-4 pt-6 bg-cabeza-dark">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-8">
          <HelixirButton 
            variant="outline" 
            size="small"
            onClick={() => navigate('/home')}
            className="!p-2"
          >
            <ArrowLeft size={20} />
          </HelixirButton>
          <Logo size="medium" />
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>
        
        <h1 className="text-2xl font-bold mb-6 text-center text-cabeza-secondary">
          Nos Partenaires
        </h1>
        
        <p className="text-gray-300 text-center mb-8">
          Profitez de réductions exclusives chez nos partenaires avec ces codes promos.
        </p>
        
        <div className="grid gap-6">
          {partners.map(partner => (
            <PartnerCard
              key={partner.id}
              name={partner.name}
              logo={partner.logo}
              promoCode={partner.promoCode}
              website={partner.website}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
