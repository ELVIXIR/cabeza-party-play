
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '@/context/GameContext';
import Logo from '@/components/Logo';
import CabezaButton from '@/components/CabezaButton';
import AddPlayerForm from '@/components/AddPlayerForm';
import PlayersList from '@/components/PlayersList';
import { ArrowLeft, Play } from 'lucide-react';

const AddPlayers: React.FC = () => {
  const navigate = useNavigate();
  const { players } = useGame();
  
  const handleStartGame = () => {
    if (players.length > 0) {
      navigate('/game-transition');
    }
  };
  
  return (
    <div className="min-h-screen p-4 pt-6 bg-cabeza-dark">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-8">
          <CabezaButton 
            variant="outline" 
            size="small"
            onClick={() => navigate('/home')}
            className="!p-2"
          >
            <ArrowLeft size={20} />
          </CabezaButton>
          <Logo size="medium" />
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>
        
        <h1 className="text-2xl font-bold mb-6 text-center text-cabeza-secondary">
          Ajouter des joueurs
        </h1>
        
        <div className="space-y-8">
          <AddPlayerForm />
          
          <PlayersList />
          
          <div className="mt-8">
            <CabezaButton 
              onClick={handleStartGame}
              disabled={players.length === 0}
              className="w-full"
              icon={<Play size={20} />}
            >
              Commencer la partie
            </CabezaButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPlayers;
