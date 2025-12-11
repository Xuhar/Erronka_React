import Hero from '../components/HeroSection';
import Highlights from '../components/HighlightsSection';

const Home = () => {
  return (
    <>
      <Hero 
        title="International Marble Blowing Competition"
        subtitle="Experience the pinnacle of precision and skill! The most prestigious and exciting marble-blowing event in the world, uniting the globe's finest blowers."
        primaryButton={{
            label: "Register Now",
            href: "#register",
            variant: "primary"
        }}
        secondaryButton={{
            label: "View Rulebook",
            href: "#rules",
            variant: "outline-light"
        }}
      />
      <Highlights />
      <section className="home-content">
        {/* Contenido específico de home */}
      </section>
    </>
  );
};

export default Home;