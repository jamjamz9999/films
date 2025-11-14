
import React, { useRef, useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { PlayIcon } from './icons';

const HomepageVideoSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section ref={ref} className="bg-dark-primary py-20 md:py-32">
      <div className="container mx-auto px-6">
        {isVisible && (
          <>
            <div className="relative aspect-video w-full overflow-hidden shadow-2xl shadow-black/50 animate-fadeInUp">
              {!isPlaying && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20 flex flex-col items-center justify-center text-white text-center p-8 transition-opacity duration-500">
                   <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider">
                    Our <span className="text-ferrari-red">Showreel</span>
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg text-light-gray">
                    A glimpse into the diverse range of stories we've brought to life.
                  </p>
                  <button onClick={handlePlay} className="mt-8 text-white hover:text-ferrari-red transition-colors duration-300">
                    <PlayIcon className="w-20 h-20" />
                  </button>
                </div>
              )}
              <video
                ref={videoRef}
                loop
                muted
                playsInline
                controls={isPlaying}
                className="absolute z-10 w-full h-full object-cover"
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-professional-camera-lense-shot-22271-large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
               {/* Fallback poster image */}
              {!isPlaying && (
                <img 
                    src="https://images.pexels.com/photos/22271/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Showreel poster" 
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default HomepageVideoSection;