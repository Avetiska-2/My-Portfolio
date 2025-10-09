import React from 'react';
import { Button } from '../ui/button';
import { ArrowDown, Github, Mail } from 'lucide-react';

const Hero = () => {
  console.log('Hero component rendered');

  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://cdn-ai.onspace.ai/onspace/project/image/KSBRv2UpG9zk2xjLhgotFs/ChatGPT_Image_30_сент._2025_г.,_21_40_24.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container-max section-padding text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">Avetis</span>
            <span className="block text-hw-red-400 drop-shadow-lg" style={{ textShadow: '0 0 20px rgba(248, 113, 113, 0.5), 0 2px 4px rgba(0, 0, 0, 0.8)' }}>
              Boiadzhian
            </span>
          </h1>

          {/* Grade Level */}
          <div className="inline-block bg-hw-red-700/20 backdrop-blur-sm border border-hw-red-400/30 rounded-full px-6 py-2 mb-8">
            <span className="text-hw-red-200 font-medium">High School Junior • 3.7+ GPA</span>
          </div>

          {/* Main Tagline - Enhanced */}
          <p className="text-3xl md:text-4xl mb-6 font-semibold text-white drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)' }}>
            Future Harvard-Westlake Scholar
          </p>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
            Aspiring Stanford Engineer • Robotics Enthusiast • Unity Developer
          </p>

          {/* Bio - Lighter text */}
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed" 
             style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Born in Armenia, raised 9 years in Russia, now pursuing excellence in Los Angeles. 
            Currently at John Burroughs High School, building innovative projects 
            and preparing for the next chapter at Harvard-Westlake.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button type="button" className="btn" onClick={handleScrollToAbout}>
              Explore My Journey
            </button>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-hw-red-700 shadow-lg"
                onClick={() => window.open('mailto:sn240803@gmail.com', '_blank')}
              >
                <Mail size={20} className="mr-2" />
                Contact Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-hw-red-700 shadow-lg"
                onClick={() => window.open('https://github.com/Avetiska-2', '_blank')}
              >
                <Github size={20} className="mr-2" />
                GitHub
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={handleScrollToAbout}
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;