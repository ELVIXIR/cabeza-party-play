
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '@/context/GameContext';
import Logo from '@/components/Logo';
import HelixirButton from '@/components/HelixirButton';
import { Play } from 'lucide-react';

const GameStart: React.FC = () => {
  const navigate = useNavigate();
  const { players, currentPlayerIndex } = useGame();
  
  useEffect(() => {
    // If no players, redirect back to add players
    if (players.length === 0) {
      navigate('/add-players');
    }
  }, [players, navigate]);
  
  if (players.length === 0) {
    return null;
  }
  
  const currentPlayer = players[currentPlayerIndex];
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-cabeza-dark">
      <div className="animate-fade-in max-w-md w-full mx-auto text-center">
        <Logo size="medium" className="mb-12" />
        
        <div className="bg-gray-800 rounded-xl p-8 mb-8 shadow-xl">
          <h2 className="text-xl text-cabeza-secondary mb-6">
            Le joueur qui commence est
          </h2>
          
          <div className="text-4xl font-extrabold text-cabeza-primary mb-6 animate-pulse-strong">
            {currentPlayer.name}
          </div>
          
          <p className="text-gray-400 mb-4">
            Es-tu prêt à relever les défis ?
          </p>
        </div>
        
        <HelixirButton 
          onClick={() => navigate('/card-pile')}
          className="w-full"
          icon={<Play size={20} />}
        >
          Commencer à jouer
        </HelixirButton>
      </div>
    </div>
  );
};

export default GameStart;
