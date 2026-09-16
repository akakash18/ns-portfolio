import type { SkillCategory } from '../types';

export interface ToolItem {
  name: string;
  category: string;
  description: string;
  icon: string;
  color: string;
}

export const toolsIWorkWith: ToolItem[] = [
  {
    name: "SellerSprite",
    category: "Data | Research | Optimization | Reporting",
    description: "Product Research & Market Analysis",
    icon: "search",
    color: "#0f969c"
  },
  {
    name: "Helium 10",
    category: "Keyword Research & Listing Optimization",
    description: "Keyword Research & ASIN Analysis",
    icon: "box",
    color: "#2563eb"
  },
  {
    name: "Jungle Scout",
    category: "Product Research & Market Insights",
    description: "Competitor Intelligence & Niche Analysis",
    icon: "compass",
    color: "#f97316"
  },
  {
    name: "Keepa",
    category: "Price Tracking & History",
    description: "Historical Price & BSR Analytics",
    icon: "trending-up",
    color: "#059669"
  },
  {
    name: "Amazon Seller Central",
    category: "Account Management & Reports",
    description: "PPC, Inventory, FBA & Brand Analytics",
    icon: "shopping-bag",
    color: "#ff9900"
  },
  {
    name: "Flipkart Seller Hub",
    category: "Account Management & Listings",
    description: "Catalog & Sales Operations",
    icon: "shopping-cart",
    color: "#2874f0"
  },
  {
    name: "Myntra",
    category: "Marketplace Operations",
    description: "Fashion & Lifestyle E-Commerce Operations",
    icon: "tag",
    color: "#e01931"
  },
  {
    name: "Blinkit",
    category: "Quick Commerce Operations",
    description: "Instant Delivery Catalog & Inventory Management",
    icon: "zap",
    color: "#f7c942"
  },
  {
    name: "Zepto",
    category: "Quick Commerce Operations",
    description: "Quick Commerce Catalog & Stock Alignment",
    icon: "clock",
    color: "#8b5cf6"
  },
  {
    name: "Swiggy Instamart",
    category: "Quick Commerce Operations",
    description: "Hyperlocal Quick Commerce Sales",
    icon: "truck",
    color: "#fc8019"
  },
  {
    name: "Microsoft Excel",
    category: "Data Analysis & Reporting",
    description: "Pivot Tables, VLOOKUP, Advanced Formulas",
    icon: "file-spreadsheet",
    color: "#107c41"
  },
  {
    name: "Google Sheets",
    category: "Reporting & Collaboration",
    description: "Live Data Analysis & Team Collaboration",
    icon: "file-text",
    color: "#0f9d58"
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    title: 'Marketplace & Account Management',
    skills: [
      { name: 'Account Management', color: '#0f969c' },
      { name: 'Marketplace Operations', color: '#0f969c' },
      { name: 'Amazon Seller Central', color: '#ff9900' },
      { name: 'Inventory Optimization', color: '#0f969c' },
      { name: 'Pricing & Competitor Analysis', color: '#0f969c' },
      { name: 'Portfolio Management', color: '#0f969c' }
    ]
  },
  {
    title: 'Sales & Business Analytics',
    skills: [
      { name: 'Sales Management', color: '#2563eb' },
      { name: 'Business Analytics', color: '#2563eb' },
      { name: 'Market Trend Analysis', color: '#2563eb' },
      { name: 'Performance Reporting', color: '#2563eb' },
      { name: 'Data Cleaning & Analysis', color: '#2563eb' },
      { name: 'Research & Reporting', color: '#2563eb' }
    ]
  },
  {
    title: 'Amazon PPC & Advertising',
    skills: [
      { name: 'Amazon Ads / AMS', color: '#ff9900' },
      { name: 'Amazon PPC', color: '#ff9900' },
      { name: 'Sponsored Products (SP)', color: '#ff9900' },
      { name: 'Sponsored Brands (SB)', color: '#ff9900' },
      { name: 'Sponsored Display (SD)', color: '#ff9900' },
      { name: 'Campaign Management', color: '#ff9900' },
      { name: 'Bid Optimization', color: '#ff9900' },
      { name: 'Keyword Research', color: '#ff9900' },
      { name: 'ASIN Analysis', color: '#ff9900' },
      { name: 'Helium 10', color: '#2563eb' },
      { name: 'SellerSprite', color: '#0f969c' }
    ]
  },
  {
    title: 'Catalog, SEO & Growth',
    skills: [
      { name: 'Product Listing Management', color: '#059669' },
      { name: 'Catalog Management', color: '#059669' },
      { name: 'Listing Search Optimization', color: '#059669' },
      { name: 'SEO & Keyword Research', color: '#059669' },
      { name: 'Content Optimization', color: '#059669' },
      { name: 'Pricing Strategy', color: '#059669' },
      { name: 'Competitor Analysis', color: '#059669' },
      { name: 'Digital Marketing', color: '#059669' }
    ]
  },
  {
    title: 'Data & Reporting Tools',
    skills: [
      { name: 'Microsoft Excel (Pivot Tables, VLOOKUP)', color: '#107c41' },
      { name: 'Google Sheets', color: '#0f9d58' },
      { name: 'Google Docs', color: '#4285f4' },
      { name: 'Microsoft Word', color: '#185abd' },
      { name: 'Microsoft PowerPoint', color: '#c43e1c' },
      { name: 'Data Analysis', color: '#107c41' },
      { name: 'Reporting & Dashboards', color: '#107c41' }
    ]
  },
  {
    title: 'Design & Productivity',
    skills: [
      { name: 'Photoshop', color: '#31a8ff' },
      { name: 'Adobe Illustrator', color: '#ff9a00' },
      { name: 'CorelDRAW', color: '#008000' },
      { name: 'QuillBot', color: '#44ad68' },
      { name: 'Google Slides', color: '#f4b400' },
      { name: 'Time Management', color: '#0f969c' },
      { name: 'Communication', color: '#0f969c' },
      { name: 'Problem Solving', color: '#0f969c' },
      { name: 'Work Ethic', color: '#0f969c' }
    ]
  }
];
