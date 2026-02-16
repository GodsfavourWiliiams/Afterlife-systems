import React from 'react';
import { 
  Server, 
  Boxes, 
  ShieldCheck, 
  Heart, 
  Terminal, 
  ChevronRight, 
  ExternalLink,
  Cpu,
  Globe,
  Lock,
  Menu,
  X,
  Compass,
  BarChart,
  ArrowRight,
  CheckCircle,
  Mail,
  MapPin,
  Clock,
  HelpCircle,
  FileText
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className = "", size = 24 }) => {
  const icons: Record<string, React.ElementType> = {
    Server,
    Boxes,
    ShieldCheck,
    Heart,
    Terminal,
    ChevronRight,
    ExternalLink,
    Cpu,
    Globe,
    Lock,
    Menu,
    X,
    Compass,
    BarChart,
    ArrowRight,
    CheckCircle,
    Mail,
    MapPin,
    Clock,
    HelpCircle,
    FileText
  };

  const IconComponent = icons[name] || Cpu;
  return <IconComponent className={className} size={size} />;
};