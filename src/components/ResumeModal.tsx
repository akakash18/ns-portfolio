import React from 'react';
import { X, Download, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, CheckCircle, Globe } from 'lucide-react';
import { profileData } from '../data/profile';
import { experienceData } from '../data/experience';
import { educationData } from '../data/education';

interface ResumeModalProps {
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl max-w-4xl w-full my-auto overflow-hidden shadow-2xl border border-gray-100 relative max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-slate-900 text-white p-6 sm:p-8 relative flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-3xl font-extrabold">{profileData.name}</h2>
            <p className="text-teal-300 font-semibold text-sm">{profileData.title}</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl flex items-center gap-2 border border-white/20 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Print / Download CV</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* CV Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 text-gray-800">
          
          {/* Contact Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-teal-50/60 rounded-2xl border border-teal-100 text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-teal-accent" />
              <span>{profileData.contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-teal-accent" />
              <span>{profileData.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-teal-accent" />
              <span>{profileData.contact.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-teal-accent" />
              <a href={profileData.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {profileData.contact.linkedin}
              </a>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-2">
              <Award className="w-5 h-5 text-teal-accent" />
              <span>Profile Summary</span>
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Experienced in PPC campaign optimization and data analysis for driving revenue growth. Skilled in maximizing ROI through strategic insights and effective communication. Skilled in improving campaign performance through ASIN analysis, budget control, Helium 10 research, strategic optimization, and portfolio management. Experienced in increasing sales for low-performing products while reducing ACOS and improving ROAS. Proficient in Excel and reporting tools for accurate performance tracking and data-driven decision-making.
            </p>
          </div>

          {/* Certification */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-2">
              <Award className="w-5 h-5 text-teal-accent" />
              <span>Certification</span>
            </h3>
            <div className="p-3 bg-teal-50 rounded-xl border border-teal-100 text-xs sm:text-sm font-bold text-teal-950 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-teal-accent" />
              <span>Amazon Ads Certification (Basic & Advanced)</span>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-2">
              <Briefcase className="w-5 h-5 text-teal-accent" />
              <span>Professional Experience</span>
            </h3>

            <div className="space-y-6">
              {experienceData.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between border-b border-gray-100 pb-1">
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">{exp.company} — <span className="text-teal-accent text-sm font-semibold">{exp.role}</span></h4>
                      {exp.location && <span className="text-xs text-gray-500 font-medium">{exp.location}</span>}
                    </div>
                    <span className="text-xs font-bold text-gray-700 bg-gray-100 px-3 py-1 rounded-full">{exp.period}</span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-gray-600 pl-4 list-disc">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-2">
              <GraduationCap className="w-5 h-5 text-teal-accent" />
              <span>Education</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {educationData.map((edu) => (
                <div key={edu.id} className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-teal-accent">{edu.period}</span>
                    <span className="text-[10px] font-bold text-gray-400">{edu.location}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">{edu.major}</h4>
                  <p className="text-xs text-gray-600 italic">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Key Skills Summary */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-2">
              <CheckCircle className="w-5 h-5 text-teal-accent" />
              <span>Key Technical Tools & Skills</span>
            </h3>

            <div className="flex flex-wrap gap-2">
              {['Account Management', 'SEO', 'Amazon Marketing Services (AMS)', 'Pay Per Click', 'Amazon Ads Console', 'Amazon Seller Central', 'Amazon Advertisement', 'Keyword Research', 'Google Sheets, Docs', 'Inventory Optimization', 'Amazon PPC', 'Campaign Management', 'Helium 10', 'SellerSprite', 'Microsoft Excel (Pivot Tables, VLOOKUP)', 'Photoshop', 'Adobe Illustrator', 'CorelDraw', 'QuillBot'].map((sk, idx) => (
                <span key={idx} className="px-3 py-1 bg-teal-50 text-teal-900 text-xs font-semibold rounded-lg border border-teal-100">
                  {sk}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-900 text-white font-bold text-xs rounded-xl hover:bg-gray-800 transition-colors"
          >
            Close Resume
          </button>
        </div>

      </div>
    </div>
  );
};
