
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import CabezaButton from '@/components/CabezaButton';
import { Play, Settings, ShoppingBag } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-cabeza-dark">
      <div className="animate-slide-up max-w-md w-full mx-auto text-center">
        <Logo size="large" className="mb-12" />
        
        <div className="space-y-6">
          <CabezaButton 
            onClick={() => navigate('/add-players')}
            className="w-full"
            icon={<Play size={20} />}
          >
            Lancer une partie
          </CabezaButton>
          
          <CabezaButton 
            onClick={() => navigate('/partners')}
            variant="secondary"
            className="w-full"
            icon={<ShoppingBag size={20} />}
          >
            Partenaires
          </CabezaButton>
          
          <CabezaButton 
            onClick={() => navigate('/settings')}
            variant="outline"
            className="w-full"
            icon={<Settings size={20} />}
          >
            Réglages
          </CabezaButton>
        </div>
        
        <p className="mt-12 text-gray-400 text-sm">
          Le jeu d'alcool pour animer vos soirées !
        </p>
      </div>
    </div>
  );
};

export default Home;
