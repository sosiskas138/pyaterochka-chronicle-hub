import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ImageOff } from "lucide-react";

interface PhotoCardProps {
  src?: string;
  alt: string;
  caption?: string;
}

export function PhotoCard({ src, alt, caption }: PhotoCardProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className="hub-card aspect-square flex flex-col items-center justify-center text-muted-foreground">
        <ImageOff className="h-8 w-8 mb-2" />
        <p className="text-sm">Фото пока нет</p>
      </div>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="hub-card-interactive overflow-hidden p-0 group">
          <div className="aspect-square overflow-hidden">
            <img
              src={src}
              alt={alt}
              onError={() => setHasError(true)}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          {caption && (
            <div className="p-3">
              <p className="text-sm text-muted-foreground">{caption}</p>
            </div>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <img src={src} alt={alt} className="w-full h-auto" />
        {caption && (
          <div className="p-4 bg-background">
            <p className="text-sm text-muted-foreground">{caption}</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
