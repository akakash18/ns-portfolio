import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Tools } from './components/Tools';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { PresentationView } from './components/PresentationView';
import { profileData } from './data/profile';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [viewMode, setViewMode] = useState<'web' | 'presentation'>('web');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'education', 'experience', 'skills', 'tools', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-teal-100 selection:text-teal-900">
      
      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        viewMode={viewMode}
        onToggleViewMode={() => setViewMode(viewMode === 'web' ? 'presentation' : 'web')}
      />

      {/* Main Sections */}
      <main>
        <Hero onExploreProjects={() => handleNavigate('projects')} />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Tools />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800 text-xs text-center space-y-2">
        <p className="font-semibold text-gray-300">
          © {new Date().getFullYear()} {profileData.name} • {profileData.title} Portfolio
        </p>
        <p className="text-gray-500">
          Built with React, TypeScript, Tailwind CSS, Recharts & Framer Motion.
        </p>
      </footer>

      {/* PDF Slide Presentation Deck View Mode */}
      {viewMode === 'presentation' && (
        <PresentationView onClose={() => setViewMode('web')} />
      )}

    </div>
  );
}

export default App;
