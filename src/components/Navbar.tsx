import React, { useState, useEffect } from "react";
import { LayoutGrid, Presentation, Menu, X } from "lucide-react";
import { profileData } from "../data/profile";
import profileImage from "../assets/nsprofile.jpg";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  viewMode: "web" | "presentation";
  onToggleViewMode: () => void;
}

const navItems = [
  { id: "about", label: "About Me" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skill's" },
  { id: "tools", label: "Tools" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  viewMode,
  onToggleViewMode,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white py-4"
      }`}
    >
      {/* Top Teal Accent Line (Matching PDF header style) */}
      <div className="absolute top-0 left-0 w-1/3 h-1 bg-teal-accent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <button
            onClick={() => onNavigate("hero")}
            className="flex items-center gap-3 text-left group"
          >
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-md group-hover:scale-105 transition-transform">
              <img
                src={profileImage}
                alt={profileData.shortName}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <span className="font-extrabold text-gray-900 text-lg tracking-tight block leading-none">
                {profileData.shortName}
              </span>
              <span className="text-xs text-teal-accent font-semibold">
                {profileData.title}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-sm font-semibold transition-colors duration-200 relative py-1 ${
                    isActive
                      ? "text-teal-accent font-bold"
                      : "text-gray-700 hover:text-teal-accent"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-accent rounded-full animate-fade-in" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* View Mode Switcher Button (PDF Presentation Mode vs Web View) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onToggleViewMode}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide border-2 border-teal-accent text-teal-accent hover:bg-teal-accent hover:text-white transition-all shadow-sm active:scale-95"
              title="Toggle between PDF Slide Presentation Mode and Web Portfolio"
            >
              {viewMode === "web" ? (
                <>
                  <Presentation className="w-4 h-4" />
                  <span>PDF Slide Mode</span>
                </>
              ) : (
                <>
                  <LayoutGrid className="w-4 h-4" />
                  <span>Web Scroll Mode</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onToggleViewMode}
              className="p-2 text-teal-accent border border-teal-accent rounded-lg text-xs font-bold flex items-center gap-1"
              title="Toggle Mode"
            >
              {viewMode === "web" ? (
                <Presentation className="w-4 h-4" />
              ) : (
                <LayoutGrid className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-teal-accent"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2 px-3 rounded-md text-base font-semibold ${
                activeSection === item.id
                  ? "bg-teal-50 text-teal-accent font-bold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
