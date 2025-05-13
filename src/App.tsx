import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectDetail from "./pages/ProjectDetail";
import GlowingScrollLine from "./components/GlowingScrollLine";
import NeonWaveBackground from "./components/NeonWaveBackground";
import PageTransition from "./components/PageTransition";
import Navbar from "./components/Navbar";
import { useIsMobile } from "./hooks/use-mobile";
import CustomCursor from "./components/CustomCursor";

const queryClient = new QueryClient();

const App = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  return (
    <>
      <NeonWaveBackground />
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {!isMobile && <CustomCursor />}
          <GlowingScrollLine />
          <Navbar />
          <PageTransition>
            <Routes location={location}>
              <Route path="/" element={<Index />} />
              <Route path="/projects/:projectId" element={<ProjectDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;