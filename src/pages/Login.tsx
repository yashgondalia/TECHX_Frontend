
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import UniversityLogo from '@/components/UniversityLogo';
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import AuthCard from '@/components/AuthCard';
import ImageContainer from '@/components/ImageContainer';
import { toast } from 'sonner';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    mobileNumber: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.username || !formData.mobileNumber) {
      toast.error('Please fill all fields');
      return;
    }
    
    // In a real application, you would authenticate against a server
    console.log('Login attempted:', formData);
    
    // Simulate successful login
    toast.success('Login successful!');
    
    // Navigate to rules page
    setTimeout(() => navigate('/rules'), 1000);
  };

  // Sample AI-generated images for the decorative part
  const images = [
    '/lovable-uploads/70818554-e19a-43cd-b108-426171b20fb1.png',
    '/lovable-uploads/709cb5ff-dd41-4879-8bf5-f7ba56ff2760.png',
    '/lovable-uploads/77abdc1e-36de-402b-b241-c2a4b3700d5a.png'
  ];

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
      <AuthCard>
        <div className="flex-1 pr-0 lg:pr-10">
          <div className="text-left mb-8">
            <h2 className="text-4xl font-bold mb-2 neon-glow-text">Login</h2>
            <p className="text-gray-300 text-sm">Login to Enter the Event</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-1">
            <InputField
              label="Username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />
            
            <InputField
              label="Mobile No."
              name="mobileNumber"
              type="tel"
              placeholder="Enter your mobile number"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            
            <Button type="submit" className="w-full mt-8">
              Login
            </Button>
            
            <div className="text-center mt-4 text-gray-300">
              Not Registered? <Link to="/" className="text-neon-cyan hover:underline">Sign Up</Link>
            </div>
          </form>
        </div>
        
        <div className="flex-1 mt-10 lg:mt-0 relative">
          <div className="relative h-full min-h-[300px] lg:min-h-[400px] grid grid-cols-5 grid-rows-3 gap-4">
            {images.map((img, i) => (
              <ImageContainer 
                key={i} 
                imageUrl={img} 
                alt={`AI image ${i+1}`} 
                index={i}
                className={i === 0 ? "col-span-3 row-span-3" : "col-span-2 row-span-1"} 
              />
            ))}
          </div>
        </div>
      </AuthCard>

      {/* Decorative elements */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
    </div>
  );
};

export default Login;
