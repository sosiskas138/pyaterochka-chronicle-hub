interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export function SectionHeader({ title, subtitle, badge }: SectionHeaderProps) {
  return (
    <div className="mb-8 md:mb-10">
      {badge && <span className="hub-badge-primary mb-3">{badge}</span>}
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-muted-foreground max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
