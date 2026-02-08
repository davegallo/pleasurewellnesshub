import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Calculators from "./pages/Calculators";
import CompatibilityCalculator from "./pages/CompatibilityCalculator";
import OrgasmCalculator from "./pages/OrgasmCalculator";
import CommunicationCalculator from "./pages/CommunicationCalculator";
import WellnessCalculator from "./pages/WellnessCalculator";
import PleasureCalculator from "./pages/PleasureCalculator";
import IntimacyCalculator from "./pages/IntimacyCalculator";
import SexToyCalculator from "./pages/SexToyCalculator";
import LibidoCalculator from "./pages/LibidoCalculator";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import ClitorisAnatomy from "./pages/articles/ClitorisAnatomy";
import CommunicationFramework from "./pages/articles/CommunicationFramework";
import OralSexGuide from "./pages/articles/OralSexGuide";
import OrgasmGap from "./pages/articles/OrgasmGap";
import DesireDiscrepancy from "./pages/articles/DesireDiscrepancy";
import ConsentBasics from "./pages/articles/ConsentBasics";
import BeginnersGuide from "./pages/guides/BeginnersGuide";
import ConsentGuide from "./pages/guides/ConsentGuide";
import AdvancedIntimacy from "./pages/guides/AdvancedIntimacy";
import SoloPleasure from "./pages/guides/SoloPleasure";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/calculators" component={Calculators} />
      <Route path={"/calculator/compatibility"} component={CompatibilityCalculator} />
      <Route path={"/calculator/orgasm"} component={OrgasmCalculator} />
      <Route path={"/calculator/communication"} component={CommunicationCalculator} />
      <Route path={"/calculator/wellness"} component={WellnessCalculator} />
      <Route path={"/calculator/pleasure"} component={PleasureCalculator} />
      <Route path={"/calculator/intimacy"} component={IntimacyCalculator} />
      <Route path={"/calculator/sex-toy"} component={SexToyCalculator} />
      <Route path={"/calculator/libido"} component={LibidoCalculator} />
      <Route path="/resources" component={Resources} />
      <Route path="/about" component={About} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/contact" component={Contact} />
      <Route path="/article/clitoris-anatomy" component={ClitorisAnatomy} />
      <Route path="/article/communication-framework" component={CommunicationFramework} />
      <Route path="/article/oral-sex-guide" component={OralSexGuide} />
      <Route path="/article/orgasm-gap" component={OrgasmGap} />
      <Route path="/article/desire-discrepancy" component={DesireDiscrepancy} />
      <Route path="/article/consent-basics" component={ConsentBasics} />
      <Route path="/guide/beginners" component={BeginnersGuide} />
      <Route path="/guide/consent" component={ConsentGuide} />
      <Route path="/guide/advanced-intimacy" component={AdvancedIntimacy} />
      <Route path="/guide/solo-pleasure" component={SoloPleasure} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
