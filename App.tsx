
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import ProjectDetail from './components/ProjectDetail';
import { PortfolioItem } from './types';
import { portfolioItems } from './constants';
import AllProjectsGrid from './components/AllProjectsGrid';
import SplitSection from './components/SplitSection';
import HomepageVideoSection from './components/HomepageVideoSection';
import MyProjectsSection from './components/MyProjectsSection';

export type Page = 'home' | 'portfolio' | 'about' | 'contact';

function App() {
  const [page, setPage] = useState<Page>('home');
  const [displayPage, setDisplayPage] = useState<Page>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    if (page !== displayPage) {
      setIsTransitioning(true);
      const timeoutId = setTimeout(() => {
        setDisplayPage(page);
        setIsTransitioning(false);
        window.scrollTo(0, 0);
      }, 300); // Match exit transition duration
      return () => clearTimeout(timeoutId);
    }
  }, [page, displayPage]);


  const handleItemSelect = (item: PortfolioItem) => {
    if (item.type === 'youtube') {
      setSelectedVideo(item);
    } else if (item.type === 'project') {
      setSelectedProject(item);
      window.scrollTo(0, 0);
    }
  };
  
  const handleItemSelectById = (id: number) => {
    const item = portfolioItems.find(p => p.id === id);
    if (item) {
        handleItemSelect(item);
    }
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };
  
  const handleCloseProject = () => {
      setSelectedProject(null);
  };

  const navigateTo = (targetPage: Page) => {
    setSelectedProject(null);
    if (targetPage !== page) {
      setPage(targetPage);
    } else {
       window.scrollTo(0, 0);
    }
  }

  const renderPage = () => {
    if (selectedProject) {
      return <ProjectDetail project={selectedProject} onClose={handleCloseProject} />;
    }

    switch (displayPage) {
      case 'portfolio':
        return <AllProjectsGrid onVideoSelect={handleItemSelect} isPage={true} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <HomepageVideoSection />
            <MyProjectsSection onProjectSelect={handleItemSelect} />
            <AllProjectsGrid onVideoSelect={handleItemSelect} isPage={false} />
            <SplitSection
              leftTitle="The Artist"
              leftSubtitle="About Nick Asenjo"
              leftBgUrl="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              onLeftClick={() => navigateTo('about')}
              rightTitle="Let's Collaborate"
              rightSubtitle="Contact"
              rightBgUrl="https://images.pexels.com/photos/2693208/pexels-photo-2693208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              onRightClick={() => navigateTo('contact')}
            />
          </>
        );
    }
  }

  return (
    <div className="bg-dark-primary text-light-gray font-sans antialiased">
      <Header setPage={navigateTo} onProjectSelect={handleItemSelectById} />
      <main className={`${isTransitioning ? 'page-exit page-exit-active' : 'page-enter page-enter-active'}`}>
        {renderPage()}
      </main>
      <Footer setPage={navigateTo}/>
      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;