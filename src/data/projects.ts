import type { ProjectData } from '../types';

export const projectsData: ProjectData[] = [
  {
    id: 'amazon-ppc-optimization',
    title: 'AMAZON PPC & AD OPTIMIZATION',
    subtitle: 'Strategic Campaign Scaling & ACOS Reduction (94% → 43%)',
    description: 'Data-driven PPC campaign management using Helium 10, bid optimization, and keyword targeting across Sponsored Products, Brands, and Display.',
    category: 'Amazon PPC & Ad Optimization',
    platforms: [
      {
        platform: 'Amazon',
        platformTitle: 'Amazon Advertising / AMS',
        objective: 'Reduce ACOS from 94% to 43% and scale ad-generated revenue',
        scopeOfWork: [
          {
            title: 'Campaign Architecture & Setup',
            subItems: [
              'Sponsored Products (SP), Sponsored Brands (SB), and Sponsored Display (SD) campaign structure',
              'Exact, Phrase, Broad match type segmentation and negative keyword isolation',
              'Product targeting and placement bid adjustment (+50% Top of Search)'
            ]
          },
          {
            title: 'Helium 10 & ASIN Intelligence',
            subItems: [
              'Deep keyword harvesting using Cerebro & Magnet tools',
              'Competitor ASIN reverse lookup to capture market share',
              'Eliminated non-converting & wasteful search query spend'
            ]
          },
          {
            title: 'Bid Optimization & Portfolio Management',
            subItems: [
              'Dynamic bidding strategies (Up & Down, Down Only)',
              'Weekly bid adjustments based on Target ACOS & CVR thresholds',
              'Seasonal campaign budget reallocation'
            ]
          },
          { title: 'Performance Reporting & ACOS Tracking' }
        ],
        results: [
          'Successfully reduced monthly ad ACOS from 94% to 43%',
          'Improved overall ROAS from 1.06x to 2.32x within 60 days',
          'Increased ad-attributed orders by +145% while decreasing cost-per-click'
        ],
        metrics: [
          { label: 'Monthly ACOS', value: '43%', change: '-51% reduction (from 94%)', isPositive: true },
          { label: 'Ad Revenue', value: '₹4,85,000', change: '+145% growth', isPositive: true },
          { label: 'ROAS', value: '2.32x', change: '+118% increase', isPositive: true },
          { label: 'Targeting Efficiency', value: '92%', change: 'Waste eliminated', isPositive: true }
        ],
        chartData: [
          { month: 'Month 1', acos: 94, roas: 1.06, sales: 120000 },
          { month: 'Month 2', acos: 72, roas: 1.38, sales: 210000 },
          { month: 'Month 3', acos: 58, roas: 1.72, sales: 340000 },
          { month: 'Month 4', acos: 48, roas: 2.08, sales: 420000 },
          { month: 'Month 5', acos: 43, roas: 2.32, sales: 485000 }
        ]
      },
      {
        platform: 'Flipkart',
        platformTitle: 'Flipkart PLA & PCA Campaigns',
        objective: 'Maximize Product Listing Ads (PLA) ROAS & Brand Visibility',
        scopeOfWork: [
          { title: 'Product Listing Ads (PLA) keyword targeting & category bidding' },
          { title: 'CPC optimization and budget cap setting for high ROI' },
          { title: 'Festive sale campaign preparation (Big Billion Days & Big Savings)' },
          { title: 'ROI tracking and listing quality score improvement' }
        ],
        results: [
          'Achieved 3.8x ROAS on Flipkart PLA campaigns',
          'Scaled monthly campaign sales by +110%',
          'Lowered average CPC by 28% through targeted keyword filtering'
        ],
        metrics: [
          { label: 'Campaign ROAS', value: '3.80x', change: '+85% increase', isPositive: true },
          { label: 'PLA Ad Sales', value: '₹3,20,000', change: '+110% growth', isPositive: true },
          { label: 'Click Conversion', value: '4.85%', change: '+1.2%', isPositive: true }
        ]
      }
    ]
  },

  {
    id: 'account-sales-management',
    title: 'ACCOUNT & SALES MANAGEMENT',
    subtitle: 'Multi-Channel Sales Scaling across E-Commerce & Quick Commerce',
    description: 'End-to-end account management, inventory optimization, and sales trend analysis across Amazon, Flipkart, Myntra, Blinkit, Zepto, and Swiggy.',
    category: 'Account & Sales Management',
    platforms: [
      {
        platform: 'Amazon',
        platformTitle: 'Amazon Seller Central Account Management',
        objective: 'Drive revenue growth, maintain account health, and optimize FBA inventory',
        scopeOfWork: [
          {
            title: 'Inventory & FBA Management',
            subItems: [
              'Restock forecasting based on run-rate and lead times',
              'FBA stranded inventory resolution and IPI score optimization',
              'Out-of-stock prevention for top 100+ SKUs'
            ]
          },
          { title: 'Pricing & Buy Box Strategy' },
          { title: 'Listing Audit & Suppression Fixes' },
          { title: 'Account Health Monitoring & Case Management' }
        ],
        results: [
          'Maintained 99%+ Account Health rating on Seller Central',
          'Achieved 91% Buy Box share across core product catalog',
          'Eliminated inventory stockouts during peak quarter'
        ],
        metrics: [
          { label: 'Buy Box Win Rate', value: '91%', change: '+14% improvement', isPositive: true },
          { label: 'Account Health', value: '100 / 100', change: 'Top Tier', isPositive: true },
          { label: 'In-Stock Rate', value: '98.5%', change: '+8.2%', isPositive: true }
        ]
      },
      {
        platform: 'Flipkart',
        platformTitle: 'Flipkart Seller Hub Operations',
        objective: 'Expand catalog footprint and optimize fulfillment performance',
        scopeOfWork: [
          { title: 'Flipkart Smart & Assured badge compliance' },
          { title: 'Order processing, dispatch SLA adherence, and returns reduction' },
          { title: 'Pricing competitiveness and promotions alignment' }
        ],
        results: [
          'Secured Flipkart Assured status for 85+ active listings',
          'Reduced customer return rate (RTO) by 32%',
          'Increased monthly sales velocity by 68%'
        ],
        metrics: [
          { label: 'Flipkart Assured SKUs', value: '85+', change: '+40 SKUs', isPositive: true },
          { label: 'SLA Fulfillment', value: '99.2%', change: '+2.1%', isPositive: true },
          { label: 'RTO Reduction', value: '32%', change: 'Cost saved', isPositive: true }
        ]
      },
      {
        platform: 'Blinkit',
        platformTitle: 'Blinkit Quick Commerce Operations',
        objective: 'Accelerate dark-store stocking and instant delivery conversion',
        scopeOfWork: [
          { title: 'Dark store location-wise inventory alignment' },
          { title: 'PO creation, inward tracking, and filler-rate optimization' },
          { title: 'High-visibility bundle creation for quick replenishment' }
        ],
        results: [
          'Expanded dark-store presence to 120+ micro-warehouses',
          'Improved product fill rate to 96.4%',
          'Achieved 140% MOM order volume growth on Quick Commerce'
        ],
        metrics: [
          { label: 'Dark Stores Active', value: '120+', change: '+45 stores', isPositive: true },
          { label: 'Fill Rate', value: '96.4%', change: '+12%', isPositive: true },
          { label: 'MOM Growth', value: '+140%', change: 'Quick Commerce', isPositive: true }
        ]
      },
      {
        platform: 'Zepto',
        platformTitle: 'Zepto Seller Partner Management',
        objective: 'Fast-track product onboarding and inventory turnaround',
        scopeOfWork: [
          { title: 'Catalog creation & quick commerce listing compliance' },
          { title: 'Demand forecasting & stock allocation per region' },
          { title: 'Promotional banner placements for instant checkout' }
        ],
        results: [
          'Achieved zero out-of-stock on top 20 fast-moving SKUs',
          'Increased daily order velocity by 3.2x'
        ],
        metrics: [
          { label: 'Order Velocity', value: '3.2x', change: '+220%', isPositive: true },
          { label: 'Catalog Accuracy', value: '100%', change: 'Verified', isPositive: true }
        ]
      },
      {
        platform: 'Swiggy',
        platformTitle: 'Swiggy Instamart Brand Growth',
        objective: 'Maximize quick commerce market share & basket size',
        scopeOfWork: [
          { title: 'Instamart merchant portal operations & stock syncing' },
          { title: 'Visibility deals & flash discount execution' }
        ],
        results: [
          'Grew monthly GMV by 115% on Swiggy Instamart'
        ],
        metrics: [
          { label: 'Monthly GMV', value: '₹2,90,000', change: '+115%', isPositive: true }
        ]
      }
    ]
  },

  {
    id: 'operations-catalog-seo',
    title: 'MARKETPLACE OPERATIONS & CATALOG SEO',
    subtitle: 'Listing Search Optimization (LSO), Content, & Keyword Expansion',
    description: 'Optimizing product titles, bullet points, backend search terms, A+ content, and coupon strategies to drive organic ranking and conversion.',
    category: 'Marketplace Operations & Catalog SEO',
    platforms: [
      {
        platform: 'Amazon',
        platformTitle: 'Amazon Listing Search Optimization (LSO)',
        objective: 'Rank listings on Page 1 for high-intent seed keywords',
        scopeOfWork: [
          {
            title: 'Keyword Research & Insertion',
            subItems: [
              'Extracted high-volume search terms using Helium 10 Magnet & Cerebro',
              'Optimized Product Titles (Brand + Core Keyword + Specification + Variant)',
              'Re-wrote Bullet Points focusing on benefits, specs, and secondary keywords',
              'Populated 249-byte backend search terms with non-duplicated phrases'
            ]
          },
          { title: 'Coupon & Promotion Strategy Planning' },
          { title: 'Pricing & Competitor Price Tracking' }
        ],
        results: [
          'Ranked 14 primary keywords on Page 1 within 45 days',
          'Increased organic listing conversion rate from 8.2% to 14.6%',
          'Coupon promotions generated +65% redemption velocity lift'
        ],
        metrics: [
          { label: 'Organic Conversion', value: '14.6%', change: '+6.4% increase', isPositive: true },
          { label: 'Page 1 Keywords', value: '14 Terms', change: '+10 new terms', isPositive: true },
          { label: 'Coupon Sales Lift', value: '+65%', change: 'High redemption', isPositive: true }
        ]
      },
      {
        platform: 'Myntra',
        platformTitle: 'Myntra Catalog & Brand Operations',
        objective: 'Optimize style listings, attribute mapping, and seasonal catalog launch',
        scopeOfWork: [
          { title: 'Size chart mapping & attribute tag accuracy' },
          { title: 'Discounting & End of Reason Sale (EORS) catalog preparation' }
        ],
        results: [
          'Reduced catalog rejection rate to 0%',
          'Boosted listing impression views by +88%'
        ],
        metrics: [
          { label: 'Catalog Accuracy', value: '100%', change: 'Zero Rejections', isPositive: true },
          { label: 'Impressions', value: '1,45,000', change: '+88%', isPositive: true }
        ]
      }
    ]
  },

  {
    id: 'business-analytics-reporting',
    title: 'BUSINESS ANALYTICS & DATA REPORTING',
    subtitle: 'Excel Pivot Tables, VLOOKUP, & Performance Analytics',
    description: 'Transforming raw seller data into actionable insights, weekly/monthly performance comparisons, and trend forecasts.',
    category: 'Business Analytics & Data Reporting',
    platforms: [
      {
        platform: 'Amazon',
        platformTitle: 'Advanced PPC & Sales Data Analytics',
        objective: 'Automate weekly performance recaps and data-backed decision-making',
        scopeOfWork: [
          {
            title: 'Microsoft Excel Data Cleaning & Reporting',
            subItems: [
              'Pivot Tables for campaign, ad group, and ASIN performance grouping',
              'VLOOKUP & INDEX/MATCH to merge search term reports with sales data',
              'Calculated ACOS, TACOS, CPC, CVR, and Spend vs Revenue variances'
            ]
          },
          { title: 'Monthly & Quarterly Performance Comparisons' },
          { title: 'Competitor Strategy & Trend Identification' }
        ],
        results: [
          'Built automated Excel reporting templates saving 10+ hours per week',
          'Identified top 20% revenue-generating ASINs for focused budget allocation',
          'Provided executive dashboards for weekly performance reviews'
        ],
        metrics: [
          { label: 'Reporting Time Saved', value: '10 hrs/wk', change: 'Automated', isPositive: true },
          { label: 'Data Accuracy', value: '99.9%', change: 'Verified Formulas', isPositive: true },
          { label: 'Budget Efficiency', value: '+45%', change: 'Reallocated', isPositive: true }
        ]
      }
    ]
  }
];
