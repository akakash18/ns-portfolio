import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Megaphone, ShoppingBag, Search, BarChart3, ArrowUpRight, Sparkles } from 'lucide-react';
import { projectsData } from '../data/projects';
import type { ProjectData } from '../types';
import { ProjectModal } from './ProjectModal';
import { platformLogos } from '../data/logos';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const platforms = Object.entries(platformLogos);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Amazon PPC & Ad Optimization':
        return <Megaphone className="w-8 h-8 text-teal-accent" />;
      case 'Account & Sales Management':
        return <ShoppingBag className="w-8 h-8 text-teal-accent" />;
      case 'Marketplace Operations & Catalog SEO':
        return <Search className="w-8 h-8 text-teal-accent" />;
      case 'Business Analytics & Data Reporting':
        return <BarChart3 className="w-8 h-8 text-teal-accent" />;
      default:
        return <BarChart3 className="w-8 h-8 text-teal-accent" />;
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-24 bg-teal-50/40 relative overflow-hidden border-b border-teal-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-teal-accent" />
            <span>Interactive Campaign Showcase</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-wider uppercase leading-none">
            NOTABLE <span className="text-teal-accent">PROJECTS</span>
          </h2>
          <p className="text-gray-600 text-lg mt-3 font-medium">
            Data-driven E-commerce & Quick Commerce campaign execution with real growth results!
          </p>
        </motion.div>

        {/* 4 Interactive Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 sm:mb-14">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-teal-300 hover:border-teal-accent shadow-card hover:shadow-2xl transition-all duration-300 cursor-pointer group flex flex-col justify-between relative overflow-hidden"
            >
              <div className="relative z-10 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getCategoryIcon(project.category)}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 group-hover:text-teal-accent transition-colors leading-tight">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.subtitle}
                </p>
              </div>

              {/* Action Link Footer */}
              <div className="relative z-10 mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.platforms.map((p) => (
                    <span key={p.platform} className="px-2.5 py-1 rounded-md bg-teal-50 text-teal-900 text-[11px] font-bold border border-teal-100">
                      {p.platform}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 text-teal-accent font-bold text-sm group-hover:translate-x-1 transition-transform shrink-0">
                  <span>Explore Metrics</span>
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Platform Logos Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-teal-200 shadow-card flex flex-wrap items-center justify-around gap-6 text-center">
          {platforms.map(([name, logo]) => (
            <div key={name} className="flex items-center justify-center">
              <img src={logo} alt={`${name} logo`} className="w-24 h-14 object-contain" />
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

    </section>
  );
};
