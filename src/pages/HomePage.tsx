import { Layout } from "@/components/layout/Layout";
import { MetricCard } from "@/components/cards/MetricCard";
import { NavigationCard } from "@/components/cards/NavigationCard";
import { VideoCard } from "@/components/cards/VideoCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Store,
  Users,
  MapPin,
  TrendingUp,
  Clock,
  Award,
  Play,
  BarChart3,
} from "lucide-react";
import heroImage from "@/assets/hero-store-updated.jpg";

const metrics = [
  { value: "19 000+", label: "Магазинов по всей России", icon: Store, trend: "up" as const, trendValue: "+500 за год" },
  { value: "280 000+", label: "Сотрудников в команде", icon: Users, trend: "up" as const, trendValue: "Крупнейший работодатель" },
  { value: "66", label: "Регионов присутствия", icon: MapPin },
  { value: "1999", label: "Год основания", icon: Clock },
];

const navigationCards = [
  {
    title: "История развития",
    description: "От первого магазина до крупнейшей сети страны — таймлайн ключевых событий",
    href: "/history",
    icon: Clock,
  },
  {
    title: "Факты и цифры",
    description: "Ключевые показатели, статистика и аналитика сети",
    href: "/facts",
    icon: BarChart3,
  },
  {
    title: "Достижения",
    description: "Награды, рекорды и значимые вехи в истории компании",
    href: "/achievements",
    icon: Award,
    accentColor: "accent" as const,
  },
  {
    title: "Медиа",
    description: "Видео, фотографии и медиаматериалы о сети",
    href: "/media",
    icon: Play,
  },
];

const featuredVideo = {
  title: "Пятёрочка: история успеха российского ретейла",
  description: "Как небольшой магазин превратился в крупнейшую торговую сеть страны",
  thumbnail: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=450&fit=crop",
  videoId: "dQw4w9WgXcQ",
  duration: "12:34",
};

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden hub-hero-gradient">
        <div className="hub-container py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="hub-badge-primary">Торговая сеть</span>
                <span className="hub-badge-accent">Лидер рынка</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                Пятёрочка
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Крупнейшая российская сеть продуктовых магазинов формата «у дома». 
                Более 19 000 магазинов в 66 регионах страны.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Магазин Пятёрочка"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 hub-card py-3 px-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Рост +12%</p>
                    <p className="text-xs text-muted-foreground">за 2023 год</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="hub-section">
        <div className="hub-container">
          <SectionHeader
            badge="Ключевые показатели"
            title="Сеть в цифрах"
            subtitle="Основные метрики и показатели развития торговой сети"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <MetricCard {...metric} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="hub-section bg-muted/30">
        <div className="hub-container">
          <SectionHeader
            title="Узнайте больше"
            subtitle="Изучите историю, достижения и интересные факты о сети"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {navigationCards.map((card, index) => (
              <div
                key={card.href}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <NavigationCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="hub-section">
        <div className="hub-container">
          <SectionHeader
            badge="Видео"
            title="Рекомендуем к просмотру"
          />
          <div className="max-w-3xl">
            <VideoCard {...featuredVideo} featured />
          </div>
        </div>
      </section>
    </Layout>
  );
}
