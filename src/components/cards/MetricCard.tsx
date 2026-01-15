import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  value: string;
  label: string;
  icon?: LucideIcon;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}

export function MetricCard({ value, label, icon: Icon, trend, trendValue }: MetricCardProps) {
  return (
    <div className="hub-card group">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="hub-metric-value">{value}</p>
          <p className="hub-metric-label">{label}</p>
        </div>
        {Icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        )}
      </div>
      {trend && trendValue && (
        <div className="mt-3 pt-3 border-t border-border">
          <span
            className={`text-xs font-medium ${
              trend === "up"
                ? "text-accent"
                : trend === "down"
                ? "text-destructive"
                : "text-muted-foreground"
            }`}
          >
            {trend === "up" ? "↑" : trend === "down" ? "↓" : "→"} {trendValue}
          </span>
        </div>
      )}
    </div>
  );
}
