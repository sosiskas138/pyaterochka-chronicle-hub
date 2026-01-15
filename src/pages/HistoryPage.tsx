import { Layout } from "@/components/layout/Layout";
import { TimelineCard } from "@/components/cards/TimelineCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const timelineEvents = [
  {
    year: "1999",
    title: "Основание компании",
    description:
      "Открытие первого магазина «Пятёрочка» в Санкт-Петербурге. Формат магазина «у дома» стал революционным для российского рынка.",
  },
  {
    year: "2001",
    title: "Выход на московский рынок",
    description:
      "Начало экспансии в Москву. За первый год работы в столице открыто более 30 магазинов.",
  },
  {
    year: "2006",
    title: "Слияние с X5 Retail Group",
    description:
      "«Пятёрочка» вошла в состав X5 Retail Group, одного из крупнейших ретейлеров в России. Это позволило значительно ускорить развитие сети.",
  },
  {
    year: "2010",
    title: "1000 магазинов",
    description:
      "Сеть преодолела отметку в 1000 магазинов. Началась активная региональная экспансия.",
  },
  {
    year: "2013",
    title: "Запуск программы лояльности",
    description:
      "Введена программа лояльности «Выручай-карта», которая стала одной из самых популярных в российском ретейле.",
  },
  {
    year: "2015",
    title: "5000 магазинов",
    description:
      "Достигнута отметка в 5000 магазинов. Сеть стала крупнейшей в России по количеству торговых точек.",
  },
  {
    year: "2018",
    title: "Масштабный ребрендинг",
    description:
      "Проведён масштабный ребрендинг сети: обновлены логотип, интерьеры магазинов и стандарты обслуживания.",
  },
  {
    year: "2020",
    title: "10 000 магазинов",
    description:
      "Преодолена планка в 10 000 магазинов. Запущены сервисы экспресс-доставки и онлайн-заказов.",
  },
  {
    year: "2023",
    title: "Цифровая трансформация",
    description:
      "Внедрение технологий самообслуживания, развитие мобильного приложения и сервисов доставки. Более 19 000 магазинов по всей стране.",
  },
];

export default function HistoryPage() {
  return (
    <Layout>
      <section className="hub-section">
        <div className="hub-container">
          <SectionHeader
            badge="Таймлайн"
            title="История и развитие"
            subtitle="Путь от первого магазина в Санкт-Петербурге до крупнейшей торговой сети России"
          />

          <div className="max-w-3xl">
            {timelineEvents.map((event, index) => (
              <TimelineCard
                key={event.year}
                {...event}
                isLast={index === timelineEvents.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
