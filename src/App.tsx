import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MusicPage from "./pages/Music";
import CodePage from "./pages/Code";
import TextPage from "./pages/Text";
import VideoPage from "./pages/Video";
import ImagePage from "./pages/Image";
import HubPage from "./pages/Hub";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/code" element={<CodePage />} />
          <Route path="/text" element={<TextPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/image" element={<ImagePage />} />
          <Route path="/hub" element={<HubPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
