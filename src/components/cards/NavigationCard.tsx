import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";

interface NavigationCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  accentColor?: "primary" | "accent";
}

export function NavigationCard({
  title,
  description,
  href,
  icon: Icon,
  accentColor = "primary",
}: NavigationCardProps) {
  const colorClasses = {
    primary: "bg-primary/10 text-primary group-hover:bg-primary/15",
    accent: "bg-accent/10 text-accent group-hover:bg-accent/15",
  };

  return (
    <Link to={href} className="hub-card-interactive group block">
      <div className="flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${colorClasses[accentColor]}`}
        >
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
        <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
      </div>
    </Link>
  );
}
