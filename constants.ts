import { Service, PricingPlan, BookkeepingPlan, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'admin',
    title: 'Executive Administration',
    description: 'Elite calendar management, sophisticated inbox filtering, travel logistics, and proactive meeting coordination.',
    icon: 'fa-calendar-check',
    priceRate: 45 
  },
  {
    id: 'bookkeeping',
    title: 'Bookkeeping & Finance',
    description: 'Precision accounts management, expense tracking, invoicing, and detailed financial reporting.',
    icon: 'fa-file-invoice-dollar',
    priceRate: 47
  },
  {
    id: 'creative',
    title: 'Content & Creative',
    description: 'High-end social media management, graphic design, copywriting, and strategic email marketing.',
    icon: 'fa-pen-nib',
    priceRate: 55
  },
  {
    id: 'technical',
    title: 'Technical Support',
    description: 'CRM optimization, website maintenance, data analysis, and software stack integration.',
    icon: 'fa-code',
    priceRate: 70
  },
  {
    id: 'lifestyle',
    title: 'Personal Concierge',
    description: 'Discreet personal shopping, appointment booking, and event management for high-net-worth founders.',
    icon: 'fa-star',
    priceRate: 45
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Entrepreneur Plan',
    price: '$549',
    hours: 12,
    features: [
      'Dedicated Strategic Assistant',
      '12 Hours of Monthly Support',
      'U.S-Based Elite Professional',
      'Inbox & Calendar Management',
      'Standard 24h Response Window',
      'Password Security Protocol',
      'No Long-Term Commitment'
    ],
    stripeLink: 'https://buy.stripe.com/dRm8wP79w0ngfOs83kco001'
  },
  {
    name: 'Small Business Plan',
    price: '$1,099',
    hours: 24,
    features: [
      'Dedicated Strategic Assistant',
      '24 Hours of Monthly Support',
      'Priority Response Time (12h)',
      'Advanced Travel & Logistics',
      'Complex Project Management',
      'Quarterly Performance Audits',
      'Dedicated Success Manager'
    ],
    recommended: true,
    stripeLink: 'https://buy.stripe.com/4gMdR951o1rkcCg0ASco002'
  },
  {
    name: 'Team Plan',
    price: '$1,299',
    hours: 36,
    features: [
      'Dedicated Strategic Assistant',
      '36 Hours of Monthly Support',
      'High-Priority Status (Instant)',
      'Multi-User Access (Up to 3)',
      'Advanced Operations Support',
      'Technical Workflow Optimization',
      'VIP Concierge Services'
    ],
    stripeLink: 'https://buy.stripe.com/5kQ6oH0L87PI31GfvMco003'
  },
  {
    name: 'Enterprise Plan',
    price: '$1,799',
    hours: 50,
    features: [
      'Top-Tier Dedicated EA Partner',
      '50 Hours of Monthly Support',
      'Unlimited Team Access',
      'Strategic Business Integration',
      '24/7 Crisis Response Access',
      'Full Document Preparation',
      'White-Glove Success Concierge'
    ],
    stripeLink: 'https://buy.stripe.com/9B68wP1Pc5HA8m083kco004' 
  }
];

export const BOOKKEEPING_PLANS: BookkeepingPlan[] = [
  {
    name: 'Essential Ledger',
    price: '$300',
    description: 'Perfect for small businesses and solopreneurs seeking clarity.',
    features: [
      'Monthly Bank Reconciliation',
      'Expense Categorization',
      'Profit & Loss Statements',
      'Balance Sheet Preparation',
      'Email Support Access',
      'Cloud Software Integration'
    ],
    stripeLink: 'https://buy.stripe.com/14AcN551o6LE9q42J0co005' 
  },
  {
    name: 'Precision Growth',
    price: '$750',
    description: 'For scaling teams with higher transaction volume.',
    features: [
      'Accounts Payable & Receivable',
      'Vendor Management',
      'Quarterly Financial Reviews',
      'Sales Tax Filing',
      'Priority Email Support',
      'Cash Flow Forecasting',
      'U.S-Based Bookkeeper'
    ],
    recommended: true,
    stripeLink: 'https://buy.stripe.com/14AfZhalI7PIdGk6Zgco006' 
  },
  {
    name: 'Full-Cycle Finance',
    price: '$1,500',
    description: 'Complete back-office financial management.',
    features: [
      'Unlimited Reconciliations',
      'Full Payroll Management',
      'Strategic Cash Flow Analysis',
      'Tax Prep Collaboration',
      'Monthly Advisory Call',
      'Budget vs. Actual Reporting',
      'Dedicated Finance Lead'
    ],
    stripeLink: 'https://buy.stripe.com/4gM00jeBY3zsdGk1EWco007' 
  }
];

export const PERKS = [
  {
    title: "100% U.S-Based",
    desc: "Every specialist is a vetted, U.S-based professional operating from our hub for maximum cultural and strategic alignment.",
    icon: "fa-map-location-dot"
  },
  {
    title: "The 0.1% Standard",
    desc: "Our rigorous vetting process ensures we only hire the absolute top-tier of administrative and financial talent globally.",
    icon: "fa-trophy"
  },
  {
    title: "BSSP Security",
    desc: "Black Star Security Protocol ensures enterprise-grade encryption for all passwords, financial data, and sensitive communications.",
    icon: "fa-user-lock"
  },
  {
    title: "Proactive Continuity",
    desc: "Never experience operational drag. We maintain internal 'shadow' specialists to ensure seamless coverage during vacations or emergencies.",
    icon: "fa-infinity"
  },
  {
    title: "Mission-Ready Tech",
    desc: "We integrate natively into your tech stack. Slack, Notion, QBO, or HubSpot—we are ready on day one.",
    icon: "fa-bolt-lightning"
  },
  {
    title: "Strategic Pairing",
    desc: "We don't just assign names. We use behavioral and skill-set mapping to pair you with an assistant who thinks like you do.",
    icon: "fa-people-arrows"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Why should I pick BLACK STAR VA?",
    answer: "Our specialists are 100% based in the United States. We do not outsource overseas. We believe that mission-critical support requires deep cultural alignment and the highest standards of reliability."
  },
  {
    question: "What if I’m too overwhelmed to train someone?",
    answer: "That happens. Fortunately, we can pair you with a Black Star Strategic Assistant who is already trained in the skills you need. Of course, you will have to show them the ropes of your specific business, but the good news is that they’ve already done similar work for other clients and they have a ton of experience in serving clients remotely."
  },
  {
    question: "Is there a trial period?",
    answer: "No, there is not a trial period. However, all new clients receive $100 off their first month. Please note that there is a minimum commitment of a 3-month contract applied to this discount."
  },
  {
    question: "Where are Black Star specialists located?",
    answer: "Our specialists are 100% based in the United States. We do not outsource overseas. We believe that mission-critical support requires deep cultural alignment and the highest standards of reliability."
  },
  {
    question: "What exactly can my Strategic Assistant do?",
    answer: "Anything that doesn't require your physical presence. This includes complex calendar management, travel logistics, high-level research, inbox detoxification, social media management, and CRM optimization. If it's digital and operational, we own it."
  },
  {
    question: "Do my unused hours roll over to the next month?",
    answer: "To maintain peak operational capacity and guarantee your specialist's dedicated focus, hours do not roll over. We encourage full utilization of your partner to ensure you are maximizing your strategic leverage every 30 days."
  },
  {
    question: "How do you ensure the security of my sensitive data?",
    answer: "We utilize the Black Star Security Protocol (BSSP). This involves enterprise-grade encrypted vaults (LastPass/Dashlane) where your credentials remain masked. All specialists are bound by rigorous NDAs and internal security audits."
  },
  {
    question: "How long does the synchronization process take?",
    answer: "Once you complete the intake protocol and initialize your plan, we typically have your Strategic Assistant paired and ready for a kick-off call within 48 to 72 business hours."
  },
  {
    question: "Can I share my plan with other members of my team?",
    answer: "Yes. Our 'Team' and 'Enterprise' tiers are specifically designed for multi-user access, allowing your Strategic Assistant to integrate into your entire executive workflow."
  },
  {
    question: "What happens if my assistant takes time off?",
    answer: "We maintain 'Proactive Continuity.' A fully briefed backup specialist from our internal pool is placed on standby to step in seamlessly, ensuring your business momentum never breaks."
  },
  {
    question: "Can my assistant handle specialized technical tasks?",
    answer: "Our assistants are experts in modern business tools (Slack, Notion, QBO, etc.). For advanced coding or complex technical architecture, we recommend our 'Technical Support' add-on for specialized engineering oversight."
  },
  {
    question: "What are your standard operating hours?",
    answer: "We operate during standard business hours in your specific U.S timezone (9 AM – 6 PM). For Enterprise clients, we offer extended support windows for mission-critical or global operations."
  }
];

export const TESTIMONIALS = [
  {
    text: "The Small Business plan allowed me to reclaim 20 hours of my week. The ROI was immediate.",
    name: "A. Sterling",
    role: "Series B Founder",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=100"
  }
];

export const BLOG_POSTS = [
  {
    id: 'reclaiming-founder-focus-hasanna',
    title: 'Strategic Leverage: Why Every High-Velocity Founder Needs a Partner, Not Just an Assistant',
    excerpt: 'Hasanna Garcia, Founder of Black Star VA, explains the critical shift from task-delegation to strategic partnership and how it unlocks exponential business growth.',
    category: 'Founding Principles',
    date: 'Nov 02, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1627161683077-e34782c24d81?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'leveraging-anticipatory-logic',
    title: 'Leveraging Anticipatory Logic: The Silent Edge of Elite EAs',
    excerpt: 'How top-tier strategic assistants predict bottlenecks before they manifest, ensuring founder momentum remains unbroken.',
    category: 'Strategy',
    date: 'Oct 24, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fractional-bookkeeping-vs-full-time',
    title: 'The Case for Fractional Finance: High-Impact Bookkeeping',
    excerpt: 'Why high-velocity startups are moving away from traditional full-time hires toward strategic, fractional financial oversight.',
    category: 'Finance',
    date: 'Oct 18, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'scaling-without-burnout',
    title: 'Scaling Without Burnout: Delegation Protocols for Founders',
    excerpt: 'The critical difference between delegating tasks and delegating outcomes. How to build a support structure that scales.',
    category: 'Leverage',
    date: 'Oct 12, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'securing-executive-data',
    title: 'Fortifying the Command Center: Modern Data Security',
    excerpt: 'A deep dive into the protocols required to protect sensitive founder data in an increasingly decentralized work environment.',
    category: 'Security',
    date: 'Oct 05, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  }
];