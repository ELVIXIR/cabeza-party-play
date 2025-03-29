
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';

const GameTransition: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/game-start');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cabeza-dark">
      <div className="animate-fade-in text-center">
        <Logo size="large" className="mb-12" />
        
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-cabeza-primary opacity-25"></div>
          <div className="absolute inset-0 rounded-full border-4 border-cabeza-primary border-t-transparent animate-[spin_1s_linear_infinite]"></div>
        </div>
        
        <p className="text-xl text-cabeza-secondary font-bold animate-pulse">
          Préparation de la partie...
        </p>
      </div>
    </div>
  );
};

export default GameTransition;
