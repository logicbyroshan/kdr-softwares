import React from 'react';
import {
  Layers,
  Database,
  FileSpreadsheet,
  ScanFace,
  FolderSync,
  Users,
  ShieldAlert,
  FileCheck,
  KeyRound,
  RotateCcw,
  Download,
  Smartphone,
  Wand2,
  Printer,
  Grid,
  Maximize,
  QrCode,
  GitMerge,
  FileText,
  Sparkles,
  Shield,
  Code2,
  Globe,
  HelpCircle,
  LucideIcon
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Layers,
  Database,
  FileSpreadsheet,
  ScanFace,
  FolderSync,
  Users,
  ShieldAlert,
  FileCheck,
  KeyRound,
  RotateCcw,
  Download,
  Smartphone,
  Wand2,
  Printer,
  Grid,
  Maximize,
  QrCode,
  GitMerge,
  FileText,
  Sparkles,
  Shield,
  Code2,
  Globe,
  HelpCircle
};

interface DynamicIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = "w-5 h-5", size, ...props }) => {
  const IconComponent = ICON_MAP[name] || HelpCircle;
  return <IconComponent className={className} size={size} {...props} />;
};
