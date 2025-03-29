
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameProvider } from "./context/GameContext";
import LoadingScreen from "./pages/LoadingScreen";
import Home from "./pages/Home";
import AddPlayers from "./pages/AddPlayers";
import Partners from "./pages/Partners";
import Settings from "./pages/Settings";
import RulesList from "./pages/RulesList";
import GameTransition from "./pages/GameTransition";
import GameStart from "./pages/GameStart";
import CardPile from "./pages/CardPile";
import GameRule from "./pages/GameRule";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <GameProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoadingScreen />} />
            <Route path="/home" element={<Home />} />
            <Route path="/add-players" element={<AddPlayers />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/rules-list" element={<RulesList />} />
            <Route path="/game-transition" element={<GameTransition />} />
            <Route path="/game-start" element={<GameStart />} />
            <Route path="/card-pile" element={<CardPile />} />
            <Route path="/game-rule/:ruleId" element={<GameRule />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </GameProvider>
  </QueryClientProvider>
);

export default App;
