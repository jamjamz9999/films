import React from 'react';
import { InstagramIcon, TwitterIcon, LinkedInIcon, YouTubeIcon, FacebookIcon, SnapchatIcon, WhatsAppIcon } from './icons';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

type Page = 'home' | 'portfolio' | 'about' | 'contact';

interface FooterProps {
    setPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  const FooterLink: React.FC<{page: Page, children: React.ReactNode}> = ({ page, children }) => (
    <button onClick={() => setPage(page)} className="text-gray-400 hover:text-white transition-colors duration-300">
        {children}
    </button>
  );

  const SocialLink: React.FC<{href: string, children: React.ReactNode, platform: string}> = ({ href, children, platform }) => (
    <a href={href} aria-label={platform} className="group text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-3 w-full">
        {children}
        <span className="nav-link-underline">{platform}</span>
    </a>
  );

  return (
    <>
    <footer ref={ref} className="bg-gradient-to-t from-black to-dark-primary py-20 overflow-hidden">
      <div className="container mx-auto px-6 text-gray-400">
        {isVisible && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black p-8 rounded-lg shadow-2xl shadow-black/50 border border-gray-800 animate-fadeInUp text-center md:text-left">
                <h3 className="text-white font-bold uppercase tracking-widest mb-4">Navigation</h3>
                <div className="flex flex-col space-y-2 items-center md:items-start">
                    <FooterLink page="home">Home</FooterLink>
                    <FooterLink page="portfolio">Portfolio</FooterLink>
                    <FooterLink page="about">About Me</FooterLink>
                    <FooterLink page="contact">Contact</FooterLink>
                </div>
              </div>

              <div className="bg-black p-8 rounded-lg shadow-2xl shadow-black/50 border border-gray-800 animate-fadeInUp text-center md:text-left" style={{ animationDelay: '200ms' }}>
                <h3 className="text-white font-bold uppercase tracking-widest mb-4">Follow Me</h3>
                <div className="flex flex-col space-y-3 items-center md:items-start">
                    <SocialLink href="#" platform="Instagram"><InstagramIcon className="w-6 h-6"/></SocialLink>
                    <SocialLink href="#" platform="YouTube"><YouTubeIcon className="w-6 h-6"/></SocialLink>
                    <SocialLink href="#" platform="Facebook"><FacebookIcon className="w-6 h-6"/></SocialLink>
                    <SocialLink href="#" platform="Twitter"><TwitterIcon className="w-6 h-6"/></SocialLink>
                    <SocialLink href="#" platform="LinkedIn"><LinkedInIcon className="w-6 h-6"/></SocialLink>
                    <SocialLink href="#" platform="Snapchat"><SnapchatIcon className="w-6 h-6"/></SocialLink>
                    <SocialLink href="#" platform="WhatsApp"><WhatsAppIcon className="w-6 h-6"/></SocialLink>
                </div>
              </div>

              <div className="bg-black p-8 rounded-lg shadow-2xl shadow-black/50 border border-gray-800 animate-fadeInUp text-center md:text-left" style={{ animationDelay: '400ms' }}>
                 <h3 className="text-white font-bold uppercase tracking-widest mb-4">Contact</h3>
                 <div className="space-y-2">
                    <a href="mailto:hello@nickasenjofilms.com" className="block hover:text-white transition-colors duration-300">hello@nickasenjofilms.com</a>
                    <a href="tel:+15551234567" className="block hover:text-white transition-colors duration-300">+1 (555) 123-4567</a>
                    <p>123 Cinema Drive,<br/>Hollywood, CA 90028</p>
                    <a href="#" className="block text-ferrari-red hover:underline">Google Business Page</a>
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://www.nickasenjofilms.com/contact&color=ffffff&bgcolor=000000" alt="Contact QR Code" className="mt-4 mx-auto md:mx-0" />
                 </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-16 pt-8 text-center animate-fadeInUp" style={{ animationDelay: '600ms' }}>
                 <p className="text-sm">&copy; {new Date().getFullYear()} Nick Asenjo Films. All Rights Reserved.</p>
            </div>
          </>
        )}
      </div>
    </footer>
    <div className="bg-ferrari-red h-10 flex items-center justify-center text-black text-sm font-semibold tracking-wider px-4 text-center">
        Nick ASSENjo Films, professional American videographer. Welcome to my website.
    </div>
    <div className="bg-gold-cream h-1"></div>
    </>
  );
};

export default Footer;