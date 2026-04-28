import SEO from "../../Utils/SEO";
import Guarantee from "./Guarantee";
import PricingTable from "./PricingTable";
import Process from "./Process";
import ServiceAccordion from "./ServiceAccordion";
import ServiceHero from "./ServiceHero";

const Services = () => {
  return (
    <div>
      <SEO
        title="Graphic Design Services | Graphiqo Studio"
        description="Explore professional graphic design services including branding, logo design, social media creatives, and visual identity systems."
        keywords="graphic design services, branding, logo design, social media design"
        url="https://graphiqo-studio.vercel.app/services"
      />
      <ServiceHero />
      <ServiceAccordion />
      <Process />
      <PricingTable />
      <Guarantee />
    </div>
  );
};

export default Services;
