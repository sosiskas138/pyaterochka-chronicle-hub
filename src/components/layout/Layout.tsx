import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border py-8 mt-auto">
        <div className="hub-container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Летопись ретейла. Информационный проект.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://5ka.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Официальный сайт
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Пресс-центр
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
