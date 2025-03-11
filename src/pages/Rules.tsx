
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import UniversityLogo from '@/components/UniversityLogo';
import Button from '@/components/Button';
import CardContainer from '@/components/CardContainer';

const Rules = () => {
  const navigate = useNavigate();
  
  const handleContinue = () => {
    navigate('/prompt-submission');
  };

  return (
    <div className="min-h-screen flex flex-col px-4 py-8 relative overflow-hidden">
      {/* Header */}
      <header className="w-full flex items-center justify-between mb-12">
        <Logo />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-center text-white tracking-wider animate-fade-in">
          PROMPT ENGINEERING <span className="text-neon-cyan">2.0</span>
        </h1>
        <UniversityLogo />
      </header>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-8 mb-10">
        <CardContainer title="Rules" className="flex-1">
          <div className="space-y-6">
            <div className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="font-semibold text-xl mb-2 flex items-center">
                <span className="inline-block w-6 h-6 mr-2 text-neon-yellow">🚀</span> 
                Round 1: Eliminators
              </h3>
              <p className="text-white/80">
                In this round, participants will be tasked with writing prompts or descriptions of
                scenes, characters or scenarios that will be based on the given theme or the
                given specific image. These prompts serve as inspiration for text to image
                generation and hence they must generate an image close enough to the given
                theme/image to qualify for the round. Artwork must be original and created
                specifically using the provided tool.
              </p>
            </div>
            
            <div className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-semibold text-xl mb-2 flex items-center">
                <span className="inline-block w-6 h-6 mr-2 text-neon-yellow">🏆</span> 
                Round 2: Finals
              </h3>
              <p className="text-white/80">
                In this round, participants qualified for the second round are supposed to again
                generate images based on the given theme or specified image, which will be
                different and more complex than before, thus increasing competition.
              </p>
            </div>
          </div>
        </CardContainer>
        
        <CardContainer title="Scoring Criteria" className="flex-1">
          <div className="space-y-6">
            <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-white/80 mb-4 flex items-start">
                <span className="inline-block w-6 h-6 mr-2 text-neon-yellow shrink-0">🌟</span>
                <span><strong>Creativity and Originality:</strong> The uniqueness and innovation demonstrated in the
                showcase.</span>
              </p>
              
              <p className="text-white/80 mb-4 flex items-start">
                <span className="inline-block w-6 h-6 mr-2 text-neon-yellow shrink-0">🎨</span>
                <span><strong>Aesthetic Appeal:</strong> The visual appeal and artistic quality of the final result.</span>
              </p>
              
              <p className="text-white/80 mb-4 flex items-start">
                <span className="inline-block w-6 h-6 mr-2 text-neon-yellow shrink-0">⚙️</span>
                <span><strong>Technical Skill:</strong> The proficiency in utilizing the AI tools to achieve the desired
                transformation.</span>
              </p>
              
              <p className="text-white/80 flex items-start">
                <span className="inline-block w-6 h-6 mr-2 text-neon-yellow shrink-0">📝</span>
                <span>The decision taken by coordinators will be final.</span>
              </p>
            </div>
          </div>
        </CardContainer>
      </div>
      
      <div className="flex justify-end">
        <Button onClick={handleContinue} size="lg">
          Continue
        </Button>
      </div>

      {/* Decorative elements */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
    </div>
  );
};

export default Rules;
