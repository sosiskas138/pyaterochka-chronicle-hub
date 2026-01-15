import { Layout } from "@/components/layout/Layout";
import { AchievementCard } from "@/components/cards/AchievementCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Trophy,
  Award,
  Star,
  Heart,
  Users,
  TrendingUp,
  Globe,
  Leaf,
  Zap,
  Shield,
} from "lucide-react";

const achievements = [
  {
    title: "Крупнейшая сеть России",
    description: "Более 19 000 магазинов по всей стране — абсолютный рекорд для российского ретейла",
    icon: Trophy,
    year: "2023",
    featured: true,
  },
  {
    title: "Лидер доверия покупателей",
    description: "Топ-3 в рейтинге доверия потребителей среди продуктовых сетей",
    icon: Heart,
    year: "2023",
    featured: true,
  },
  {
    title: "Крупнейший работодатель",
    description: "280 000+ сотрудников — один из крупнейших частных работодателей в России",
    icon: Users,
  },
  {
    title: "Лидер роста",
    description: "Стабильный двузначный рост выручки на протяжении 10 лет",
    icon: TrendingUp,
  },
  {
    title: "Национальный охват",
    description: "Присутствие в 66 регионах Российской Федерации",
    icon: Globe,
  },
  {
    title: "Экологическая ответственность",
    description: "Программы по сокращению пластика и переработке отходов",
    icon: Leaf,
  },
  {
    title: "Цифровые инновации",
    description: "Передовые технологии самообслуживания и экспресс-доставки",
    icon: Zap,
  },
  {
    title: "Стандарты качества",
    description: "Строгий контроль качества продукции и свежести товаров",
    icon: Shield,
  },
];

export default function AchievementsPage() {
  return (
    <Layout>
      <section className="hub-section">
        <div className="hub-container">
          <SectionHeader
            badge="Награды и вехи"
            title="Достижения"
            subtitle="Ключевые вехи, награды и признание торговой сети"
          />

          {/* Featured Achievements */}
          <div className="grid gap-4 sm:grid-cols-2 mb-8">
            {achievements
              .filter((a) => a.featured)
              .map((achievement) => (
                <AchievementCard key={achievement.title} {...achievement} />
              ))}
          </div>

          {/* Other Achievements */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievements
              .filter((a) => !a.featured)
              .map((achievement) => (
                <AchievementCard key={achievement.title} {...achievement} />
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
