
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="relative w-12 h-12 animate-glow">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path 
            d="M20,50 L50,20 L80,50 L50,80 Z M35,50 L50,35 L65,50 L50,65 Z" 
            fill="none" 
            stroke="url(#neon-gradient)" 
            strokeWidth="4"
          />
          <defs>
            <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0BFCFF" />
              <stop offset="50%" stopColor="#9D4EDD" />
              <stop offset="100%" stopColor="#FF2CF0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </Link>
  );
};

export default Logo;
