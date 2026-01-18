import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import FactsPage from "./pages/FactsPage";
import AchievementsPage from "./pages/AchievementsPage";
import MediaPage from "./pages/MediaPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Simple path-based routing with full page reloads
function getPage() {
  const pathname = window.location.pathname;
  
  switch (pathname) {
    case "/":
      return <HomePage />;
    case "/history":
      return <HistoryPage />;
    case "/facts":
      return <FactsPage />;
    case "/achievements":
      return <AchievementsPage />;
    case "/media":
      return <MediaPage />;
    default:
      return <NotFound />;
  }
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {getPage()}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
