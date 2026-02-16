import { Product, Feature, NavItem } from './types';

export const COMPANY_NAME = 'Afterlife Systems';
export const TAGLINE = 'Building Scalable Software Ecosystems';
export const SUB_TAGLINE =
  'We act as a venture studio and technology operator, designing resilient digital products for the modern economy.';
export const CONTACT_EMAIL = 'hello@afterlifesystems.io';
export const COMPANY_ADDRESS = 'Uyo, Akwa Ibom State, Nigeria';
export const YEAR = new Date().getFullYear();

export const PRODUCTS: Product[] = [
  {
    id: 'lovebox',
    name: 'LoveBox',
    url: 'https://www.trylovebox.com/',
    description:
      'A premier digital gifting platform facilitating secure monetary transfers and media-rich correspondence. Engineered for privacy and high-volume transaction reliability.',
    tags: ['FinTech', 'Consumer Social', 'Payments'],
    status: 'Live',
    iconName: 'Heart'
  },
  {
    id: 'roastmycode',
    name: 'RoastMyCode',
    url: 'https://roastmycode.online/',
    description:
      'An AI-driven static analysis engine that provides architectural critiques for engineering teams. Focuses on code quality, security patterns, and maintainability.',
    tags: ['DevTools', 'AI/ML', 'SaaS'],
    status: 'Live',
    iconName: 'Terminal'
  }
];

export const SERVICES = [
  {
    title: 'Product Strategy',
    description: 'We identify market gaps and architect vertical-specific solutions that solve real problems.',
    iconName: 'Compass'
  },
  {
    title: 'Full-Cycle Engineering',
    description: 'End-to-end development using modern stacks, focusing on type safety, speed, and modularity.',
    iconName: 'Cpu'
  },
  {
    title: 'Operational Scale',
    description: 'Managing infrastructure, compliance, and growth with automated pipelines and rigorous monitoring.',
    iconName: 'BarChart'
  }
];

export const FEATURES: Feature[] = [
  {
    title: 'Secure Architecture',
    description: 'Enterprise-grade security standards implemented from the first line of code.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Modular Design',
    description: 'Composable software architecture allowing for rapid feature deployment and easy maintenance.',
    iconName: 'Boxes'
  },
  {
    title: 'High Availability',
    description: 'Redundant systems ensuring your product is always online and performing optimally.',
    iconName: 'Server'
  }
];

export const STATS = [
  { label: 'Live Ventures', value: '2' },
  { label: 'Uptime Target', value: '99.9%' },
  { label: 'Availability', value: 'Global' },
  { label: 'Operations', value: 'In-House' }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' }
];
