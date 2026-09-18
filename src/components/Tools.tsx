import React from 'react';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';
import { toolsIWorkWith } from '../data/skills';
import { toolLogos } from '../data/logos';

export const Tools: React.FC = () => {
  return (
    <section id="tools" className="py-20 sm:py-24 bg-teal-50/40 relative overflow-hidden border-b border-teal-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching PDF Page 2 UI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Wrench className="w-4 h-4 text-teal-accent" />
            <span>Marketplace Tech Stack</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Tools & Software <span className="text-teal-accent">I Work With</span>
          </h2>
          <p className="text-gray-600 text-base font-medium">
            Data | Research | Optimization | Reporting
          </p>
        </motion.div>

        {/* Tools Cards Grid matching PDF Page 2 UI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {toolsIWorkWith.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-5 shadow-card border-2 border-teal-200 hover:shadow-xl hover:border-teal-accent transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center font-black text-white text-base shadow-sm group-hover:scale-110 transition-transform overflow-hidden bg-white border border-gray-200"
                    style={toolLogos[tool.name] ? undefined : { backgroundColor: tool.color }}
                  >
                    {toolLogos[tool.name] ? (
                      <img src={toolLogos[tool.name]} alt={`${tool.name} logo`} className="w-full h-full p-1.5 object-contain" />
                    ) : (
                      tool.name.slice(0, 2).toUpperCase()
                    )}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-accent bg-teal-50 px-2 py-1 rounded-md">
                    Verified
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-teal-accent transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs font-semibold text-teal-accent mt-0.5">
                  {tool.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-medium text-gray-500">
                {tool.category}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
