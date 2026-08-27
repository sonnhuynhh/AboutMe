import React from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpringTerminal } from './components/SpringTerminal';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TimelineSection } from './components/TimelineSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-obsidian-900 text-slate-100 selection:bg-spring-500 selection:text-obsidian-900 overflow-hidden">
      {/* Dynamic Ambient Background Canvas */}
      <BackgroundCanvas />

      {/* Glassmorphic Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <SpringTerminal />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
      </main>

      {/* Footer & Contact */}
      <Footer />
    </div>
  );
};

export default App;
