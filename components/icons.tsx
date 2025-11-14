
import React from 'react';

interface IconProps {
  className?: string;
}

export const PlayIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653z"
      clipRule="evenodd"
    />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.415 2.175 8.796 2.163 12 2.163zm0 1.802c-3.116 0-3.472.01-4.69.066-2.41.11-3.449 1.15-3.558 3.558-.055 1.218-.066 1.573-.066 4.69s.01 3.472.066 4.69c.11 2.41 1.15 3.449 3.558 3.558 1.218.055 1.573.066 4.69.066s3.472-.01 4.69-.066c2.41-.11 3.449-1.15 3.558-3.558.055-1.218.066-1.573.066-4.69s-.01-3.472-.066-4.69c-.11-2.41-1.15-3.449-3.558-3.558C15.472 3.975 15.116 3.965 12 3.965zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 1.802a1.948 1.948 0 110 3.896 1.948 1.948 0 010-3.896zM16.85 6.9a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/>
  </svg>
);

export const TwitterIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25zM17.633 19.75h1.644L7.12 4.25H5.432l12.201 15.5z"/>
  </svg>
);

export const LinkedInIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V8h3v11zM6.5 6.73c-.966 0-1.75-.783-1.75-1.75S5.534 3.23 6.5 3.23s1.75.784 1.75 1.75S7.466 6.73 6.5 6.73zM19 19h-3v-5.6c0-1.33-.027-3.03-1.845-3.03-1.846 0-2.13.1.44-2.13.1.44v7.19h-3V8h3v1.39h.04c.42-.8 1.45-1.64 2.88-1.64 3.08 0 3.65 2.02 3.65 4.65V19z"/>
  </svg>
);

export const YouTubeIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className} viewBox="0 0 24 24">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.904 3.407 0 4.93 0 8.002v5.996c0 3.072.904 4.595 4.385 4.816 3.6.245 11.626.246 15.23 0 3.481-.22 4.385-1.744 4.385-4.816V8.002c0-3.072-.904-4.595-4.385-4.818zM9.545 14.545V6.455l6.523 4.045-6.523 4.045z"/>
  </svg>
);

export const VimeoIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.998 6.203c-.22 1.536-1.26 3.863-3.117 6.982-1.859 3.12-3.856 5.23-6.002 6.328-2.146 1.099-4.144 1.648-5.992 1.648-1.745 0-3.21-.663-4.396-1.99-1.186-1.325-1.779-3.048-1.779-5.166 0-1.25.32-2.43.96-3.542.64-1.11 1.51-1.943 2.61-2.496 1.1-.555 2.22-.832 3.36-.832.96 0 1.83.18 2.61.539.78.358 1.29.93 1.53 1.711.12.39.18.84.18 1.35 0 .57-.15 1.02-.45 1.35-.3.33-.7.49-1.2.49-.42 0-.8-.11-1.14-.33-.34-.22-.51-.55-.51-.99 0-.21.02-.42.06-.63.04-.21.06-.36.06-.45 0-.21-.05-.39-.15-.54-.1-.15-.28-.22-.51-.22-.36 0-.69.15-.99.45-.3.3-.45.72-.45 1.26 0 .54.17 1.02.51 1.44.34.42.73.63 1.17.63.81 0 1.74-.55 2.79-1.65 1.05-1.1 1.74-2.52 2.07-4.26.21-1.08.31-1.92.31-2.52 0-.6-.1-1.03-.3-1.32-.2-.29-.5-.44-.9-.44-.48 0-1.02.33-1.62.99-1.05 1.17-1.89 2.64-2.52 4.41-1.02 2.91-1.83 4.92-2.43 6.03-.6 1.11-1.2 1.66-1.8 1.66-.54 0-1.06-.44-1.56-1.32-.5-.88-.75-2.04-.75-3.48 0-1.05.15-2.01.45-2.88.3-.87.8-1.59 1.5-2.16.7-.57 1.52-.86 2.46-.86.99 0 1.9.33 2.73.99.83.66 1.24 1.62 1.24 2.88 0 .21-.02.48-.06.81-.04.33-.06.57-.06.72z" />
  </svg>
);


export const LinkIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
);

export const SnapchatIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M8.2,1.3c0.2-0.5,0.8-0.8,1.3-0.6c0.5,0.2,0.8,0.8,0.6,1.3L5.5,13.2c-0.2,0.5-0.8,0.8-1.3,0.6c-0.5-0.2-0.8-0.8-0.6-1.3 L8.2,1.3z M15.8,1.3c-0.2-0.5-0.8-0.8-1.3-0.6c-0.5,0.2-0.8,0.8-0.6,1.3l4.6,11.2c0.2,0.5,0.8,0.8,1.3,0.6 c0.5-0.2,0.8-0.8,0.6-1.3L15.8,1.3z M12,5.2c-4,0-7.2,3.2-7.2,7.2c0,3,1.9,5.7,4.6,6.7v-3.4c0-1,0.8-1.8,1.8-1.8h1.6 c1,0,1.8,0.8,1.8,1.8v3.4c2.8-1.1,4.6-3.7,4.6-6.7C19.2,8.4,16,5.2,12,5.2z" />
    </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.52 1.38 5.06L2 22l5.25-1.36c1.48.86 3.16 1.32 4.79 1.32h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.16 15.3c-.2-.1-.71-.35-1.54-.78-.29-.16-.5-.27-.72.26-.22.53-.87 1.03-1.06 1.23s-.38.22-.7.08c-1.22-.49-2.3-1.15-3.35-2.22-.8-.83-1.34-1.78-1.5-2.08s-.16-.48.04-.76c.18-.24.42-.62.54-.82s.08-.34-.04-.62c-.12-.28-.53-1.28-.72-1.74s-.38-.38-.52-.38h-.48c-.18 0-.48.08-.72.38-.24.3-.9.88-.9 2.14s.92 2.48 1.04 2.66c.12.18 1.82 2.79 4.41 3.89.6.26 1.1.42 1.48.52.56.16 1.04.14 1.42-.08.42-.24 1.28-.9 1.48-1.74s.01-1.58-.08-1.74c-.1-.16-.22-.24-.32-.34z" />
    </svg>
);
