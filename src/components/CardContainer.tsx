
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardContainerProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const CardContainer: React.FC<CardContainerProps> = ({ title, children, className }) => {
  return (
    <div className={cn("glass-card rounded-3xl p-8 animate-fade-in", className)}>
      <h2 className="text-3xl font-bold text-center mb-8 neon-glow-text">{title}</h2>
      <div className="text-white">
        {children}
      </div>
    </div>
  );
};

export default CardContainer;
