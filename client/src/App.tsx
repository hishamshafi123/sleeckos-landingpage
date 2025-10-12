import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LandingPage from "@/pages/LandingPage";
import LandingPage1 from "@/pages/LandingPage1";
import LandingPage2 from "@/pages/LandingPage2";
import LandingPageAd1 from "@/pages/LandingPageAd1";
import LandingPageAd2 from "@/pages/LandingPageAd2";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/page1" component={LandingPage1} />
      <Route path="/page2" component={LandingPage2} />
      <Route path="/page1ad" component={LandingPageAd1} />
      <Route path="/page2ad" component={LandingPageAd2} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
