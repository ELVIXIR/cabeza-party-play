
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import HelixirButton from '@/components/HelixirButton';
import { Play, Settings, ShoppingBag, List } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-helixir-dark">
      <div className="animate-slide-up max-w-md w-full mx-auto text-center">
        <Logo size="large" className="mb-12" />
        
        <div className="space-y-6">
          <HelixirButton 
            onClick={() => navigate('/add-players')}
            className="w-full"
            icon={<Play size={20} />}
          >
            Lancer une partie
          </HelixirButton>
          
          <HelixirButton 
            onClick={() => navigate('/rules-list')}
            variant="secondary"
            className="w-full"
            icon={<List size={20} />}
          >
            Règles du jeu
          </HelixirButton>
          
          <HelixirButton 
            onClick={() => navigate('/partners')}
            variant="secondary"
            className="w-full"
            icon={<ShoppingBag size={20} />}
          >
            Partenaires
          </HelixirButton>
          
          <HelixirButton 
            onClick={() => navigate('/settings')}
            variant="outline"
            className="w-full"
            icon={<Settings size={20} />}
          >
            Réglages
          </HelixirButton>
        </div>
        
        <p className="mt-12 text-gray-400 text-sm">
          Le jeu d'alcool pour animer vos soirées !
        </p>
      </div>
    </div>
  );
};

export default Home;
