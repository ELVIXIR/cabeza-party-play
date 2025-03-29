export type GameRule = {
  id: string;
  title: string;
  description: string;
  instructions: string;
  category: 'action' | 'social' | 'drinking' | 'challenge';
  difficulty: 1 | 2 | 3; // 1 = easy, 3 = hard
  isPremium?: boolean; // Nouvelle propriété pour indiquer si la règle est premium
};

export const GameRules: Record<string, GameRule> = {
  betrayal: {
    id: 'betrayal',
    title: 'BETRAYAL',
    description: 'Un shot à la personne qui...',
    instructions: 'Tu peux choisir quelqu\'un qui doit boire un shot, ou décider de le boire toi-même.',
    category: 'drinking',
    difficulty: 2
  },
  actFast: {
    id: 'actFast',
    title: 'ACT FAST',
    description: 'Tout le monde doit réagir rapidement.',
    instructions: 'Tout le monde doit suivre l\'instruction le plus vite possible. Le dernier à agir doit boire.',
    category: 'action',
    difficulty: 1
  },
  theCursedPot: {
    id: 'theCursedPot',
    title: 'THE CURSED POT',
    description: 'Le pot maudit attend...',
    instructions: 'Verse une gorgée de ta boisson dans le pot maudit. La personne qui pioche la carte "You Are Doomed" devra boire tout ce qui s\'y trouve.',
    category: 'drinking',
    difficulty: 2
  },
  youAreDoomed: {
    id: 'youAreDoomed',
    title: 'YOU ARE DOOMED',
    description: 'Le destin a frappé.',
    instructions: 'Tu dois boire tout le contenu du pot maudit. Bon courage!',
    category: 'drinking',
    difficulty: 3
  },
  malediction: {
    id: 'malediction',
    title: 'MALEDICTION',
    description: 'Une malédiction frappe le groupe.',
    instructions: 'Pour le reste de la partie, vous devez tous boire en respectant une règle spéciale (ex: boire avec la main gauche seulement).',
    category: 'social',
    difficulty: 2
  },
  shameOnYou: {
    id: 'shameOnYou',
    title: 'SHAME ON YOU',
    description: 'Tu es devenu infréquentable.',
    instructions: 'Tout le monde doit t\'ignorer jusqu\'à la fin de ton prochain tour. Si quelqu\'un te parle ou répond à tes questions, cette personne boit.',
    category: 'social',
    difficulty: 2
  },
  themes: {
    id: 'themes',
    title: 'THEMES',
    description: 'Un thème, une lettre, des mots.',
    instructions: 'On choisit un thème et une lettre. À tour de rôle, chaque joueur doit dire un mot du thème commençant par cette lettre. Celui qui répète ou ne trouve pas de mot boit 2 gorgées.',
    category: 'challenge',
    difficulty: 2
  },
  thinkFast: {
    id: 'thinkFast',
    title: 'THINK FAST',
    description: 'Pas de lien, pas de logique.',
    instructions: 'À tour de rôle, dites un mot qui n\'a AUCUN lien avec le mot précédent. Celui qui hésite ou dont le mot a un lien boit.',
    category: 'challenge',
    difficulty: 3
  },
  thePlotTwist: {
    id: 'thePlotTwist',
    title: 'THE PLOT-TWIST',
    description: 'Construisez une histoire ensemble.',
    instructions: 'À tour de rôle, chaque joueur ajoute une phrase à l\'histoire. Le premier qui ne peut pas continuer de façon cohérente boit.',
    category: 'social',
    difficulty: 2
  },
  drinkingBuddies: {
    id: 'drinkingBuddies',
    title: 'DRINKING BUDDIES',
    description: 'Choisis ton compagnon de beuverie.',
    instructions: 'Désigne un autre joueur. Jusqu\'à ton prochain tour, chaque fois que l\'un de vous boit, l\'autre doit boire aussi.',
    category: 'drinking',
    difficulty: 1
  },
  viciousAngel: {
    id: 'viciousAngel',
    title: 'VICIOUS ANGEL',
    description: 'Sauves-en un, condamnes-en un autre.',
    instructions: 'Quand un joueur doit boire, tu peux l\'en dispenser, mais tu dois désigner quelqu\'un d\'autre qui boira à sa place.',
    category: 'social',
    difficulty: 1
  },
  factOrCap: {
    id: 'factOrCap',
    title: 'FACT OR CAP',
    description: 'Vérité ou mensonge?',
    instructions: 'Raconte une anecdote sur toi. Les autres votent pour décider si c\'est vrai ou faux. Ceux qui se trompent boivent.',
    category: 'social',
    difficulty: 2
  },
  duel: {
    id: 'duel',
    title: 'DUEL',
    description: 'Affrontes ton adversaire.',
    instructions: 'Choisis un adversaire et jouez au shifumi (pierre-papier-ciseaux). Le perdant boit une gorgée. En cas d\'égalité, les deux boivent.',
    category: 'challenge',
    difficulty: 1
  },
  pato: {
    id: 'pato',
    title: 'PATO',
    description: 'Invente une définition.',
    instructions: 'On te donne un mot qui n\'existe pas. Donne une définition convaincante. Si quelqu\'un te soupçonne de mentir, cette personne boit.',
    category: 'challenge',
    difficulty: 2
  },
  guessWhere: {
    id: 'guessWhere',
    title: 'GUESS WHERE',
    description: 'Devine où je touche.',
    instructions: 'Un joueur ferme les yeux. Un autre touche une partie de son corps. Le joueur aux yeux fermés doit deviner quelle partie a été touchée. S\'il se trompe, il boit.',
    category: 'action',
    difficulty: 1
  },
  truthOrDare: {
    id: 'truthOrDare',
    title: 'TRUTH OR DARE',
    description: 'Action ou vérité.',
    instructions: 'Choisis entre "action" ou "vérité". Les autres joueurs décident ensemble du défi ou de la question. Si tu refuses, bois un shot.',
    category: 'challenge',
    difficulty: 2
  },
  dontFlopThisUp: {
    id: 'dontFlopThisUp',
    title: 'DON\'T FLOP THIS UP!',
    description: 'Fais rire les autres.',
    instructions: 'Tu as 30 secondes pour faire rire au moins un autre joueur. Si tu échoues, bois un shot.',
    category: 'challenge',
    difficulty: 2
  },
  deadOnTime: {
    id: 'deadOnTime',
    title: 'DEAD ON TIME',
    description: 'Arrête le chrono au bon moment.',
    instructions: 'Essaie d\'arrêter un chrono exactement à 5.0 secondes. Si tu réussis, tous les autres joueurs boivent. Sinon, c\'est toi qui bois.',
    category: 'challenge',
    difficulty: 2
  },
  storyTime: {
    id: 'storyTime',
    title: 'STORY TIME',
    description: 'Raconte une histoire avec des mots imposés.',
    instructions: 'Raconte une histoire d\'au moins 30 secondes en incluant trois mots choisis aléatoirement. Si tu échoues ou hésites trop, bois deux gorgées.',
    category: 'challenge',
    difficulty: 3
  },
  diceRoulette: {
    id: 'diceRoulette',
    title: 'DICE ROULETTE',
    description: 'Le hasard du dé détermine ton sort.',
    instructions: 'Lance un dé. Si tu obtiens 1-2: bois un shot. Si tu obtiens 3-4: choisis quelqu\'un qui boit. Si tu obtiens 5-6: tout le monde boit sauf toi.',
    category: 'drinking',
    difficulty: 2,
    isPremium: true
  },
  wordChain: {
    id: 'wordChain',
    title: 'WORD CHAIN',
    description: 'Enchaîne les mots sans pause.',
    instructions: 'À tour de rôle, chaque joueur doit dire un mot commençant par la dernière lettre du mot précédent. Temps de réflexion: 3 secondes max. Le perdant boit un shot.',
    category: 'challenge',
    difficulty: 2,
    isPremium: true
  },
  mirrorMaster: {
    id: 'mirrorMaster',
    title: 'MIRROR MASTER',
    description: 'Imite parfaitement.',
    instructions: 'Tu dois imiter les gestes d\'un autre joueur de ton choix jusqu\'à ton prochain tour. Chaque fois que tu échoues à imiter correctement, tu bois.',
    category: 'action',
    difficulty: 2,
    isPremium: true
  },
  secretWord: {
    id: 'secretWord',
    title: 'SECRET WORD',
    description: 'Évite le mot interdit.',
    instructions: 'Les autres joueurs choisissent un mot courant que tu ne devras pas prononcer jusqu\'à ton prochain tour. Si tu le dis, tu bois un shot.',
    category: 'challenge',
    difficulty: 3,
    isPremium: true
  },
  personalAssistant: {
    id: 'personalAssistant',
    title: 'PERSONAL ASSISTANT',
    description: 'Sers les autres.',
    instructions: 'Jusqu\'à ton prochain tour, tu dois servir les boissons à toute personne qui te le demande. Si tu refuses, tu bois deux gorgées à chaque refus.',
    category: 'social',
    difficulty: 1,
    isPremium: true
  }
};

// Fonctions utilitaires pour filtrer les règles
export const getStandardRules = () => {
  return Object.values(GameRules).filter(rule => !rule.isPremium);
};

export const getPremiumRules = () => {
  return Object.values(GameRules).filter(rule => rule.isPremium);
};

export const getAllRules = () => {
  return Object.values(GameRules);
};
