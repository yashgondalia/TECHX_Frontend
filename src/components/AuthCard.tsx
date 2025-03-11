
import React, { ReactNode } from 'react';

interface AuthCardProps {
  children: ReactNode;
}

const AuthCard: React.FC<AuthCardProps> = ({ children }) => {
  return (
    <div className="glass-card rounded-3xl p-8 md:p-10 w-full max-w-7xl mx-auto animate-fade-in border-neon-blue/20">
      <div className="flex flex-col lg:flex-row">
        {children}
      </div>
    </div>
  );
};

export default AuthCard;
