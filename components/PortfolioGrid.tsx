import React from 'react';
import { portfolioItems } from '../constants';
import { PortfolioItem } from '../types';
import { PlayIcon } from './icons';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface PortfolioGridProps {
  onVideoSelect: (video: PortfolioItem) => void;
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onVideoSelect }) => {
  const featuredItems = portfolioItems.slice(0, 3); // Show first 3 items as featured
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });


  return (
    <section id="featured-work" className="py-20 md:py-32 bg-dark-secondary">
      <div className="container mx-auto px-6" ref={ref}>
        {isVisible && (
            <>
                <h2 className="text-4xl md:text-5xl font-black text-center uppercase animate-fadeInUp">
                  Featured <span className="text-ferrari-red">Work</span>
                </h2>
                <div className="w-24 h-1 bg-ferrari-red mx-auto mt-4 mb-16 animate-fadeInUp" style={{animationDelay: '200ms'}}></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredItems.map((item, index) => (
                    <div
                      key={item.id}
                      className="group relative aspect-video overflow-hidden cursor-pointer animate-fadeInUp"
                      style={{animationDelay: `${400 + index * 150}ms`}}
                      onClick={() => onVideoSelect(item)}
                    >
                      <img
                        src={item.thumbnailUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                        <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 translate-y-4">
                          <PlayIcon className="w-16 h-16 text-white mb-2 mx-auto" />
                          <h3 className="text-xl font-bold uppercase">{item.title}</h3>
                          <p className="text-sm text-light-gray">{item.category}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </>
        )}
      </div>
    </section>
  );
};

export default PortfolioGrid;