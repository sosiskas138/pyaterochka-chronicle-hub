import { Play } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface VideoCardProps {
  title: string;
  description?: string;
  thumbnail: string;
  videoId: string;
  duration?: string;
  featured?: boolean;
}

export function VideoCard({
  title,
  description,
  thumbnail,
  videoId,
  duration,
  featured = false,
}: VideoCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div
          className={`hub-card-interactive group overflow-hidden p-0 ${
            featured ? "md:col-span-2 lg:col-span-2" : ""
          }`}
        >
          <div className="relative aspect-video overflow-hidden">
            <img
              src={thumbnail}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                <Play className="h-6 w-6 ml-0.5" fill="currentColor" />
              </div>
            </div>
            {duration && (
              <span className="absolute bottom-3 right-3 hub-badge bg-black/70 text-white">
                {duration}
              </span>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-foreground line-clamp-2">
              {title}
            </h3>
            {description && (
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                {description}
              </p>
            )}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
