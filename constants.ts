
import { PortfolioItem, MegaMenuContent } from './types';
import { LOGO_DATA_URL } from './images/logo';

export { LOGO_DATA_URL };

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Autumn Drive',
    category: 'Commercial',
    thumbnailUrl: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'youtube',
    videoUrl: 'https://www.youtube.com/embed/u31SA_iC5iA?autoplay=1&rel=0&controls=0&showinfo=0',
  },
  {
    id: 2,
    title: 'Neon Noir',
    category: 'Short Film',
    thumbnailUrl: 'https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'project',
    details: {
      heroImageUrl: 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A stylistic exploration of a city at night, blending elements of classic noir with modern cyberpunk aesthetics. The project involved complex lighting setups and a focus on atmospheric storytelling to capture the solitary journey of its protagonist.',
      galleryUrls: [
        'https://images.pexels.com/photos/3227984/pexels-photo-3227984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/2249603/pexels-photo-2249603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
      date: 'October 2023',
      company: 'Self-Produced',
      client: 'N/A (Passion Project)',
      director: 'Nick Asenjo',
      cinematographer: 'Jane Doe',
      affiliations: ['Official Selection - Indie Film Fest 2023'],
      links: [
        { platform: 'Vimeo', url: 'https://vimeo.com/channels/staffpicks' },
      ],
    },
  },
  {
    id: 3,
    title: 'Desert Mirage',
    category: 'Music Video',
    thumbnailUrl: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'youtube',
    videoUrl: 'https://www.youtube.com/embed/zK0F_eGT-lA?autoplay=1&rel=0&controls=0&showinfo=0',
  },
  {
    id: 4,
    title: 'The Alpinist',
    category: 'Documentary',
    thumbnailUrl: 'https://images.pexels.com/photos/2397653/pexels-photo-2397653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'project',
    details: {
      heroImageUrl: 'https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Follows the journey of a world-class climber as they attempt a perilous new route. This documentary captures the raw beauty and danger of the high mountains, focusing on the mental and physical challenges of extreme sports.',
      galleryUrls: [
        'https://images.pexels.com/photos/713067/pexels-photo-713067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/745244/pexels-photo-745244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
      date: 'June 2023',
      company: 'Mountain Peak Films',
      client: 'Outdoor Adventure Channel',
      director: 'John Smith',
      cinematographer: 'Nick Asenjo',
      links: [
        { platform: 'YouTube', url: 'https://www.youtube.com/' },
      ],
    },
  },
  {
    id: 5,
    title: 'Coastal Serenity',
    category: 'Travel Film',
    thumbnailUrl: 'https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'youtube',
    videoUrl: 'https://www.youtube.com/embed/52zLGIv_ar4?autoplay=1&rel=0&controls=0&showinfo=0',
  },
  {
    id: 6,
    title: 'Future Forward',
    category: 'Corporate Film',
    thumbnailUrl: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'project',
    details: {
      heroImageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A corporate documentary showcasing innovation and technology for a flagship product launch. We used a blend of executive interviews, high-tech motion graphics, and on-location footage to tell a story of progress and ambition.',
      galleryUrls: [
        'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
      date: 'January 2024',
      company: 'Nick Asenjo Films',
      client: 'Innovate Corp',
      director: 'Nick Asenjo',
      cinematographer: 'Emily White',
      links: [
        { platform: 'Website', url: '#' },
        { platform: 'Vimeo', url: '#' },
      ],
    },
  },
];

export const megaMenuContent: MegaMenuContent = {
  portfolio: [
    {
      title: 'Categories',
      links: [
        { title: 'All Projects', href: 'portfolio', description: 'View our complete collection of work.' },
        { title: 'Commercials', href: 'portfolio', description: 'Creative solutions for leading brands.' },
        { title: 'Short Films', href: 'portfolio', description: 'Narrative-driven cinematic pieces.' },
        { title: 'Music Videos', href: 'portfolio', description: 'Visuals that amplify the music.' },
      ],
    },
     {
      title: 'Featured',
      links: [
        { title: 'Neon Noir', href: 'portfolio', projectId: 2, description: 'A journey into the city\'s vibrant nightlife.' },
        { title: 'The Alpinist', href: 'portfolio', projectId: 4, description: 'An epic tale of human endurance.' },
        { title: 'Future Forward', href: 'portfolio', projectId: 6, description: 'Innovating for a brighter tomorrow.' },
      ],
    },
  ],
  about: [
     {
      title: 'Our Agency',
      links: [
        { title: 'The Artist', href: 'about', description: 'Meet the creative behind the camera.' },
        { title: 'My Philosophy', href: 'about', description: 'Crafting stories that resonate.' },
        { title: 'Collaborate', href: 'contact', description: 'Join me on a project.' },
      ],
    },
  ]
};