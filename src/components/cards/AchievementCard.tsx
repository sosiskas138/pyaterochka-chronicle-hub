import { LucideIcon } from "lucide-react";

interface AchievementCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  year?: string;
  featured?: boolean;
}

export function AchievementCard({
  title,
  description,
  icon: Icon,
  year,
  featured = false,
}: AchievementCardProps) {
  return (
    <div
      className={`hub-card text-center relative overflow-hidden ${
        featured
          ? "border-primary/20 bg-gradient-to-br from-primary/5 to-transparent"
          : ""
      }`}
    >
      {featured && (
        <div className="absolute top-3 right-3">
          <span className="hub-badge-primary">Ключевое</span>
        </div>
      )}
      <div
        className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl mb-4 ${
          featured
            ? "bg-primary text-primary-foreground"
            : "bg-primary/10 text-primary"
        }`}
      >
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      {year && (
        <p className="mt-3 text-xs font-medium text-primary">{year}</p>
      )}
    </div>
  );
}
