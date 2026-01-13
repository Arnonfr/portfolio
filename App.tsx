
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WorkGallery } from './components/WorkGallery';
import { Footer } from './components/Footer';
import { ProjectPage } from './components/ProjectPage';
import { SideProjectsPage } from './components/SideProjectsPage';
import { Project } from './types';

const SIDE_PROJECTS: Project[] = [
  {
    id: 101,
    title: 'Noms AI',
    subtitle: 'Smart Recipe Assistant',
    category: 'Consumer AI',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2670&auto=format&fit=crop',
    role: 'Vibe Code Project',
    company: 'Side Project',
    year: '2024',
    description: 'A smart kitchen companion that uses generative AI to transform ingredients in your fridge into personalized recipe experiences.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Apple_Kitchen_icon.png'
  },
  {
    id: 102,
    title: 'LingoFlow',
    subtitle: 'Language Learning Lab',
    category: 'EdTech',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2671&auto=format&fit=crop',
    role: 'Vibe Code Project',
    company: 'Side Project',
    year: '2024',
    description: 'An immersive language practice environment that utilizes real-time speech-to-text to help learners master conversational nuances.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Webflow_logo.svg'
  },
  {
    id: 103,
    title: 'SpaceCraft',
    subtitle: 'Furniture Planner',
    category: 'Utility',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2670&auto=format&fit=crop',
    role: 'Vibe Code Project',
    company: 'Side Project',
    year: '2023',
    description: 'A spatial planning tool designed to help users visualize complex furniture layouts in 3D, bridging the gap between flat blueprints and reality.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
  }
];

function App() {
  const [view, setView] = useState<'home' | 'project' | 'side-projects'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view, selectedProject]);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setView('project');
  };

  const handleBackToHome = () => {
    setSelectedProject(null);
    setView('home');
  };

  const handleExploreSideProjects = () => {
    setView('side-projects');
  };

  return (
    <main className="w-full min-h-screen font-sans selection:bg-black selection:text-white">
      {/* Global Header */}
      <Header 
        isInternal={view !== 'home'} 
        onBack={handleBackToHome}
      />

      {view === 'home' && (
        <>
          <Hero />
          
          <div id="work" className="pb-32">
            <WorkGallery onProjectSelect={handleProjectSelect} />
          </div>

          <About onExploreSideProjects={handleExploreSideProjects} />
          
          <div id="contact">
            <Footer />
          </div>
        </>
      )}

      {view === 'side-projects' && (
        <SideProjectsPage 
          projects={SIDE_PROJECTS}
          onProjectSelect={handleProjectSelect}
          onBack={handleBackToHome}
        />
      )}

      {view === 'project' && selectedProject && (
        <ProjectPage 
          project={selectedProject} 
          onBack={handleBackToHome} 
        />
      )}

      {/* Global Footer (only on sub-pages where appropriate) */}
      {view === 'side-projects' && <Footer />}
    </main>
  );
}

export default App;
