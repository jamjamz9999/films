import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-r from-ferrari-red to-dark-primary">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold animate-fadeInUp">Welcome to Nick Asenjo Films</h1>
        <p className="mt-4 text-lg animate-fadeInUp">Cinematic Storytelling at its Finest</p>
        <a href="#portfolio" className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-dark-primary bg-gold-cream rounded hover:bg-light-gray transition duration-300 animate-button-breathe">
          View Portfolio
        </a>
      </div>
    </section>
  );
};

export default Hero;