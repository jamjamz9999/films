
import React, { useEffect } from 'react';
import { PortfolioItem } from '../types';
import { CloseIcon } from './icons';

interface VideoModalProps {
  video: PortfolioItem;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <style>{`.animate-fade-in { animation: fadeIn 0.3s ease-out; } @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
      <button
        className="absolute top-4 right-4 text-white hover:text-ferrari-red transition-colors duration-300 z-50"
        onClick={onClose}
      >
        <CloseIcon className="w-10 h-10" />
      </button>

      <div
        className="relative w-full max-w-4xl aspect-video bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={video.videoUrl}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
