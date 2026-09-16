import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData, educationIntro } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching PDF Page 4 Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 space-y-3"
        >
          <span className="text-xs font-bold text-teal-accent uppercase tracking-wider block">
            MY ACADEMIC JOURNEY
          </span>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight">
            Academic <span className="text-teal-accent">Background</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed pt-2">
            {educationIntro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Degrees List */}
          <div className="lg:col-span-8 space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-teal-100 hover:shadow-xl hover:border-teal-accent/40 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  
                  {/* Period & Location Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 text-teal-800 font-bold text-xs">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </div>

                    {edu.location && (
                      <div className="inline-flex items-center gap-1.5 text-gray-500 font-semibold text-xs">
                        <MapPin className="w-4 h-4 text-teal-accent" />
                        <span>{edu.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Degree Name & Institution */}
                  <h3 className="text-2xl font-extrabold text-gray-900 leading-snug group-hover:text-teal-accent transition-colors">
                    {edu.major}
                  </h3>
                  <p className="text-teal-accent font-bold text-base mt-1">
                    {edu.institution}
                  </p>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-3">
                    {edu.details}
                  </p>

                  {/* Course Tags */}
                  {edu.relevantCourses && (
                    <div className="mt-5 pt-4 border-t border-gray-100">
                      <span className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-2">
                        Core Competencies & Courses:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevantCourses.map((course, cIdx) => (
                          <span 
                            key={cIdx}
                            className="px-3 py-1 bg-teal-50 text-teal-900 text-xs font-semibold rounded-lg border border-teal-100"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* Footer Badge */}
                <div className="mt-6 pt-4 border-t border-teal-50 flex items-center justify-between text-xs text-gray-500 font-semibold">
                  <span className="flex items-center gap-1.5 text-teal-accent">
                    <GraduationCap className="w-4 h-4" />
                    {edu.badge}
                  </span>
                  <span>Verified Degree</span>
                </div>

              </motion.div>
            ))}
          </div>

          {/* Right Column: Knowledge Card */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-gradient-to-br from-teal-900 to-slate-900 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center justify-center font-bold">
                <GraduationCap className="w-8 h-8" />
              </div>

              <blockquote className="text-lg font-medium leading-relaxed italic text-slate-200">
                "Education builds the foundation for a better future."
              </blockquote>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-teal-300">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Computer Applications & Science Foundation</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-teal-300">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Data Analysis & Logic Building</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-teal-300">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Technology & Marketplace Operations</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-teal-accent text-white flex items-center justify-center font-extrabold text-sm">
                N
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Knowledge Drives</span>
                <span className="text-xs font-bold text-teal-400 block uppercase">Opportunities</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
