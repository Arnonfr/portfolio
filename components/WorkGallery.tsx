
import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Project } from '../types';

interface WorkGalleryProps {
  onProjectSelect: (project: Project) => void;
}

const projects: Project[] = [
  { 
    id: 1, 
    title: 'Claim Movements', 
    category: 'Insurtech', 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop', 
    role: 'Head of Design',
    company: 'Novidea',
    year: '2021 — Present',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Webflow_logo.svg', 
    description: 'Leading design for core logic processing of enterprise insurance claims.'
  },
  { 
    id: 2, 
    title: 'Web Trader', 
    category: 'Fintech', 
    image: 'https://images.unsplash.com/photo-1611974714851-eb607737420d?q=80&w=2670&auto=format&fit=crop', 
    role: 'Lead Product Designer',
    company: 'Ava Trade',
    year: '2018 — 2021',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/TradingView_Logo.svg',
    description: 'Architecting a high-performance trading terminal for the next generation of retail investors.'
  },
  { 
    id: 3, 
    title: 'Smart Clauses', 
    category: 'Enterprise', 
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2670&auto=format&fit=crop',
    role: 'Senior UX Designer',
    company: 'Novidea London',
    year: '2015 — 2018',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg',
    description: 'Untangling complex risk language with modular, intelligent design systems.'
  },
  { 
    id: 4, 
    title: 'Cookit', 
    category: 'Consumer AI', 
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2670&auto=format&fit=crop',
    role: 'Product Lead',
    company: 'Cookit AI',
    year: '2024 — Present',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Apple_Kitchen_icon.png',
    description: 'Smart kitchen companion using generative AI to transform the home cooking experience.'
  },
  { 
    id: 5, 
    title: 'Risk Engine', 
    category: 'Analysis', 
    image: 'https://images.unsplash.com/photo-1642790103517-1812dfb24160?q=80&w=2670&auto=format&fit=crop',
    role: 'Lead UX',
    company: 'Novidea',
    year: '2023',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Figma-logo.svg',
    description: 'Visualizing predictive risk models for Lloyd’s of London syndicates.'
  },
  { 
    id: 6, 
    title: 'Unified Wallet', 
    category: 'Crypto', 
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2664&auto=format&fit=crop',
    role: 'Senior Product Designer',
    company: 'Ava Crypto',
    year: '2022',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
    description: 'Streamlining multi-chain asset management for high-net-worth individuals.'
  }
];

export const WorkGallery: React.FC<WorkGalleryProps> = ({ onProjectSelect }) => {
  return (
    <section id="projects" className="py-24 px-6 max-w-[1440px] mx-auto">
      {/* Section Header */}
      <div className="mb-20">
        <span className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-black/20 block mb-6">Selected Works</span>
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#111] tracking-tight">Cases & Products</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={onProjectSelect}
          />
        ))}
      </div>
    </section>
  );
};
