import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle, ArrowRight, MapPin, Award } from 'lucide-react';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-teal-50/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 space-y-2"
        >
          <span className="text-xs font-bold text-teal-accent uppercase tracking-wider block">
            CAREER JOURNEY
          </span>
          <div className="flex items-center gap-4">
            <h2 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight uppercase leading-none">
              PROFESSIONAL <br />
              <span className="text-teal-accent">EXPERIENCE</span>
            </h2>
            <ArrowRight className="w-12 h-12 text-teal-accent hidden sm:block" />
          </div>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-gray-100 hover:border-teal-accent/40 shadow-card hover:shadow-2xl transition-all duration-300 relative group"
            >
              <div>
                
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between border-b border-gray-100 pb-6 mb-6 gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="text-4xl font-black text-gray-900 group-hover:text-teal-accent transition-colors">
                        {exp.number}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                        {exp.company}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="text-teal-accent font-extrabold text-base">
                        {exp.role}
                      </span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                          <MapPin className="w-3.5 h-3.5 text-teal-accent" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="px-4 py-2 rounded-full bg-teal-100 text-teal-900 text-xs font-bold border border-teal-200 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Key Accomplishment Banner for Seller Drive */}
                {exp.id === 'seller-drive' && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold text-xs sm:text-sm flex items-center gap-3">
                    <Award className="w-6 h-6 text-emerald-600 shrink-0" />
                    <span>Key Highlight: Successfully reduced monthly ad ACOS from 94% to 43% through strategic bid optimization, Helium 10 ASIN research, and targeted keyword selection.</span>
                  </div>
                )}

                {/* Bullet Points */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-gray-700 text-sm leading-relaxed">
                  {exp.responsibilities.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-teal-accent shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-teal-accent" />
                  Marketplace Analytics & PPC Specialist Role
                </span>
                <span className="text-teal-accent font-bold">Verified Experience</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
