import SEO from "../../Utils/SEO";
import AboutHero from "./AboutHero";
import JourneyTimeline from "./JourneyTimeline";
import Philosophy from "./Philosophy";
import SocialLife from "./SocialLife";
import Toolkit from "./Toolkit";

const About = () => {
  return (
    <div>
      <SEO
        title="About Graphiqo Studio | Creative Design Studio"
        description="Learn about Graphiqo Studio’s creative approach to graphic design, branding, and building strong visual identities."
        keywords="about design studio, branding process, creative studio"
        url="https://graphiqo-studio.vercel.app/about"
      />
      <AboutHero />
      <JourneyTimeline />
      <Philosophy />
      <Toolkit />
      <SocialLife />
    </div>
  );
};

export default About;
