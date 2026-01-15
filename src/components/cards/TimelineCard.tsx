interface TimelineCardProps {
  year: string;
  title: string;
  description: string;
  image?: string;
  isLast?: boolean;
}

export function TimelineCard({
  year,
  title,
  description,
  image,
  isLast = false,
}: TimelineCardProps) {
  return (
    <div className="relative pl-8 md:pl-12">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-3 md:left-5 top-8 bottom-0 w-px bg-border" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-2 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background">
        <div className="h-2 w-2 rounded-full bg-primary" />
      </div>

      <div className="hub-card mb-6 animate-fade-in">
        <div className="flex flex-col md:flex-row gap-4">
          {image && (
            <div className="w-full md:w-48 shrink-0">
              <img
                src={image}
                alt={title}
                className="h-32 w-full rounded-lg object-cover"
              />
            </div>
          )}
          <div className="flex-1">
            <span className="hub-badge-primary mb-2">{year}</span>
            <h3 className="mt-2 font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
