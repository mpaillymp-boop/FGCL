import {
  AppWindow,
  Workflow,
  BarChart3,
  Blocks,
  Ruler,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Server,
  Compass,
  FileText,
  Smartphone,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  AppWindow,
  Workflow,
  BarChart3,
  Blocks,
  Ruler,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Server,
  Compass,
  FileText,
  Smartphone,
  GraduationCap,
};

export function Icon({
  name,
  className,
  size = 24,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const Cmp = MAP[name] ?? Blocks;
  return <Cmp className={className} size={size} strokeWidth={1.75} />;
}
