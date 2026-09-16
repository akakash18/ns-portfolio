import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Target, Award, ArrowUpRight, BarChart3 } from 'lucide-react';
import type { ProjectData, MarketplacePlatform } from '../types';
import { SellerDashboard } from './dashboards/SellerDashboards';

interface ProjectModalProps {
  project: ProjectData;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<MarketplacePlatform>('Amazon');

  const currentPlatformDetail = project.platforms.find(
    (p) => p.platform === selectedPlatform
  ) || project.platforms[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-3xl max-w-6xl w-full my-auto overflow-hidden shadow-2xl border border-gray-100 relative flex flex-col max-h-[92vh]"
      >
        
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-3xl space-y-2">
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30">
              {project.category}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              {project.subtitle}
            </p>
          </div>

          {/* Platform Tabs Switcher (Amazon | Flipkart | Myntra | Blinkit | Zepto | Swiggy) */}
          <div className="flex items-center gap-2 overflow-x-auto pt-6 border-t border-white/10 mt-6 no-scrollbar">
            {project.platforms.map((plat) => {
              const isActive = selectedPlatform === plat.platform;
              return (
                <button
                  key={plat.platform}
                  onClick={() => setSelectedPlatform(plat.platform)}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
                    isActive
                      ? 'bg-teal-accent text-white shadow-lg shadow-teal-500/30 scale-105'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <span>{plat.platformTitle || plat.platform}</span>
                  {isActive && <ArrowUpRight className="w-4 h-4" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-teal-50/60 p-5 rounded-2xl border border-teal-100 space-y-2">
                <div className="flex items-center gap-2 text-teal-accent font-bold text-xs uppercase tracking-wider">
                  <Target className="w-4 h-4" />
                  <span>Primary Objective</span>
                </div>
                <h3 className="text-lg font-extrabold text-gray-900">
                  {currentPlatformDetail.objective}
                </h3>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-500">
                  My Scope of Work:
                </h4>
                <div className="space-y-3 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                  {currentPlatformDetail.scopeOfWork.map((scope, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex items-start gap-2 text-sm font-bold text-gray-900">
                        <CheckCircle className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                        <span>{scope.title}</span>
                      </div>
                      {scope.subItems && (
                        <ul className="pl-7 space-y-1 text-xs text-gray-600 list-disc">
                          {scope.subItems.map((sub, subIdx) => (
                            <li key={subIdx}>{sub}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-500">
                  Campaign Results & Key Impact:
                </h4>
                <div className="space-y-2">
                  {currentPlatformDetail.results.map((res, rIdx) => (
                    <div key={rIdx} className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-bold flex items-start gap-2.5">
                      <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column */}
            <div className="lg:col-span-7">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-teal-accent" />
                    <span>Interactive Marketplace Dashboard</span>
                  </h4>
                  <span className="text-xs font-bold text-teal-accent">
                    Platform: {currentPlatformDetail.platform}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedPlatform}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SellerDashboard platformDetail={currentPlatformDetail} />
                  </motion.div>
                </AnimatePresence>

              </div>
            </div>

          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span>Nilam Shende • E-Commerce & Marketplace Specialist Portfolio</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors"
          >
            Close Overview
          </button>
        </div>

      </motion.div>

    </div>
  );
};
