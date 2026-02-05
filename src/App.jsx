
import "./styles/globals.css";
import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./components/Start/HeroSection";
import StepsSection from "./components/StepsSection/StepsSection";
import CTASection from "./components/CTASection/CTASection";
import Footer from "./components/End/Footer";

function App() {
  return (
    <div className="container">
      <Navigation />
      <HeroSection />
      <StepsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;