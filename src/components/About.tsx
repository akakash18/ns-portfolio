import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, UserCheck, Sparkles, X } from 'lucide-react';
import { profileData } from '../data/profile';
import profileImage from '../assets/nsprofile.jpg';

export const About: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="about" className="py-20 sm:py-24 bg-white relative overflow-hidden border-b border-teal-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quick Stats Bar Top matching PDF Page 2 UI */}
        <div className="mb-12 sm:mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-teal-50/70 p-5 sm:p-6 rounded-3xl border-2 border-teal-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-accent text-white font-black text-sm flex items-center justify-center">
              3+
            </div>
            <div>
              <div className="text-sm font-extrabold text-gray-900">Years of Experience</div>
              <div className="text-xs text-gray-500">Marketplace & Quick Commerce</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-accent text-white font-black text-sm flex items-center justify-center">
              6+
            </div>
            <div>
              <div className="text-sm font-extrabold text-gray-900">Platforms Managed</div>
              <div className="text-xs text-gray-500">Amazon, Flipkart, Quick Commerce</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-accent text-white font-black text-sm flex items-center justify-center">
              100+
            </div>
            <div>
              <div className="text-sm font-extrabold text-gray-900">Products Handled</div>
              <div className="text-xs text-gray-500">Active SKUs & Catalog Optimization</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-accent text-white font-black text-sm flex items-center justify-center">
              <TrendingUpIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-gray-900">Growth Focus</div>
              <div className="text-xs text-gray-500">Data-Driven Analytics & PPC</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="text-teal-accent font-extrabold text-sm uppercase tracking-wider block mb-1">
                E-Commerce & Quick Commerce Specialist
              </span>
              <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight">
                Hello, <br />
                <span className="text-teal-accent">I'm {profileData.shortName}</span>
              </h2>
              <p className="text-lg font-bold text-gray-700 mt-2">
                E-commerce & Marketplace Specialist
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              {profileData.aboutBio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-teal-50/70 p-4 rounded-xl border border-teal-200">
                <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Account & Sales Management</h4>
                  <p className="text-xs text-gray-600">End-to-end marketplace operations across top platforms.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-teal-50/70 p-4 rounded-xl border border-teal-200">
                <UserCheck className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Amazon PPC & Ads Certification</h4>
                  <p className="text-xs text-gray-600">SP/SB/SD bid optimization, Helium 10 & ACOS reduction.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-bold rounded-xl hover:bg-gray-900 hover:text-white transition-all shadow-sm active:scale-95"
              >
                <span>Read Full Background</span>
                <Sparkles className="w-4 h-4 text-teal-accent" />
              </button>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="aspect-4/5 rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-slate-100 relative group">
                <img 
                  src={profileImage}
                  alt="Nilam Shende Portrait"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 via-transparent to-transparent opacity-60" />
                
                {/* Data Driven Badge matching PDF Page 2 screenshot */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white shadow-lg flex items-center justify-between text-gray-900">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-accent block">Data Driven</span>
                    <h4 className="text-sm font-black">Growth Focused</h4>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-teal-accent text-white flex items-center justify-center font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Expanded Bio Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-accent text-white flex items-center justify-center font-black text-xl">
                N
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Nilam Shende</h3>
                <p className="text-sm text-teal-accent font-semibold">E-Commerce & Quick Commerce Specialist</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base border-t border-b border-gray-100 py-4">
              <p>
                Experienced E-commerce & Marketplace Specialist with <strong>3+ years of hands-on expertise</strong> managing marketplace accounts, PPC advertising, sales analytics, and catalog operations across Amazon, Flipkart, Myntra, Blinkit, Zepto, and Swiggy.
              </p>

              <h4 className="font-bold text-gray-900">Key Expertise Highlights:</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                <li><strong>Amazon PPC Optimization:</strong> Conducting bid adjustments, keyword research using Helium 10 & SellerSprite, and successfully reducing monthly ad ACOS from 94% to 43%.</li>
                <li><strong>Account & Sales Management:</strong> End-to-end account handling across Amazon, Flipkart, Myntra, Blinkit, Zepto, and Swiggy.</li>
                <li><strong>Listing Search Optimization (LSO):</strong> Keyword insertion, title/bullet point optimization, backend search terms, and coupon promotion strategy.</li>
                <li><strong>Data Analytics & Excel:</strong> Advanced Pivot Tables, VLOOKUP formulas, data sorting, cleaning, and weekly/monthly performance recaps.</li>
              </ul>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setModalOpen(false)}
                className="px-6 py-2.5 bg-teal-accent text-white font-bold rounded-xl hover:bg-teal-dark transition-colors"
              >
                Close Profile Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

function TrendingUpIcon(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}
