import React from 'react';
import { ChevronRightIcon } from './icons';

const DiscoverButton: React.FC<{ onClick: () => void, children: React.ReactNode }> = ({ onClick, children }) => (
  <button 
    onClick={onClick} 
    className="group inline-flex items-center justify-center text-sm font-bold uppercase tracking-widest text-white mt-8"
  >
    <span>{children}</span>
    <div className="ml-2 border border-white/50 rounded-full p-2 group-hover:bg-white/10 transition-all duration-300 transform group-hover:translate-x-1">
      <ChevronRightIcon className="w-4 h-4" />
    </div>
  </button>
);

const AnimatedHeading: React.FC<{ text: string; className?: string; baseDelay?: number; }> = ({ text, className, baseDelay = 0 }) => (
    <span className={className} aria-label={text}>
        {text.split('').map((char, index) => (
            <span
                key={index}
                className="animate-letter-bounce"
                style={{ animationDelay: `${baseDelay + index * 50}ms` }}
            >
                {char === ' ' ? '\u00A0' : char}
            </span>
        ))}
    </span>
);


const Hero: React.FC = () => {
  const scrollToWork = () => {
    document.getElementById('my-projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="hero" className="h-screen w-full relative flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-ferrari-red/30 to-black/60"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none transform scale-110"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-car-driving-on-a-road-in-the-middle-of-the-desert-41527-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="z-20 relative px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider">
            <AnimatedHeading text="Cinematic" baseDelay={200} />
        </h1>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider text-ferrari-red mt-1">
            <AnimatedHeading text="Storytelling" baseDelay={600} />
        </h2>
         <p 
            className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-light-gray animate-fadeInUp"
            style={{ animationDelay: '1200ms', opacity: 0 }}
        >
          We craft compelling visual narratives that captivate and inspire.
        </p>
        <div 
            className="animate-fadeInUp"
            style={{ animationDelay: '1400ms', opacity: 0 }}
        >
            <DiscoverButton onClick={scrollToWork}>
              Discover Our Work
            </DiscoverButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;