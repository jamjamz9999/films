import React from 'react';
import { PortfolioItem } from '../types';
import { YouTubeIcon, VimeoIcon, LinkIcon } from './icons';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AnimatedBlock: React.FC<{children: React.ReactNode, delay?: number, threshold?: number}> = ({ children, delay = 0, threshold = 0.5 }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold });
    return (
        <div ref={ref} className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: `${delay}ms`}}>
          {isVisible && <div className="animate-fadeInUp">{children}</div>}
        </div>
    )
};


const ProjectDetail: React.FC<{project: PortfolioItem, onClose: () => void}> = ({ project, onClose }) => {
  if (!project.details) return null;
  const [galleryRef, isGalleryVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [infoRef, isInfoVisible] = useIntersectionObserver({ threshold: 0.5 });


  const getIconForPlatform = (platform: string) => {
      switch(platform) {
          case 'YouTube': return <YouTubeIcon className="w-6 h-6 mr-2" />;
          case 'Vimeo': return <VimeoIcon className="w-6 h-6 mr-2" />;
          default: return <LinkIcon className="w-6 h-6 mr-2" />;
      }
  }
  
  const InfoItem: React.FC<{label: string, value?: string}> = ({ label, value }) => {
      if (!value) return null;
      return (
          <div>
              <p className="text-sm uppercase tracking-widest text-gray-400">{label}</p>
              <p className="text-lg font-semibold">{value}</p>
          </div>
      )
  };

  return (
    <section className="pt-32 pb-20 md:pb-32 bg-dark-primary">
      <div className="container mx-auto px-6">
        <button 
          onClick={onClose}
          className="inline-flex items-center text-sm font-medium uppercase tracking-wider text-light-gray transition-colors duration-300 hover:text-ferrari-red mb-8 group"
        >
          <span className="transform transition-transform duration-300 group-hover:-translate-x-1">&larr;</span>
          <span className="ml-2">Back to Portfolio</span>
        </button>

        <AnimatedBlock>
            <h1 className="text-4xl md:text-6xl font-black uppercase">{project.title}</h1>
            <p className="text-lg text-ferrari-red mt-1">{project.category}</p>
        </AnimatedBlock>

        <div ref={infoRef} className="grid grid-cols-2 md:grid-cols-4 items-center gap-8 my-8 text-light-gray border-y border-gray-700 py-4">
            {isInfoVisible && (
              <>
                <div className="animate-fadeInUp" style={{ animationDelay: '200ms' }}><InfoItem label="Client" value={project.details.client} /></div>
                <div className="animate-fadeInUp" style={{ animationDelay: '300ms' }}><InfoItem label="Director" value={project.details.director} /></div>
                <div className="animate-fadeInUp" style={{ animationDelay: '400ms' }}><InfoItem label="Cinematographer" value={project.details.cinematographer} /></div>
                <div className="animate-fadeInUp" style={{ animationDelay: '500ms' }}><InfoItem label="Date" value={project.details.date} /></div>
              </>
            )}
        </div>
        
        <AnimatedBlock delay={400}>
            <img 
              src={project.details.heroImageUrl} 
              alt={`${project.title} hero image`} 
              className="w-full h-auto object-cover mb-12 shadow-lg shadow-black/30"
            />
        </AnimatedBlock>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <AnimatedBlock>
                    <h2 className="text-3xl font-bold uppercase mb-4">Project Overview</h2>
                    <div className="w-24 h-1 bg-ferrari-red mt-2 mb-6"></div>
                    <p className="text-lg text-light-gray leading-relaxed">{project.details.description}</p>
                </AnimatedBlock>
            </div>
            <div className="lg:col-span-1">
                 {project.details.links && project.details.links.length > 0 && (
                    <div className="mb-10">
                         <AnimatedBlock>
                            <h3 className="text-2xl font-bold uppercase mb-4">View Project</h3>
                            <div className="flex flex-col items-start gap-4">
                                {project.details.links.map((link, index) => (
                                    <a 
                                      key={index} 
                                      href={link.url} 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className="inline-flex items-center justify-center bg-dark-secondary px-6 py-3 text-light-gray font-bold uppercase tracking-wider hover:bg-ferrari-red hover:text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                                    >
                                        {getIconForPlatform(link.platform)}
                                        <span>View on {link.platform}</span>
                                    </a>
                                ))}
                            </div>
                        </AnimatedBlock>
                    </div>
                )}
                 {project.details.affiliations && project.details.affiliations.length > 0 && (
                    <div>
                         <AnimatedBlock>
                            <h3 className="text-2xl font-bold uppercase mb-4">Affiliations</h3>
                            <ul className="list-disc list-inside text-light-gray space-y-2">
                               {project.details.affiliations.map((aff, index) => <li key={index}>{aff}</li>)}
                            </ul>
                        </AnimatedBlock>
                    </div>
                )}
            </div>
        </div>


        {project.details.galleryUrls && project.details.galleryUrls.length > 0 && (
            <div className="mt-20" ref={galleryRef}>
                {isGalleryVisible && (
                    <>
                    <h3 className="text-center text-3xl font-bold uppercase mb-10 animate-fadeInUp">Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {project.details.galleryUrls.map((url, index) => (
                            <div key={index} className="aspect-video overflow-hidden animate-fadeInUp" style={{animationDelay: `${index * 150}ms`}}>
                                <img 
                                    src={url} 
                                    alt={`Gallery image ${index + 1} for ${project.title}`}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                    </>
                )}
            </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
