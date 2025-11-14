import React from 'react';
import { ChevronRightIcon } from './icons';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface SplitSectionProps {
  leftTitle: string;
  leftSubtitle: string;
  leftBgUrl: string;
  onLeftClick: () => void;
  rightTitle: string;
  rightSubtitle: string;
  rightBgUrl: string;
  onRightClick: () => void;
}

const SplitCard: React.FC<{
    title: string;
    subtitle: string;
    bgUrl: string;
    onClick: () => void;
}> = ({ title, subtitle, bgUrl, onClick }) => {
    return (
        <div 
            onClick={onClick}
            className="group relative h-[70vh] md:h-screen w-full flex items-end justify-start p-8 md:p-12 text-white overflow-hidden cursor-pointer"
        >
            <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(${bgUrl})`}}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="relative z-10">
                <p className="text-sm font-bold uppercase tracking-widest">{subtitle}</p>
                <h3 className="text-3xl md:text-5xl font-black uppercase mt-1">{title}</h3>
                <div className="inline-flex items-center text-sm font-bold uppercase tracking-widest mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <span>Discover More</span>
                     <div className="ml-2 border border-white/50 rounded-full p-2">
                        <ChevronRightIcon className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </div>
    )
};


const SplitSection: React.FC<SplitSectionProps> = (props) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section ref={ref} className="w-full flex flex-col md:flex-row">
        {isVisible && (
            <>
                <div className="md:w-1/2 animate-fadeInUp">
                    <SplitCard 
                        title={props.leftTitle}
                        subtitle={props.leftSubtitle}
                        bgUrl={props.leftBgUrl}
                        onClick={props.onLeftClick}
                    />
                </div>
                <div className="md:w-1/2 animate-fadeInUp" style={{animationDelay: '200ms'}}>
                    <SplitCard 
                        title={props.rightTitle}
                        subtitle={props.rightSubtitle}
                        bgUrl={props.rightBgUrl}
                        onClick={props.onRightClick}
                    />
                </div>
            </>
        )}
    </section>
  );
};

export default SplitSection;
