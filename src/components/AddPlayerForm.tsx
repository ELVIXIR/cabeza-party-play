
import React, { useState } from 'react';
import { useGame } from '@/context/GameContext';
import CabezaButton from './CabezaButton';
import { Plus } from 'lucide-react';

const AddPlayerForm: React.FC = () => {
  const [playerName, setPlayerName] = useState('');
  const { players, addPlayer } = useGame();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName.trim() && players.length < 12) {
      addPlayer(playerName.trim());
      setPlayerName('');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
      <div className="w-full">
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Nom du joueur"
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-cabeza-primary focus:outline-none"
          maxLength={20}
        />
      </div>
      
      <CabezaButton 
        type="submit" 
        disabled={!playerName.trim() || players.length >= 12}
        icon={<Plus size={20} />}
      >
        Ajouter un joueur
      </CabezaButton>
    </form>
  );
};

export default AddPlayerForm;
