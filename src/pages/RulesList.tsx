
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '@/context/GameContext';
import { getStandardRules, getPremiumRules, getAllRules } from '@/lib/gameRules';
import Logo from '@/components/Logo';
import CabezaButton from '@/components/CabezaButton';
import Card from '@/components/Card';
import { ArrowLeft, Lock, Filter, CheckSquare, Square } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const RulesList: React.FC = () => {
  const navigate = useNavigate();
  const { isPremium } = useGame();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedRules, setSelectedRules] = useState<Record<string, boolean>>({});
  const [showFilters, setShowFilters] = useState(false);
  const [difficultyFilter, setDifficultyFilter] = useState<number[]>([1, 2, 3]);
  const [categoryFilter, setCategoryFilter] = useState<string[]>(['action', 'social', 'drinking', 'challenge']);

  const standardRules = getStandardRules();
  const premiumRules = getPremiumRules();
  const allRules = getAllRules();

  const visibleRules = () => {
    let rules = [];
    
    if (activeTab === "standard") {
      rules = standardRules;
    } else if (activeTab === "premium") {
      rules = premiumRules;
    } else {
      rules = allRules;
    }

    // Appliquer les filtres
    return rules.filter(rule => 
      difficultyFilter.includes(rule.difficulty) && 
      categoryFilter.includes(rule.category)
    );
  };

  const toggleRuleSelection = (ruleId: string) => {
    if (!isPremium) {
      toast({
        title: "Fonctionnalité Premium",
        description: "La sélection des règles est réservée aux utilisateurs premium.",
        variant: "destructive"
      });
      return;
    }
    
    setSelectedRules(prev => ({
      ...prev,
      [ruleId]: !prev[ruleId]
    }));
  };

  const toggleDifficultyFilter = (difficulty: number) => {
    setDifficultyFilter(prev => 
      prev.includes(difficulty) 
        ? prev.filter(d => d !== difficulty)
        : [...prev, difficulty]
    );
  };

  const toggleCategoryFilter = (category: string) => {
    setCategoryFilter(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="min-h-screen p-4 pt-6 bg-cabeza-dark">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-6">
          <CabezaButton 
            variant="outline" 
            size="small"
            onClick={() => navigate('/home')}
            className="!p-2"
          >
            <ArrowLeft size={20} />
          </CabezaButton>
          <Logo size="medium" />
          <CabezaButton
            variant="outline"
            size="small"
            onClick={() => setShowFilters(!showFilters)}
            className="!p-2"
          >
            <Filter size={20} />
          </CabezaButton>
        </div>
        
        <h1 className="text-2xl font-bold mb-4 text-center text-cabeza-secondary">
          Règles du jeu
        </h1>

        {showFilters && (
          <div className="mb-6 p-4 bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-cabeza-secondary">Filtres</h3>
            
            <div className="mb-3">
              <p className="text-sm font-medium mb-1">Difficulté:</p>
              <div className="flex gap-2">
                {[1, 2, 3].map((diff) => (
                  <button 
                    key={diff}
                    onClick={() => toggleDifficultyFilter(diff)}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      difficultyFilter.includes(diff) 
                        ? 'bg-cabeza-primary text-white' 
                        : 'bg-gray-700 text-gray-300'
                    }`}
                  >
                    {diff === 1 ? 'Facile' : diff === 2 ? 'Moyen' : 'Difficile'}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium mb-1">Catégorie:</p>
              <div className="flex flex-wrap gap-2">
                {['action', 'social', 'drinking', 'challenge'].map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => toggleCategoryFilter(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      categoryFilter.includes(cat) 
                        ? 'bg-cabeza-primary text-white' 
                        : 'bg-gray-700 text-gray-300'
                    }`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <Tabs defaultValue="all" className="w-full mb-6" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="all">Toutes</TabsTrigger>
            <TabsTrigger value="standard">Standard</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            {visibleRules().map(rule => (
              <div key={rule.id} className="relative">
                {rule.isPremium && !isPremium && (
                  <div className="absolute top-4 right-4 z-10">
                    <Lock className="text-cabeza-secondary" size={24} />
                  </div>
                )}
                <div 
                  className={`cursor-pointer ${rule.isPremium && !isPremium ? 'opacity-50' : ''}`}
                  onClick={() => toggleRuleSelection(rule.id)}
                >
                  <Card 
                    rule={rule} 
                    showButtons={false}
                  />
                  {isPremium && (
                    <div className="flex justify-end mt-2">
                      <button 
                        className="flex items-center text-sm text-gray-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleRuleSelection(rule.id);
                        }}
                      >
                        {selectedRules[rule.id] ? 
                          <><CheckSquare size={18} className="mr-1 text-cabeza-secondary" /> Sélectionnée</> : 
                          <><Square size={18} className="mr-1" /> Sélectionner</>
                        }
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="standard" className="space-y-4">
            {visibleRules().map(rule => (
              <div key={rule.id} className="relative">
                <div 
                  className="cursor-pointer"
                  onClick={() => toggleRuleSelection(rule.id)}
                >
                  <Card 
                    rule={rule} 
                    showButtons={false}
                  />
                  {isPremium && (
                    <div className="flex justify-end mt-2">
                      <button 
                        className="flex items-center text-sm text-gray-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleRuleSelection(rule.id);
                        }}
                      >
                        {selectedRules[rule.id] ? 
                          <><CheckSquare size={18} className="mr-1 text-cabeza-secondary" /> Sélectionnée</> : 
                          <><Square size={18} className="mr-1" /> Sélectionner</>
                        }
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="premium" className="space-y-4">
            {!isPremium ? (
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <Lock size={48} className="mx-auto mb-4 text-cabeza-secondary" />
                <h3 className="text-xl font-bold mb-2 text-cabeza-secondary">Contenu Premium</h3>
                <p className="text-gray-300 mb-4">Débloquez des règles exclusives en passant à la version premium!</p>
                <CabezaButton 
                  variant="secondary"
                  onClick={() => navigate('/settings')}
                >
                  Passer à la version Premium
                </CabezaButton>
              </div>
            ) : (
              visibleRules().map(rule => (
                <div key={rule.id} className="cursor-pointer" onClick={() => toggleRuleSelection(rule.id)}>
                  <Card 
                    rule={rule} 
                    showButtons={false}
                  />
                  <div className="flex justify-end mt-2">
                    <button 
                      className="flex items-center text-sm text-gray-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleRuleSelection(rule.id);
                      }}
                    >
                      {selectedRules[rule.id] ? 
                        <><CheckSquare size={18} className="mr-1 text-cabeza-secondary" /> Sélectionnée</> : 
                        <><Square size={18} className="mr-1" /> Sélectionner</>
                      }
                    </button>
                  </div>
                </div>
              ))
            )}
          </TabsContent>
        </Tabs>
        
        {Object.keys(selectedRules).filter(id => selectedRules[id]).length > 0 && (
          <div className="fixed bottom-4 left-0 right-0 flex justify-center">
            <CabezaButton 
              variant="primary"
              onClick={() => {
                toast({
                  title: "Règles sélectionnées",
                  description: `${Object.keys(selectedRules).filter(id => selectedRules[id]).length} règles seront utilisées lors de la prochaine partie.`
                });
              }}
            >
              Sauvegarder la sélection
            </CabezaButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default RulesList;
