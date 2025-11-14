
import React from 'react';
import { portfolioItems } from '../constants';
import { PortfolioItem } from '../types';
import { ChevronRightIcon } from './icons';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface MyProjectsSectionProps {
  onProjectSelect: (project: PortfolioItem) => void;
}

const MyProjectsSection: React.FC<MyProjectsSectionProps> = ({ onProjectSelect }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const projectItems = portfolioItems.filter(item => item.type === 'project');

  return (
    <section id="my-projects" className="py-20 md:py-32 bg-dark-primary">
      <div className="container mx-auto px-6" ref={ref}>
        {isVisible && (
          <>
            <h2 className="text-4xl md:text-5xl font-black text-center uppercase animate-fadeInUp">
              My <span className="text-ferrari-red">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-ferrari-red mx-auto mt-4 mb-16 animate-fadeInUp" style={{ animationDelay: '200ms' }}></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative bg-dark-secondary overflow-hidden cursor-pointer animate-fadeInUp"
                  style={{ animationDelay: `${400 + index * 150}ms` }}
                  onClick={() => onProjectSelect(item)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-ferrari-red uppercase font-bold">{item.category}</p>
                    <h3 className="text-xl font-bold uppercase text-white mt-1">{item.title}</h3>
                    <div className="inline-flex items-center text-sm font-bold uppercase tracking-widest mt-4 text-gold-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span>View Project</span>
                        <ChevronRightIcon className="w-4 h-4 ml-2" />
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

export default MyProjectsSection;
