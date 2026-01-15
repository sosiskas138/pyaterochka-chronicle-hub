import { Layout } from "@/components/layout/Layout";
import { MetricCard } from "@/components/cards/MetricCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Store,
  Users,
  MapPin,
  ShoppingCart,
  TrendingUp,
  Clock,
  Truck,
  CreditCard,
  Leaf,
  Smartphone,
} from "lucide-react";

const mainMetrics = [
  { value: "19 000+", label: "Магазинов", icon: Store, trend: "up" as const, trendValue: "+500 в 2023" },
  { value: "280 000+", label: "Сотрудников", icon: Users, trend: "up" as const, trendValue: "Крупнейший работодатель" },
  { value: "66", label: "Регионов присутствия", icon: MapPin },
  { value: "11+ млн", label: "Покупателей в день", icon: ShoppingCart },
];

const operationalMetrics = [
  { value: "400+", label: "Распределительных центров", icon: Truck },
  { value: "30+ млн", label: "Участников программы лояльности", icon: CreditCard },
  { value: "45 мин", label: "Среднее время доставки", icon: Clock },
  { value: "10 000+", label: "Товарных позиций", icon: ShoppingCart },
];

const sustainabilityMetrics = [
  { value: "85%", label: "Товаров от российских производителей", icon: Leaf, trend: "up" as const, trendValue: "Поддержка локального бизнеса" },
  { value: "15+ млн", label: "Скачиваний приложения", icon: Smartphone },
  { value: "2,1 трлн ₽", label: "Годовая выручка (2023)", icon: TrendingUp, trend: "up" as const, trendValue: "+12% к 2022" },
];

export default function FactsPage() {
  return (
    <Layout>
      <section className="hub-section">
        <div className="hub-container">
          <SectionHeader
            badge="Статистика"
            title="Факты и цифры"
            subtitle="Ключевые показатели и метрики торговой сети"
          />

          {/* Main Metrics */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-4">Основные показатели</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {mainMetrics.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </div>
          </div>

          {/* Operational Metrics */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-4">Операционные показатели</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {operationalMetrics.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </div>
          </div>

          {/* Sustainability & Growth */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Развитие и устойчивость</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sustainabilityMetrics.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Source note */}
      <section className="pb-12">
        <div className="hub-container">
          <p className="text-xs text-muted-foreground">
            * Данные на основе публичных отчётов X5 Retail Group за 2023 год
          </p>
        </div>
      </section>
    </Layout>
  );
}
