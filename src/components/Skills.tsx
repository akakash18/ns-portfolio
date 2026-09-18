import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  UserRound,
  Store,
  PackageSearch,
  Tags,
  BriefcaseBusiness,
  BarChart3,
  ChartColumn,
  TrendingUp,
  FileBarChart,
  Database,
  Search,
  Megaphone,
  Target,
  BadgeDollarSign,
  MousePointerClick,
  SearchCode,
  ScanSearch,
  Layers,
  ListChecks,
  Library,
  SearchCheck,
  FilePenLine,
  TrendingUp as GrowthIcon,
  TableProperties,
  Sheet,
  FileText,
  FileType2,
  Presentation,
  ChartNoAxesCombined,
  LayoutDashboard,
  Image,
  PenTool,
  Shapes,
  Feather,
  Clock3,
  MessagesSquare,
  Lightbulb,
  ShieldCheck,
  Circle,
  type LucideIcon,
} from "lucide-react";

import { skillCategoriesData } from "../data/skills";

const skillIcons: Record<string, LucideIcon> = {
  // Marketplace & Account Management
  "Account Management": UserRound,
  "Marketplace Operations": Store,
  "Amazon Seller Central": ShoppingBag,
  "Inventory Optimization": PackageSearch,
  "Pricing & Competitor Analysis": Tags,
  "Portfolio Management": BriefcaseBusiness,

  // Sales & Business Analytics
  "Sales Management": ChartColumn,
  "Business Analytics": BarChart3,
  "Market Trend Analysis": TrendingUp,
  "Performance Reporting": FileBarChart,
  "Data Cleaning & Analysis": Database,
  "Research & Reporting": Search,

  // Amazon PPC & Advertising
  "Amazon Ads / AMS": Megaphone,
  "Amazon PPC": Target,
  "Sponsored Products (SP)": ShoppingBag,
  "Sponsored Brands (SB)": Store,
  "Sponsored Display (SD)": MousePointerClick,
  "Campaign Management": Layers,
  "Bid Optimization": BadgeDollarSign,
  "Keyword Research": SearchCode,
  "ASIN Analysis": ScanSearch,
  "Helium 10": Search,
  SellerSprite: SearchCheck,

  // Catalog, SEO & Growth
  "Product Listing Management": ListChecks,
  "Catalog Management": Library,
  "Listing Search Optimization": SearchCheck,
  "SEO & Keyword Research": SearchCode,
  "Content Optimization": FilePenLine,
  "Pricing Strategy": BadgeDollarSign,
  "Competitor Analysis": ScanSearch,
  "Digital Marketing": GrowthIcon,

  // Data & Reporting Tools
  "Microsoft Excel (Pivot Tables, VLOOKUP)": TableProperties,
  "Google Sheets": Sheet,
  "Google Docs": FileText,
  "Microsoft Word": FileType2,
  "Microsoft PowerPoint": Presentation,
  "Data Analysis": ChartNoAxesCombined,
  "Reporting & Dashboards": LayoutDashboard,

  // Design & Productivity
  Photoshop: Image,
  "Adobe Illustrator": PenTool,
  CorelDRAW: Shapes,
  QuillBot: Feather,
  "Google Slides": Presentation,
  "Time Management": Clock3,
  Communication: MessagesSquare,
  "Problem Solving": Lightbulb,
  "Work Ethic": BriefcaseBusiness,
};

const categoryIcons: Record<string, LucideIcon> = {
  "Marketplace & Account Management": ShoppingBag,
  "Sales & Business Analytics": BarChart3,
  "Amazon PPC & Advertising": Megaphone,
  "Catalog, SEO & Growth": Search,
  "Data & Reporting Tools": TableProperties,
  "Design & Productivity": BriefcaseBusiness,
};

export const Skills: React.FC = () => {
  const getCategoryHeaderIcon = (title: string) => {
    const Icon = categoryIcons[title] || Circle;

    return (
      <Icon
        className="w-6 h-6"
        style={{
          color:
            skillCategoriesData.find((category) => category.title === title)
              ?.skills[0]?.color || "#0f969c",
        }}
        aria-hidden="true"
      />
    );
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-b border-teal-200/80 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl space-y-3 sm:mb-14"
        >
          <span className="block text-xs font-bold uppercase tracking-wider text-teal-accent">
            MY PROFESSIONAL SKILLS
          </span>

          <h2 className="text-5xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-6xl">
            Skills & <span className="text-teal-accent">Expertise</span>
          </h2>

          <p className="mt-3 text-base font-medium text-gray-600 sm:text-lg">
            A comprehensive set of skills built through real-world experience in
            E-commerce, Quick Commerce, Marketplace Management, and Business
            Analytics.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategoriesData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="group flex flex-col justify-between rounded-3xl border-2 border-teal-200 bg-white p-6 shadow-card transition-all hover:border-teal-accent hover:shadow-xl sm:p-7"
            >
              <div>
                {/* Category Header */}
                <div className="mb-5 flex items-center gap-3 border-b border-gray-100 pb-3">
                  <div className="rounded-2xl border border-teal-200 bg-teal-50 p-2.5 transition-transform group-hover:scale-110">
                    {getCategoryHeaderIcon(category.title)}
                  </div>

                  <h3 className="text-lg font-extrabold leading-snug text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  {category.skills.map((skill) => {
                    const Icon = skillIcons[skill.name] || Circle;

                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50/80 px-3 py-2.5 text-xs font-bold text-gray-800 transition-all hover:border-teal-300 hover:bg-teal-50/70"
                      >
                        <Icon
                          className="h-4 w-4 shrink-0"
                          style={{
                            color: skill.color || "#0f969c",
                          }}
                          strokeWidth={2.25}
                          aria-hidden="true"
                        />

                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-gray-200 pt-4 text-[11px] font-semibold text-gray-500">
                <span className="flex items-center gap-1 text-teal-accent">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
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
