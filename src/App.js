import React from "react";
import NavigationBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HighlightsSection from "./components/HighlightsSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeroSection />
      <FeaturesSection />
      <HighlightsSection />
      <Footer />
    </div>
  );
}

export default App;
