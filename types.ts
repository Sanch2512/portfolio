export type SectionId = 'home' | 'skills' | 'experience' | 'projects' | 'connect';

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface FlavorProfile {
  tech: number;       // Tech Stack Depth
  innovation: number; // Novelty
  complexity: number; // Engineering Difficulty
  design: number;     // UI/UX
  impact: number;     // Real-world utility
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  siteUrl?: string;
  demoUrl?: string;
  longDescription?: string;
  problem?: string;
  solution?: string;
  audience?: string;
  flavor: FlavorProfile; // New field for the wheel
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}