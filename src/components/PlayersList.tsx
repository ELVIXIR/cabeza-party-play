
import React from 'react';
import { useGame } from '@/context/GameContext';
import HelixirButton from './HelixirButton';
import { Trash, User } from 'lucide-react';

interface PlayersListProps {
  allowRemove?: boolean;
}

const PlayersList: React.FC<PlayersListProps> = ({ allowRemove = true }) => {
  const { players, removePlayer, currentPlayerIndex } = useGame();

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-cabeza-secondary">Joueurs ({players.length}/12)</h2>
      
      {players.length === 0 ? (
        <div className="text-center py-4 text-gray-400">
          Aucun joueur ajouté
        </div>
      ) : (
        <ul className="space-y-2">
          {players.map((player, index) => (
            <li 
              key={player.id} 
              className={`flex items-center justify-between p-3 rounded-lg ${
                index === currentPlayerIndex 
                  ? 'bg-cabeza-primary text-white' 
                  : 'bg-gray-800 text-gray-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <User size={20} />
                <span className="font-medium">{player.name}</span>
                {index === currentPlayerIndex && (
                  <span className="bg-cabeza-dark text-cabeza-secondary text-xs px-2 py-1 rounded-full">
                    Tour actuel
                  </span>
                )}
              </div>
              
              {allowRemove && (
                <HelixirButton 
                  variant="outline" 
                  size="small" 
                  className="!p-1 min-w-8 !border-none"
                  onClick={() => removePlayer(player.id)}
                >
                  <Trash size={16} />
                </HelixirButton>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlayersList;
