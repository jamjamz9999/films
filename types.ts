
export interface ProjectLink {
  platform: 'YouTube' | 'Vimeo' | 'Website';
  url: string;
}

export interface ProjectDetails {
  description: string;
  galleryUrls: string[];
  heroImageUrl: string;
  date: string;
  company: string;
  links: ProjectLink[];
  client: string;
  director: string;
  cinematographer: string;
  affiliations?: string[];
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  thumbnailUrl: string;
  type: 'youtube' | 'project';
  videoUrl?: string; // YouTube embed URL, optional
  details?: ProjectDetails;
}

export interface MegaMenuLink {
  title: string;
  href: string;
  description: string;
  projectId?: number;
}

export interface MegaMenuCategory {
  title: string;
  links: MegaMenuLink[];
}

export interface MegaMenuContent {
  portfolio: MegaMenuCategory[];
  about: MegaMenuCategory[];
}