import SEO from "../../Utils/SEO";
import CTA from "./CTA";
import FAQ from "./FAQ";
import FeaturedWork from "./FeaturedWork";
import Hero from "./Hero";
import Services from "./Services";
import Stats from "./Stats";
import Testmonials from "./Testmonials";
import TrustedBy from "./TrustedBy";
import WhoIAm from "./WhoIAm";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <SEO
        title="Graphiqo Studio | Creative Graphic Design & Branding Agency"
        description="Graphiqo Studio delivers modern graphic design, logo creation, and branding solutions that help businesses stand out visually."
        keywords="graphic design agency, branding studio, logo design, Graphiqo Studio"
        url="https://graphiqo-studio.vercel.app"
      />
      <Hero />
      <TrustedBy />
      <Services />
      <FeaturedWork />
      <WhoIAm />
      <Stats />
      <Testmonials />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Home;
