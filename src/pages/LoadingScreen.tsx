
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';

const LoadingScreen: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cabeza-dark">
      <div className="animate-fade-in">
        <Logo size="large" className="mb-8" />
        
        <div className="w-32 h-32 relative mx-auto">
          <div className="w-full h-full absolute animate-pulse-strong">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#FF4136"
                strokeWidth="4"
                strokeDasharray="251.2"
                strokeDashoffset="0"
                className="animate-[spin_2s_linear_infinite]"
              />
            </svg>
          </div>
          
          {/* Cabeza character - simplified stick figure */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-16 h-16">
              <div className="w-8 h-8 rounded-full bg-cabeza-secondary absolute top-0 left-4"></div>
              <div className="w-1 h-14 bg-cabeza-secondary absolute top-8 left-7.5"></div>
              <div className="w-12 h-1 bg-cabeza-secondary absolute top-12 left-2"></div>
              <div className="w-1 h-6 bg-cabeza-secondary absolute top-22 left-5 rotate-20"></div>
              <div className="w-1 h-6 bg-cabeza-secondary absolute top-22 right-5 -rotate-20"></div>
            </div>
          </div>
        </div>
        
        <p className="text-gray-400 mt-8 text-center animate-pulse">Chargement en cours...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
