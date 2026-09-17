import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { profileData } from '../data/profile';
import { educationData } from '../data/education';
import { experienceData } from '../data/experience';
import { skillCategoriesData } from '../data/skills';
import { projectsData } from '../data/projects';
import { SellerDashboard } from './dashboards/SellerDashboards';

interface PresentationViewProps {
  onClose: () => void;
}

export const PresentationView: React.FC<PresentationViewProps> = ({ onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 24;

  const nextSlide = () => {
    if (currentSlide < totalSlides) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 1) setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const renderSlideContent = (slideNum: number) => {
    switch (slideNum) {
      case 1:
        return (
          <div className="flex flex-col justify-between h-full p-8 sm:p-12 relative overflow-hidden bg-white">
            <div className="w-1/3 h-1.5 bg-teal-accent absolute top-0 left-0" />
            <div className="flex justify-between items-center text-xs font-bold text-gray-500">
              <span>About Me • Education • Experience • Skill's • Tools • Projects • Contact</span>
              <span className="text-teal-accent font-black">Page 01</span>
            </div>

            <div className="my-auto space-y-6 max-w-2xl">
              <h1 className="text-6xl sm:text-7xl font-black text-gray-900 leading-none">
                E-Commerce & <br /> Quick Commerce
              </h1>
              <h2 className="text-4xl font-extrabold text-teal-accent">Portfolio</h2>
              <div className="pt-2 border-t-2 border-teal-accent max-w-md">
                <p className="text-xl font-bold text-gray-900">By {profileData.name}</p>
                <p className="text-sm text-teal-accent font-semibold">{profileData.title}</p>
                <p className="text-xs text-gray-600 mt-1">{profileData.tagline}</p>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs text-gray-400">
              <span>PDF Interactive Presentation Mode</span>
              <span>Slide {currentSlide} / {totalSlides}</span>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="flex flex-col justify-between h-full p-8 sm:p-12 bg-white relative">
            <div className="w-1/3 h-1.5 bg-teal-accent absolute top-0 left-0" />
            <div className="flex justify-between items-center text-xs font-bold text-teal-accent">
              <span className="font-bold text-gray-900">About Me</span>
              <span>Page 02</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto items-center">
              <div className="space-y-4">
                <h2 className="text-6xl font-extrabold text-teal-accent">Hello,</h2>
                <h3 className="text-2xl font-bold text-gray-900">I'm {profileData.name}</h3>
                <p className="text-xs text-teal-accent font-semibold">{profileData.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{profileData.heroTagline}</p>
                <div className="grid grid-cols-2 gap-2 pt-2 text-[11px]">
                  {profileData.stats.map((s, idx) => (
                    <div key={idx} className="p-2 bg-teal-50 rounded border border-teal-100">
                      <div className="font-bold text-teal-accent text-sm">{s.value}</div>
                      <div className="text-gray-600 text-[10px]">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-80 rounded-2xl bg-gray-100 border-4 border-white shadow-xl overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Nilam" />
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="flex flex-col justify-between h-full p-8 sm:p-12 bg-white relative">
            <div className="w-1/3 h-1.5 bg-teal-accent absolute top-0 left-0" />
            <div className="flex justify-between items-center text-xs font-bold text-teal-accent">
              <span className="font-bold text-gray-900">Education</span>
              <span>Page 03</span>
            </div>

            <div className="my-auto space-y-6">
              <h2 className="text-5xl font-extrabold text-teal-accent tracking-wider">EDUCATION</h2>
              <p className="text-xs text-gray-600 max-w-xl">{educationData[0].details}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {educationData.map((edu) => (
                  <div key={edu.id} className="border-l-4 border-teal-accent pl-4 space-y-2">
                    <span className="text-xs font-bold text-gray-900">{edu.period}</span>
                    <h3 className="text-lg font-bold text-gray-900">{edu.major}</h3>
                    <p className="text-xs text-teal-accent font-semibold">{edu.institution} ({edu.location})</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="flex flex-col justify-between h-full p-8 sm:p-12 bg-white relative">
            <div className="w-1/3 h-1.5 bg-teal-accent absolute top-0 left-0" />
            <div className="flex justify-between items-center text-xs font-bold text-teal-accent">
              <span className="font-bold text-gray-900">Experience</span>
              <span>Page 04</span>
            </div>

            <div className="my-auto space-y-6">
              <h2 className="text-4xl font-extrabold text-teal-accent">PROFESSIONAL EXPERIENCE</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2 text-xs">
                    <div className="text-2xl font-black text-gray-900">{exp.number}</div>
                    <h3 className="font-bold text-gray-900 text-sm">{exp.company}</h3>
                    <p className="text-teal-accent font-semibold">{exp.period} • {exp.role}</p>
                    <ul className="list-disc pl-4 space-y-1 text-gray-600">
                      {exp.responsibilities.slice(0, 3).map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="flex flex-col justify-between h-full p-8 sm:p-12 bg-white relative">
            <div className="w-1/3 h-1.5 bg-teal-accent absolute top-0 left-0" />
            <div className="flex justify-between items-center text-xs font-bold text-teal-accent">
              <span className="font-bold text-gray-900">Skill's & Tools</span>
              <span>Page 05</span>
            </div>

            <div className="my-auto space-y-6">
              <h2 className="text-4xl font-extrabold text-teal-accent">SKILLS & EXPERTISE</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skillCategoriesData.map((cat) => (
                  <div key={cat.title} className="p-4 rounded-xl bg-teal-50/60 border border-teal-100 text-xs space-y-2">
                    <h4 className="font-bold text-teal-accent">{cat.title}</h4>
                    <div className="space-y-1">
                      {cat.skills.slice(0, 4).map((s) => (
                        <div key={s.name} className="font-semibold text-gray-700">{s.name}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="flex flex-col justify-between h-full p-8 sm:p-12 bg-white relative">
            <div className="w-1/3 h-1.5 bg-teal-accent absolute top-0 left-0" />
            <div className="flex justify-between items-center text-xs font-bold text-teal-accent">
              <span className="font-bold text-gray-900">Projects</span>
              <span>Page 06</span>
            </div>

            <div className="my-auto space-y-8">
              <h2 className="text-5xl font-extrabold text-teal-accent">NOTABLE PROJECTS</h2>
              <div className="grid grid-cols-2 gap-4 max-w-2xl">
                {projectsData.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setCurrentSlide(p.id === 'amazon-ppc-optimization' ? 7 : p.id === 'account-sales-management' ? 10 : p.id === 'operations-catalog-seo' ? 14 : 19)}
                    className="p-4 rounded-2xl border-2 border-teal-accent text-center font-bold text-sm text-gray-900 hover:bg-teal-accent hover:text-white transition-colors"
                  >
                    {p.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 24:
        return (
          <div className="flex flex-col justify-between h-full p-8 sm:p-12 bg-white relative">
            <div className="w-1/3 h-1.5 bg-teal-accent absolute top-0 left-0" />
            <div className="flex justify-between items-center text-xs font-bold text-teal-accent">
              <span className="font-bold text-gray-900">Contact</span>
              <span>Page 24</span>
            </div>

            <div className="my-auto space-y-6 max-w-xl">
              <h2 className="text-6xl font-extrabold text-teal-accent">CONTACT</h2>
              <p className="text-gray-700 text-sm font-medium">{profileData.callToAction}</p>
              <div className="space-y-2 text-sm font-bold text-gray-900">
                <div>Email : {profileData.contact.email}</div>
                <div>Phone : {profileData.contact.phone}</div>
                <div>Location : {profileData.contact.location}</div>
                <div>LinkedIn : {profileData.contact.linkedin}</div>
              </div>
              <div className="flex gap-4">
                <button onClick={onClose} className="px-6 py-2.5 rounded-full bg-teal-accent text-white font-bold text-xs">
                  My Resume
                </button>
                <button onClick={() => setCurrentSlide(1)} className="px-6 py-2.5 rounded-full bg-teal-accent text-white font-bold text-xs">
                  Back Top
                </button>
              </div>
            </div>
          </div>
        );

      default:
        const activeProj = slideNum >= 7 && slideNum <= 9 
          ? projectsData[0] 
          : slideNum >= 10 && slideNum <= 13 
          ? projectsData[1] 
          : slideNum >= 14 && slideNum <= 18 
          ? projectsData[2] 
          : projectsData[3];

        const platIdx = (slideNum % activeProj.platforms.length);
        const activePlatform = activeProj.platforms[platIdx] || activeProj.platforms[0];

        return (
          <div className="flex flex-col justify-between h-full p-6 sm:p-10 bg-slate-950 text-white relative">
            <div className="flex justify-between items-center text-xs font-bold text-slate-400 border-b border-slate-800 pb-3">
              <span className="text-teal-400 font-bold">{activeProj.title}</span>
              <span>Page {slideNum < 10 ? `0${slideNum}` : slideNum}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center overflow-y-auto max-h-[75vh] py-2">
              <div className="lg:col-span-5 space-y-4 text-xs">
                <span className="px-2.5 py-1 rounded bg-teal-500/20 text-teal-300 font-mono font-bold">
                  Platform: {activePlatform.platform}
                </span>
                <h3 className="text-xl font-bold text-white">{activePlatform.objective}</h3>
                <div className="space-y-2 text-slate-300">
                  <span className="font-bold text-slate-200 block">Scope of Work:</span>
                  <ul className="list-disc pl-4 space-y-1">
                    {activePlatform.scopeOfWork.map((s, idx) => (
                      <li key={idx}>{s.title}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-1 pt-2">
                  {activePlatform.results.map((r, idx) => (
                    <div key={idx} className="p-2 rounded bg-emerald-500/10 text-emerald-300 font-bold border border-emerald-500/20">
                      {r}
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <SellerDashboard platformDetail={activePlatform} />
              </div>
            </div>

            <div className="flex justify-between items-center text-[11px] text-slate-500 border-t border-slate-900 pt-3">
              <span>Use Left / Right Arrow keys to navigate slides</span>
              <span>Slide {slideNum} of {totalSlides}</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center p-2 sm:p-6 animate-fade-in">
      <div className="w-full max-w-6xl flex items-center justify-between py-3 text-white">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Exit PDF Slide Mode</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-teal-400">
          <span>Slide {currentSlide} / {totalSlides}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 1}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="w-full max-w-6xl aspect-video bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-800 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="w-full h-full"
          >
            {renderSlideContent(currentSlide)}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="w-full max-w-6xl flex items-center gap-1.5 overflow-x-auto py-3 no-scrollbar">
        {Array.from({ length: totalSlides }, (_, i) => i + 1).map((sNum) => (
          <button
            key={sNum}
            onClick={() => setCurrentSlide(sNum)}
            className={`w-7 h-7 rounded-lg text-[11px] font-mono font-bold transition-all shrink-0 flex items-center justify-center ${
              currentSlide === sNum
                ? 'bg-teal-accent text-white shadow-md scale-110'
                : 'bg-white/10 text-slate-400 hover:bg-white/20'
            }`}
          >
            {sNum}
          </button>
        ))}
      </div>
    </div>
  );
};
