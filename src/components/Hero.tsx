import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { profileData } from "../data/profile";
import profileImage from "../assets/nsprofile.jpg";
import { platformLogos } from "../data/logos";

interface HeroProps {
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects }) => {
  const floatingLogos = [
    { name: "Amazon", logo: platformLogos.Amazon, className: "top-2 left-2", animation: [0, -8, 0], duration: 4, delay: 0 },
    { name: "Flipkart", logo: platformLogos.Flipkart, className: "top-4 right-2", animation: [0, 8, 0], duration: 3.5, delay: 0.5 },
    { name: "Myntra", logo: platformLogos.Myntra, className: "bottom-24 right-0", animation: [0, -10, 0], duration: 4.5, delay: 1 },
    { name: "Blinkit", logo: platformLogos.Blinkit, className: "top-28 right-0", animation: [0, 10, 0], duration: 3.8, delay: 1.5 },
    { name: "Zepto", logo: platformLogos.Zepto, className: "bottom-20 left-0", animation: [0, -6, 0], duration: 3.2, delay: 0.8 },
    { name: "Swiggy", logo: platformLogos.Swiggy, className: "-bottom-2 left-1/3", animation: [0, 6, 0], duration: 4.2, delay: 1.2 },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-linear-to-b from-teal-50/40 via-white to-white"
    >
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
              <span>
                3+ Years Experience • Quick Commerce & Marketplace Specialist
              </span>
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
            {/* <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-gray-100 max-w-2xl">
              {profileData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-teal-50/50 p-3.5 rounded-2xl border border-teal-100/80 space-y-0.5"
                >
                  <div className="text-2xl font-extrabold text-teal-accent">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-gray-700 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-linear-to-tr from-teal-100 via-teal-50 to-white p-4 shadow-card border border-teal-200/50">
              <div className="w-full h-full rounded-2xl bg-white overflow-hidden shadow-inner relative flex flex-col justify-end p-6 bg-[radial-gradient(#0f969c_1px,transparent_1px)] [bg-size:16px_16px]">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="w-56 h-56 rounded-full bg-teal-500/10 flex items-center justify-center border-4 border-white shadow-xl overflow-hidden">
                    <img
                      src={profileImage}
                      alt="Nilam Shende1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Logos */}
                {floatingLogos.map((item) => (
                  <motion.div
                    key={item.name}
                    animate={{ y: item.animation }}
                    transition={{ repeat: Infinity, duration: item.duration, ease: "easeInOut", delay: item.delay }}
                    className={`absolute ${item.className} bg-white px-3 py-2 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center group hover:scale-110 transition-transform`}
                  >
                    <img src={item.logo} alt={`${item.name} logo`} className="w-16 h-10 object-contain" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
