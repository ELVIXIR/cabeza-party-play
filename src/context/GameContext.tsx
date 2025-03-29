import React, { createContext, useContext, useState, useEffect } from 'react';
import { GameRules, GameRule, getStandardRules } from '@/lib/gameRules';

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
  selectedRules: Record<string, boolean>;
  setSelectedRules: (rules: Record<string, boolean>) => void;
  getActiveRules: () => GameRule[];
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
  const [selectedRules, setSelectedRules] = useState<Record<string, boolean>>({});

  // Load saved state from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('cabezaSettings');
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      setSoundEnabled(parsedSettings.soundEnabled);
      setLanguage(parsedSettings.language);
      setIsPremium(parsedSettings.isPremium);
      
      if (parsedSettings.selectedRules) {
        setSelectedRules(parsedSettings.selectedRules);
      }
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('cabezaSettings', JSON.stringify({
      soundEnabled,
      language,
      isPremium,
      selectedRules
    }));
  }, [soundEnabled, language, isPremium, selectedRules]);

  // Fonction pour obtenir les règles actives pour la partie
  const getActiveRules = (): GameRule[] => {
    // Si aucune règle n'est sélectionnée ou si l'utilisateur n'est pas premium,
    // utiliser toutes les règles standard
    if (!isPremium || Object.keys(selectedRules).length === 0) {
      return getStandardRules();
    }
    
    // Sinon, utiliser les règles sélectionnées
    return Object.keys(selectedRules)
      .filter(ruleId => selectedRules[ruleId])
      .map(ruleId => GameRules[ruleId])
      .filter(Boolean);
  };

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

  const drawCard = () => {
    // Obtenir les règles actives pour la partie actuelle
    const activeRules = getActiveRules();
    const activeRuleIds = activeRules.map(rule => rule.id);
    
    // Filtrer les règles disponibles (pas encore tirées)
    const availableRules = activeRuleIds.filter(
      ruleId => !drawnCards.includes(ruleId)
    );
    
    // Si toutes les cartes ont été tirées, réinitialiser le paquet
    if (availableRules.length === 0) {
      setDrawnCards([]);
      return drawCard();
    }
    
    // Tirer une carte aléatoire parmi les règles disponibles
    const randomIndex = Math.floor(Math.random() * availableRules.length);
    const drawnCard = availableRules[randomIndex];
    
    // Ajouter aux cartes tirées
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

  const resetGame = () => {
    setPlayers([]);
    setCurrentPlayerIndex(0);
    setDrawnCards([]);
    setCursedPot(0);
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
        drinkCursedPot,
        selectedRules,
        setSelectedRules,
        getActiveRules
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
