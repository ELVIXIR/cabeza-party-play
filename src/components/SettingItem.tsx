
import React from 'react';
import { cn } from '@/lib/utils';

interface SettingItemProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

const SettingItem: React.FC<SettingItemProps> = ({
  icon,
  title,
  description,
  children,
  className
}) => {
  return (
    <div className={cn("flex items-center justify-between p-4 bg-gray-800 rounded-lg", className)}>
      <div className="flex items-center gap-3">
        <div className="text-cabeza-primary">
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          {description && <p className="text-gray-400 text-sm">{description}</p>}
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default SettingItem;
