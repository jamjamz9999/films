import React, { useState, useEffect } from 'react';
import { LOGO_DATA_URL, megaMenuContent } from '../constants';
import { Page } from '../App';
import { MegaMenuContent, MegaMenuLink } from '../types';

interface HeaderProps {
    setPage: (page: Page) => void;
    onProjectSelect: (id: number) => void;
}

const NavButton: React.FC<{
    children: React.ReactNode;
    onMouseEnter?: () => void;
    onClick?: () => void;
}> = ({ children, onMouseEnter, onClick }) => (
    <button 
        onMouseEnter={onMouseEnter} 
        onClick={onClick} 
        className={`text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md bg-gradient-to-br from-ferrari-red to-red-800 text-white hover:brightness-110 animate-button-breathe`}
    >
        {children}
    </button>
);

const MegaMenu: React.FC<{
    content: MegaMenuContent[keyof MegaMenuContent];
    isOpen: boolean;
    setPage: (page: Page) => void;
    onProjectSelect: (id: number) => void;
}> = ({ content, isOpen, setPage, onProjectSelect }) => {
    
    const handleLinkClick = (link: MegaMenuLink) => {
        if (link.projectId) {
            onProjectSelect(link.projectId);
        } else {
            setPage(link.href as Page);
        }
    };

    return (
        <div className={`absolute top-full left-0 right-0 bg-black/80 backdrop-blur-xl shadow-lg transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100 py-12' : 'max-h-0 opacity-0'}`}>
             <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent shadow-inner"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {content.map((category) => (
                        <div key={category.title}>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">{category.title}</h3>
                            <ul>
                                {category.links.map(link => (
                                    <li key={link.title} className="mb-3">
                                        <button onClick={() => handleLinkClick(link)} className="text-left group">
                                            <p className="font-bold text-white group-hover:text-ferrari-red transition-colors duration-300">{link.title}</p>
                                            <p className="text-sm text-gray-400">{link.description}</p>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


const Header: React.FC<HeaderProps> = ({ setPage, onProjectSelect }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'portfolio' | 'about' | null>(null);
  let hoverTimeout: ReturnType<typeof setTimeout>;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu: 'portfolio' | 'about' | null) => {
    clearTimeout(hoverTimeout);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
     hoverTimeout = setTimeout(() => {
        setActiveMenu(null);
    }, 200);
  };
  
  return (
    <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-black/70 backdrop-blur-xl shadow-lg shadow-black/40' : 'bg-transparent'}`}
        onMouseLeave={handleMouseLeave}
    >
      <div className={`absolute inset-0 animate-gradient -z-10 opacity-50`}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent shadow-inner-lg"></div>
      <div className="container mx-auto px-6 relative">
        <div className="flex justify-between items-center h-24">
            <button onClick={() => setPage('home')} className="h-12 flex items-center z-10">
               <img src={LOGO_DATA_URL} alt="Nick Asenjo Films Logo" className="h-full w-auto animate-breathe" />
            </button>
            <nav className="hidden md:flex items-center gap-4">
                <NavButton onClick={() => setPage('home')}>Home</NavButton>
                <NavButton onMouseEnter={() => handleMouseEnter('portfolio')} onClick={() => setPage('portfolio')}>Portfolio</NavButton>
                <NavButton onMouseEnter={() => handleMouseEnter('about')} onClick={() => setPage('about')}>About Me</NavButton>
            </nav>
            <div className="flex items-center gap-6 z-10">
                <NavButton onClick={() => setPage('contact')}>
                    Book Me Now
                </NavButton>
            </div>
        </div>
      </div>
      <div onMouseEnter={() => handleMouseEnter(activeMenu)} onMouseLeave={handleMouseLeave}>
        <MegaMenu content={megaMenuContent.portfolio} isOpen={activeMenu === 'portfolio'} setPage={setPage} onProjectSelect={onProjectSelect} />
        <MegaMenu content={megaMenuContent.about} isOpen={activeMenu === 'about'} setPage={setPage} onProjectSelect={onProjectSelect} />
      </div>
    </header>
  );
};

export default Header;