
import React from 'react';

const UniversityLogo: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-full p-2 w-14 h-14 flex items-center justify-center">
        <span className="text-yellow-500 font-bold text-2xl">GU</span>
      </div>
      <div className="text-white text-xs font-semibold mt-1">
        <p>GANDHINAGAR</p>
        <p className="text-[10px]">UNIVERSITY</p>
      </div>
    </div>
  );
};

export default UniversityLogo;
