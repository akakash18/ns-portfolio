export type NavigationItem = {
  id: string;
  label: string;
};

export type MarketplacePlatform = 
  | 'Amazon' 
  | 'Flipkart' 
  | 'Myntra' 
  | 'Blinkit' 
  | 'Zepto' 
  | 'Swiggy';

export type ProjectCategory = 
  | 'Amazon PPC & Ad Optimization' 
  | 'Account & Sales Management' 
  | 'Marketplace Operations & Catalog SEO' 
  | 'Business Analytics & Data Reporting';

export interface ScopeItem {
  number?: string;
  title: string;
  subItems?: string[];
}

export interface MetricCardData {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
}

export interface PlatformDetail {
  platform: MarketplacePlatform;
  platformTitle?: string;
  objective: string;
  scopeOfWork: ScopeItem[];
  results: string[];
  metrics?: MetricCardData[];
  chartData?: any[];
  tableData?: any[];
  storeBanner?: {
    title: string;
    subtitle?: string;
    discountTag?: string;
    imageUrl?: string;
    items?: Array<{
      name: string;
      originalPrice: string;
      discountPrice: string;
      discountTag: string;
      soldCount?: string;
      rating?: string;
    }>;
  };
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  platforms: PlatformDetail[];
}

export interface SkillCategory {
  title: string;
  skills: Array<{
    name: string;
    icon?: string;
    color?: string;
  }>;
}

export interface ExperienceItem {
  id: string;
  number: string;
  company: string;
  period: string;
  role: string;
  location?: string;
  responsibilities: string[];
  logoText?: string;
}

export interface EducationItem {
  id: string;
  period: string;
  institution: string;
  location?: string;
  major: string;
  details: string;
  badge: string;
  relevantCourses?: string[];
}
