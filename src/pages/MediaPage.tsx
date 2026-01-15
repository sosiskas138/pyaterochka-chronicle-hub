import { Layout } from "@/components/layout/Layout";
import { VideoCard } from "@/components/cards/VideoCard";
import { PhotoCard } from "@/components/cards/PhotoCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const videos = [
  {
    title: "История Пятёрочки: от первого магазина до лидера рынка",
    description: "Документальный фильм о развитии крупнейшей торговой сети России",
    thumbnail: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=450&fit=crop",
    videoId: "dQw4w9WgXcQ",
    duration: "15:42",
    featured: true,
  },
  {
    title: "Как работает современный магазин",
    description: "Экскурсия по магазину нового формата с технологиями самообслуживания",
    thumbnail: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400&h=225&fit=crop",
    videoId: "dQw4w9WgXcQ",
    duration: "8:15",
  },
  {
    title: "Программа лояльности «Выручай-карта»",
    description: "Как работает программа лояльности и её преимущества для покупателей",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop",
    videoId: "dQw4w9WgXcQ",
    duration: "5:30",
  },
  {
    title: "Экспресс-доставка за 45 минут",
    description: "Обзор сервиса быстрой доставки продуктов на дом",
    thumbnail: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=225&fit=crop",
    videoId: "dQw4w9WgXcQ",
    duration: "6:20",
  },
];

const photos = [
  {
    src: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=600&fit=crop",
    alt: "Магазин Пятёрочка",
    caption: "Современный магазин в жилом районе",
  },
  {
    src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=600&fit=crop",
    alt: "Интерьер магазина",
    caption: "Торговый зал с широким ассортиментом",
  },
  {
    src: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=600&h=600&fit=crop",
    alt: "Касса самообслуживания",
    caption: "Зона самообслуживания",
  },
  {
    src: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=600&fit=crop",
    alt: "Свежие продукты",
    caption: "Отдел свежих овощей и фруктов",
  },
  {
    src: "https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=600&fit=crop",
    alt: "Доставка",
    caption: "Служба доставки",
  },
  {
    src: undefined,
    alt: "Новый магазин",
    caption: "Скоро: открытие нового формата",
  },
];

export default function MediaPage() {
  return (
    <Layout>
      {/* Videos Section */}
      <section className="hub-section">
        <div className="hub-container">
          <SectionHeader
            badge="Видео"
            title="Видеоматериалы"
            subtitle="Документальные фильмы, обзоры и репортажи о сети"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <VideoCard key={video.title} {...video} />
            ))}
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section className="hub-section bg-muted/30">
        <div className="hub-container">
          <SectionHeader
            badge="Фото"
            title="Галерея"
            subtitle="Фотографии магазинов и рабочих процессов"
          />

          <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
            {photos.map((photo, index) => (
              <PhotoCard key={index} {...photo} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
