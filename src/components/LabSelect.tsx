
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface LabSelectProps {
  onChange: (value: string) => void;
}

const LabSelect: React.FC<LabSelectProps> = ({ onChange }) => {
  const [selectedLab, setSelectedLab] = useState<string>('LAB 1');
  
  const handleLabChange = (lab: string) => {
    setSelectedLab(lab);
    onChange(lab);
  };
  
  return (
    <div className="mb-5 w-full">
      <label className="block text-white text-sm font-medium mb-2">Select LAB</label>
      <div className="flex space-x-4">
        {['LAB 1', 'LAB 2'].map((lab) => (
          <button
            key={lab}
            onClick={() => handleLabChange(lab)}
            className={cn(
              "flex-1 py-3 px-4 rounded-lg transition-all duration-300 border-2",
              selectedLab === lab 
                ? "border-neon-cyan bg-neon-cyan/10 text-white animate-pulse-border" 
                : "border-white/20 bg-muted text-white/70 hover:border-white/40"
            )}
          >
            {lab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LabSelect;
