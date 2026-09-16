import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';

interface HeroProps {
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-teal-50/40 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 text-teal-800 text-xs font-semibold tracking-wide border border-teal-300/50">
              <Sparkles className="w-4 h-4 text-teal-accent" />
              <span>3+ Years Experience • Quick Commerce & Marketplace Specialist</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-teal-accent tracking-tight leading-tight">
                E-Commerce & <br />
                <span className="text-gray-900">Quick Commerce</span> Specialist
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-gray-800 pt-1">
                Managing | Analyzing | Growing Marketplaces
              </p>
            </div>

            <div className="pt-2 border-t-2 border-teal-accent/30 max-w-xl">
              <p className="text-gray-600 text-base leading-relaxed">
                {profileData.heroTagline}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-teal-accent text-white font-bold shadow-lg shadow-teal-500/25 hover:bg-teal-dark hover:shadow-teal-600/35 transition-all duration-200 active:scale-95"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-all duration-200"
              >
                Let's Connect
              </a>
            </div>

            {/* Quick Metrics Cards */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-gray-100 max-w-2xl">
              {profileData.stats.map((stat, idx) => (
                <div key={idx} className="bg-teal-50/50 p-3.5 rounded-2xl border border-teal-100/80 space-y-0.5">
                  <div className="text-2xl font-extrabold text-teal-accent">{stat.value}</div>
                  <div className="text-xs font-semibold text-gray-700 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-tr from-teal-100 via-teal-50 to-white p-4 shadow-card border border-teal-200/50">
              <div className="w-full h-full rounded-2xl bg-white overflow-hidden shadow-inner relative flex flex-col justify-end p-6 bg-[radial-gradient(#0f969c_1px,transparent_1px)] [background-size:16px_16px]">
                
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="w-56 h-56 rounded-full bg-teal-500/10 flex items-center justify-center border-4 border-white shadow-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" 
                      alt="Nilam Shende" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Logos */}
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute top-2 left-2 bg-white px-3 py-2 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2 group hover:scale-110 transition-transform"
                >
                  <div className="w-8 h-8 rounded-xl bg-amber-500 text-white font-black text-xs flex items-center justify-center shadow">
                    amzn
                  </div>
                  <span className="text-xs font-bold text-gray-800">amazon</span>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-4 right-2 bg-white px-3 py-2 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2 group hover:scale-110 transition-transform"
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-yellow-400 font-black text-xs flex items-center justify-center shadow">
                    fk
                  </div>
                  <span className="text-xs font-bold text-gray-800">Flipkart</span>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-24 right-0 bg-white px-3 py-2 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2 group hover:scale-110 transition-transform"
                >
                  <div className="w-8 h-8 rounded-xl bg-pink-600 text-white font-black text-xs flex items-center justify-center shadow">
                    M
                  </div>
                  <span className="text-xs font-bold text-gray-800">Myntra</span>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1.5 }}
                  className="absolute top-28 right-0 bg-white px-3 py-2 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2 group hover:scale-110 transition-transform"
                >
                  <div className="w-8 h-8 rounded-xl bg-yellow-400 text-slate-950 font-black text-xs flex items-center justify-center shadow">
                    blk
                  </div>
                  <span className="text-xs font-bold text-gray-800">blinkit</span>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut", delay: 0.8 }}
                  className="absolute bottom-20 left-0 bg-white px-3 py-2 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2 group hover:scale-110 transition-transform"
                >
                  <div className="w-8 h-8 rounded-xl bg-purple-600 text-white font-black text-xs flex items-center justify-center shadow">
                    Z
                  </div>
                  <span className="text-xs font-bold text-gray-800">zepto</span>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 1.2 }}
                  className="absolute -bottom-2 left-1/3 bg-white px-3.5 py-2 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2 group hover:scale-110 transition-transform"
                >
                  <div className="w-8 h-8 rounded-xl bg-orange-600 text-white font-black text-xs flex items-center justify-center shadow">
                    S
                  </div>
                  <span className="text-xs font-bold text-gray-800">Swiggy</span>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
