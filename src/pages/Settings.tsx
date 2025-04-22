
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '@/context/GameContext';
import Logo from '@/components/Logo';
import HelixirButton from '@/components/HelixirButton';
import SettingItem from '@/components/SettingItem';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft, Volume2, VolumeX, Globe, Shield, Info, Crown } from 'lucide-react';

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const { 
    soundEnabled, 
    setSoundEnabled, 
    language, 
    setLanguage,
    isPremium,
    setIsPremium
  } = useGame();
  
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
            <ArrowLeft size={20} />
          </HelixirButton>
          <Logo size="medium" />
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>
        
        <h1 className="text-2xl font-bold mb-6 text-center text-cabeza-secondary">
          Réglages
        </h1>
        
        <div className="space-y-4">
          <SettingItem 
            icon={soundEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
            title="Effets sonores"
            description="Activer ou désactiver les sons"
          >
            <Switch 
              checked={soundEnabled} 
              onCheckedChange={setSoundEnabled}
            />
          </SettingItem>
          
          <SettingItem 
            icon={<Globe size={24} />}
            title="Langue"
            description="Choisir la langue de l'application"
          >
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-700 border border-gray-600 rounded-md p-2"
            >
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
          </SettingItem>
          
          <SettingItem 
            icon={<Shield size={24} />}
            title="Confidentialité"
            description="Gérer vos données personnelles"
          >
            <HelixirButton variant="outline" size="small">
              Gérer
            </HelixirButton>
          </SettingItem>
          
          <SettingItem 
            icon={<Info size={24} />}
            title="Contacts"
            description="Nos réseaux sociaux"
          >
            <HelixirButton variant="outline" size="small">
              Voir
            </HelixirButton>
          </SettingItem>
          
          <SettingItem 
            icon={<Crown size={24} />}
            title="Version Premium"
            description="Débloquer toutes les fonctionnalités"
            className="bg-gradient-to-r from-gray-800 to-gray-700 border border-cabeza-secondary"
          >
            <Switch 
              checked={isPremium} 
              onCheckedChange={setIsPremium}
            />
          </SettingItem>
        </div>
      </div>
    </div>
  );
};

export default Settings;
