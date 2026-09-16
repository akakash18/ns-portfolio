import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  BarChart3, 
  Megaphone, 
  Search, 
  FileSpreadsheet, 
  Palette, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { skillCategoriesData } from '../data/skills';

export const Skills: React.FC = () => {

  const getCategoryHeaderIcon = (title: string) => {
    switch (title) {
      case 'Marketplace & Account Management':
        return <ShoppingBag className="w-6 h-6 text-teal-accent" />;
      case 'Sales & Business Analytics':
        return <BarChart3 className="w-6 h-6 text-blue-600" />;
      case 'Amazon PPC & Advertising':
        return <Megaphone className="w-6 h-6 text-amber-500" />;
      case 'Catalog, SEO & Growth':
        return <Search className="w-6 h-6 text-emerald-600" />;
      case 'Data & Reporting Tools':
        return <FileSpreadsheet className="w-6 h-6 text-emerald-700" />;
      case 'Design & Productivity':
        return <Palette className="w-6 h-6 text-purple-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-teal-accent" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching PDF Page 4 Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 space-y-3"
        >
          <span className="text-xs font-bold text-teal-accent uppercase tracking-wider block">
            MY PROFESSIONAL SKILLS
          </span>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight leading-none">
            Skills & <span className="text-teal-accent">Expertise</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-3 font-medium">
            A comprehensive set of skills built through real-world experience in E-commerce, Quick Commerce, Marketplace Management, and Business Analytics.
          </p>
        </motion.div>

        {/* 6 Skill Categories Grid matching PDF Page 4 Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategoriesData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-teal-100 hover:border-teal-accent/40 flex flex-col justify-between hover:shadow-xl transition-all group"
            >
              <div>
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gray-100">
                  <div className="p-2.5 rounded-2xl bg-teal-50 border border-teal-100 group-hover:scale-110 transition-transform">
                    {getCategoryHeaderIcon(category.title)}
                  </div>
                  <h3 className="text-lg font-extrabold text-gray-900 leading-snug">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gray-50 border border-gray-100 hover:bg-teal-50/60 hover:border-teal-200 transition-all text-xs font-bold text-gray-800"
                    >
                      <div 
                        className="w-2.5 h-2.5 rounded-full shrink-0" 
                        style={{ backgroundColor: skill.color || '#0f969c' }} 
                      />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-50 text-center flex items-center justify-between text-[11px] text-gray-400 font-semibold">
                <span className="flex items-center gap-1 text-teal-accent">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Skill
                </span>
                <span>Practical Mastery</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
