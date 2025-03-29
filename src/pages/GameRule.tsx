
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGame } from '@/context/GameContext';
import Logo from '@/components/Logo';
import Card from '@/components/Card';
import CabezaButton from '@/components/CabezaButton';
import PlayersList from '@/components/PlayersList';
import { Home } from 'lucide-react';

const GameRule: React.FC = () => {
  const { ruleId } = useParams<{ ruleId: string }>();
  const navigate = useNavigate();
  const { 
    gameRules, 
    players, 
    currentPlayerIndex, 
    nextPlayer 
  } = useGame();
  
  useEffect(() => {
    // If no players or invalid rule, redirect back
    if (players.length === 0 || !ruleId || !gameRules[ruleId]) {
      navigate('/home');
    }
  }, [players, ruleId, gameRules, navigate]);
  
  if (players.length === 0 || !ruleId || !gameRules[ruleId]) {
    return null;
  }
  
  const currentRule = gameRules[ruleId];
  const currentPlayer = players[currentPlayerIndex];
  
  const handleNextPlayer = () => {
    nextPlayer();
    navigate('/card-pile');
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
            <Home size={20} />
          </CabezaButton>
          <Logo size="medium" />
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>
        
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-cabeza-secondary">
            Tour de {currentPlayer.name}
          </h2>
        </div>
        
        <Card 
          rule={currentRule}
          onNextPlayer={handleNextPlayer}
        />
        
        <div className="mt-8">
          <h3 className="text-lg font-bold text-cabeza-secondary mb-4">
            Ordre des joueurs
          </h3>
          <PlayersList allowRemove={false} />
        </div>
      </div>
    </div>
  );
};

export default GameRule;
