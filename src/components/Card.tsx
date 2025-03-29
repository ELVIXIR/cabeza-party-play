
import React, { useState } from 'react';
import { GameRule } from '@/lib/gameRules';
import Logo from './Logo';
import CabezaButton from './CabezaButton';

interface CardProps {
  rule?: GameRule;
  onFlip?: () => void;
  onNextPlayer?: () => void;
  showButtons?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  rule, 
  onFlip, 
  onNextPlayer,
  showButtons = true
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (onFlip) onFlip();
  };

  const getDifficultyColor = (difficulty: number) => {
    switch(difficulty) {
      case 1: return 'bg-green-500';
      case 2: return 'bg-yellow-500';
      case 3: return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div 
      className={`cabeza-card w-full max-w-md h-96 mx-auto ${isFlipped ? 'card-flipped' : ''}`}
      onClick={handleFlip}
    >
      <div className="card-inner h-full">
        <div className="card-front rounded-xl bg-gradient-to-br from-cabeza-dark to-gray-900 flex flex-col items-center justify-center p-5">
          <Logo size="large" className="mb-6" />
          <div className="w-20 h-20 bg-cabeza-primary rounded-full flex items-center justify-center animate-pulse-strong">
            <span className="text-white text-xl font-bold">FLIP</span>
          </div>
        </div>
        
        {rule && (
          <div className="card-back rounded-xl bg-gradient-to-br from-cabeza-dark to-gray-900 flex flex-col items-center justify-between p-5 text-center">
            <div className="category-badge px-3 py-1 rounded-full text-xs font-bold mb-2" 
                style={{ backgroundColor: getDifficultyColor(rule.difficulty) }}>
              {rule.category.toUpperCase()}
            </div>
            
            <h2 className="cabeza-title mb-2">{rule.title}</h2>
            <p className="cabeza-subtitle mb-4">{rule.description}</p>
            
            <div className="instructions bg-gray-800 p-4 rounded-lg mb-4 text-sm">
              {rule.instructions}
            </div>
            
            {showButtons && (
              <div className="flex gap-3">
                <CabezaButton 
                  variant="outline" 
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFlip();
                  }}
                >
                  Retourner
                </CabezaButton>
                
                <CabezaButton 
                  variant="primary" 
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onNextPlayer) onNextPlayer();
                  }}
                >
                  Joueur Suivant
                </CabezaButton>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
