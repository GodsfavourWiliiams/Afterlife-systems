export interface Product {
  id: string;
  name: string;
  url: string;
  description: string;
  tags: string[];
  status: 'Live' | 'In Development' | 'Beta';
  iconName: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  iconName: string;
}
