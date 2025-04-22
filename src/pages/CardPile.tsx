
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '@/context/GameContext';
import Logo from '@/components/Logo';
import Card from '@/components/Card';
import HelixirButton from '@/components/HelixirButton';
import { Home } from 'lucide-react';

const CardPile: React.FC = () => {
  const navigate = useNavigate();
  const { players, currentPlayerIndex, drawCard } = useGame();
  
  if (players.length === 0) {
    navigate('/add-players');
    return null;
  }
  
  const currentPlayer = players[currentPlayerIndex];
  
  const handleDrawCard = () => {
    const drawnCardId = drawCard();
    navigate(`/game-rule/${drawnCardId}`);
  };
  
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
            <Home size={20} />
          </HelixirButton>
          <Logo size="medium" />
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>
        
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-cabeza-secondary">
            Tour de {currentPlayer.name}
          </h2>
          <p className="text-gray-400 mt-2">
            Clique sur la carte pour tirer une règle
          </p>
        </div>
        
        <div onClick={handleDrawCard} className="cursor-pointer transform transition-transform hover:scale-105">
          <Card showButtons={false} />
        </div>
      </div>
    </div>
  );
};

export default CardPile;
