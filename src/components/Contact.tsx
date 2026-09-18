import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUp, FileText, Copy, Check, Share2, Globe, MapPin, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { profileData } from '../data/profile';
import { ResumeModal } from './ResumeModal';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopiedEmail(true);
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleOpenResume = () => {
    confetti({ particleCount: 70, spread: 80, origin: { y: 0.7 } });
    setResumeOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white relative overflow-hidden border-b border-teal-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Copy, Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="text-6xl sm:text-7xl font-extrabold text-teal-accent tracking-wider uppercase">
              CONTACT
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed font-medium max-w-xl">
              {profileData.callToAction}
            </p>

            {/* Certifications Badge */}
            <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-accent text-white flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-accent block">Verified Certification</span>
                <span className="text-sm font-extrabold text-gray-900 block">Amazon Ads Certification (Basic & Advanced)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={handleOpenResume}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-teal-accent text-white font-extrabold text-base shadow-lg shadow-teal-500/30 hover:bg-teal-dark transition-all duration-200 active:scale-95"
              >
                <FileText className="w-5 h-5" />
                <span>View Full Resume</span>
              </button>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl border-2 border-teal-accent text-teal-accent font-extrabold text-base hover:bg-teal-50 transition-all duration-200 active:scale-95"
              >
                <span>Back Top</span>
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 bg-teal-50/70 p-6 sm:p-8 lg:p-10 rounded-3xl border-2 border-teal-200 shadow-card space-y-6"
          >
            
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-teal-accent flex items-center justify-center shadow-sm border border-teal-100 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1 flex-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Email :</span>
                <div className="flex items-center justify-between gap-2">
                  <a 
                    href={`mailto:${profileData.contact.email}`}
                    className="text-base sm:text-lg font-extrabold text-gray-900 hover:text-teal-accent underline underline-offset-4 break-all"
                  >
                    {profileData.contact.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-teal-accent hover:bg-white rounded-lg transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-teal-accent flex items-center justify-center shadow-sm border border-teal-100 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Phone :</span>
                <div>
                  <a 
                    href={`https://wa.me/${profileData.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-extrabold text-gray-900 hover:text-teal-accent underline underline-offset-4"
                  >
                    {profileData.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-teal-accent flex items-center justify-center shadow-sm border border-teal-100 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Location :</span>
                <div className="text-base font-extrabold text-gray-900">
                  {profileData.contact.location}
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-teal-accent flex items-center justify-center shadow-sm border border-teal-100 shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">LinkedIn Profile :</span>
                <div>
                  <a 
                    href={profileData.contact.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-extrabold text-gray-900 hover:text-teal-accent underline underline-offset-4 break-all"
                  >
                    {profileData.contact.linkedin}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-4 border-t border-teal-100/80 flex items-center gap-4">
              <a
                href={profileData.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white border-2 border-teal-accent text-teal-accent flex items-center justify-center hover:bg-teal-accent hover:text-white transition-all shadow-md group"
                title="LinkedIn Profile"
              >
                <Share2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={`mailto:${profileData.contact.email}`}
                className="w-12 h-12 rounded-2xl bg-white border-2 border-teal-accent text-teal-accent flex items-center justify-center hover:bg-teal-accent hover:text-white transition-all shadow-md group"
                title="Send Email"
              >
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={`https://wa.me/${profileData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white border-2 border-teal-accent text-teal-accent flex items-center justify-center hover:bg-teal-accent hover:text-white transition-all shadow-md group"
                title="WhatsApp Contact"
              >
                <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Resume / CV Modal */}
      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}

    </section>
  );
};
