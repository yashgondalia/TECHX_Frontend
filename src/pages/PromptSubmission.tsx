
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import UniversityLogo from '@/components/UniversityLogo';
import Button from '@/components/Button';
import { toast } from 'sonner';
import { ChevronDown, Loader } from 'lucide-react';
import { cn } from '@/lib/utils';

const PromptSubmission = () => {
  const navigate = useNavigate();
  const [inputPrompt, setInputPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [selectedModel, setSelectedModel] = useState('SDXL');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const models = ['SDXL', 'Stable Diffusion', 'Midjourney', 'DALL-E'];

  const handleGenerate = () => {
    if (!inputPrompt.trim()) {
      toast.error('Please enter an input prompt');
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate image generation with a timeout
    setTimeout(() => {
      // Use a placeholder image for demonstration
      const randomImage = [
        '/lovable-uploads/70818554-e19a-43cd-b108-426171b20fb1.png',
        '/lovable-uploads/709cb5ff-dd41-4879-8bf5-f7ba56ff2760.png',
        '/lovable-uploads/77abdc1e-36de-402b-b241-c2a4b3700d5a.png',
        '/lovable-uploads/ff187786-a4b2-4108-ad98-ac5a38e6c4b2.png'
      ][Math.floor(Math.random() * 4)];
      
      setGeneratedImageUrl(randomImage);
      setIsGenerating(false);
      toast.success('Image generated successfully!');
    }, 2000);
  };

  const handleSubmit = () => {
    if (!selectedImage) {
      toast.error('Please select an image to submit');
      return;
    }
    
    toast.success('Submission successful!');
    // In a real app, you would send the selected image to a server
    console.log('Submitted image:', selectedImage);
  };

  const selectImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    toast.info('Image selected for submission');
  };

  return (
    <div className="min-h-screen flex flex-col px-4 py-8 relative overflow-hidden">
      {/* Header */}
      <header className="w-full flex items-center justify-between mb-8">
        <Logo />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-center text-white tracking-wider animate-fade-in">
          PROMPT ENGINEERING <span className="text-neon-cyan">2.0</span>
        </h1>
        <UniversityLogo />
      </header>

      {/* Prompt inputs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="w-full">
          <label className="block text-white text-sm font-medium mb-2">Input Prompt</label>
          <div className="relative">
            <textarea
              className="neon-input min-h-[120px] resize-none"
              placeholder="Enter your prompt here"
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
            ></textarea>
          </div>
        </div>
        
        <div className="w-full">
          <label className="block text-white text-sm font-medium mb-2">Negative Prompt</label>
          <div className="relative">
            <textarea
              className="neon-input min-h-[120px] resize-none"
              placeholder="Enter your prompt here"
              value={negativePrompt}
              onChange={(e) => setNegativePrompt(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>

      {/* Generate button and model selector */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="flex-1"
        >
          {isGenerating ? (
            <>
              <Loader className="animate-spin mr-2 h-5 w-5" />
              GENERATING...
            </>
          ) : (
            'GENERATE'
          )}
        </Button>
        
        <div className="relative">
          <Button
            variant="secondary"
            className="w-full sm:w-60 flex items-center justify-between"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{selectedModel}</span>
            <ChevronDown className={cn("h-5 w-5 transition-transform", isDropdownOpen && "rotate-180")} />
          </Button>
          
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-card rounded-lg border border-neon-purple/30 shadow-lg overflow-hidden">
              {models.map((model) => (
                <button
                  key={model}
                  className="w-full text-left px-4 py-2 hover:bg-neon-purple/10 transition-colors"
                  onClick={() => {
                    setSelectedModel(model);
                    setIsDropdownOpen(false);
                  }}
                >
                  {model}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Image display sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="neon-border rounded-xl overflow-hidden">
          <div className="bg-black/40 p-4 border-b border-neon-cyan/30">
            <h3 className="text-xl font-semibold text-white">Generations</h3>
          </div>
          <div className="p-6 min-h-[300px] bg-black/20 flex items-center justify-center">
            {generatedImageUrl ? (
              <div 
                className="relative cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => selectImage(generatedImageUrl)}
              >
                <img 
                  src={generatedImageUrl} 
                  alt="Generated" 
                  className="max-h-[400px] max-w-full rounded-lg object-contain"
                />
                {selectedImage === generatedImageUrl && (
                  <div className="absolute inset-0 border-4 border-neon-cyan rounded-lg"></div>
                )}
              </div>
            ) : (
              <p className="text-white/50 text-center">
                {isGenerating ? 
                  'Generating image...' : 
                  'Generated images will appear here'
                }
              </p>
            )}
          </div>
        </div>
        
        <div className="neon-border rounded-xl overflow-hidden">
          <div className="bg-black/40 p-4 border-b border-neon-cyan/30">
            <h3 className="text-xl font-semibold text-white">Preview</h3>
          </div>
          <div className="p-6 min-h-[300px] bg-black/20 flex items-center justify-center">
            {selectedImage ? (
              <img 
                src={selectedImage} 
                alt="Selected" 
                className="max-h-[400px] max-w-full rounded-lg object-contain"
              />
            ) : (
              <p className="text-white/50 text-center">
                Selected image will appear here
              </p>
            )}
          </div>
        </div>
      </div>
      
      {/* Submit button */}
      <div className="flex justify-end">
        <Button 
          onClick={handleSubmit} 
          disabled={!selectedImage}
          size="lg"
        >
          SUBMIT
        </Button>
      </div>

      {/* Decorative elements */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
    </div>
  );
};

export default PromptSubmission;
