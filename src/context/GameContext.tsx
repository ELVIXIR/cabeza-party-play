
import React, { createContext, useContext, useState, useEffect } from 'react';
import { GameRules } from '@/lib/gameRules';

type Player = {
  id: string;
  name: string;
};

type GameContextType = {
  players: Player[];
  addPlayer: (name: string) => void;
  removePlayer: (id: string) => void;
  currentPlayerIndex: number;
  setCurrentPlayerIndex: (index: number) => void;
  nextPlayer: () => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  language: string;
  setLanguage: (lang: string) => void;
  gameRules: typeof GameRules;
  isPremium: boolean;
  setIsPremium: (isPremium: boolean) => void;
  resetGame: () => void;
  drawnCards: string[];
  drawCard: () => string;
  cursedPot: number;
  addToCursedPot: (amount: number) => void;
  drinkCursedPot: () => number;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [language, setLanguage] = useState('fr');
  const [isPremium, setIsPremium] = useState(false);
  const [drawnCards, setDrawnCards] = useState<string[]>([]);
  const [cursedPot, setCursedPot] = useState(0);

  // Load saved state from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('cabezaSettings');
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      setSoundEnabled(parsedSettings.soundEnabled);
      setLanguage(parsedSettings.language);
      setIsPremium(parsedSettings.isPremium);
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('cabezaSettings', JSON.stringify({
      soundEnabled,
      language,
      isPremium
    }));
  }, [soundEnabled, language, isPremium]);

  const addPlayer = (name: string) => {
    if (players.length < 12) {
      setPlayers([...players, { id: Date.now().toString(), name }]);
    }
  };

  const removePlayer = (id: string) => {
    setPlayers(players.filter(player => player.id !== id));
  };

  const nextPlayer = () => {
    setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
  };

  const resetGame = () => {
    setPlayers([]);
    setCurrentPlayerIndex(0);
    setDrawnCards([]);
    setCursedPot(0);
  };

  const drawCard = () => {
    // Get available rules (not drawn yet)
    const availableRules = Object.keys(GameRules).filter(
      ruleId => !drawnCards.includes(ruleId)
    );
    
    // If all cards have been drawn, reset the deck
    if (availableRules.length === 0) {
      setDrawnCards([]);
      return drawCard();
    }
    
    // Draw a random card from available rules
    const randomIndex = Math.floor(Math.random() * availableRules.length);
    const drawnCard = availableRules[randomIndex];
    
    // Add to drawn cards
    setDrawnCards([...drawnCards, drawnCard]);
    
    return drawnCard;
  };

  const addToCursedPot = (amount: number) => {
    setCursedPot(prev => prev + amount);
  };

  const drinkCursedPot = () => {
    const amount = cursedPot;
    setCursedPot(0);
    return amount;
  };

  return (
    <GameContext.Provider
      value={{
        players,
        addPlayer,
        removePlayer,
        currentPlayerIndex,
        setCurrentPlayerIndex,
        nextPlayer,
        soundEnabled,
        setSoundEnabled,
        language,
        setLanguage,
        gameRules: GameRules,
        isPremium,
        setIsPremium,
        resetGame,
        drawnCards,
        drawCard,
        cursedPot,
        addToCursedPot,
        drinkCursedPot
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
