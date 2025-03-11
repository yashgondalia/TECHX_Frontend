
import React from 'react';
import { cn } from '@/lib/utils';

interface ImageContainerProps {
  imageUrl: string;
  alt: string;
  className?: string;
  index: number;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ 
  imageUrl, 
  alt, 
  className,
  index
}) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-2xl animate-float", 
        index === 0 && "animation-delay-0",
        index === 1 && "animation-delay-[0.5s]",
        index === 2 && "animation-delay-[1s]",
        className
      )}
      style={{
        animationDelay: `${index * 2}s`,
        boxShadow: '0 0 25px rgba(11, 252, 255, 0.3)'
      }}
    >
      <img 
        src={imageUrl} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/30 to-transparent pointer-events-none" />
    </div>
  );
};

export default ImageContainer;
