import SEO from "../../Utils/SEO";
import Availability from "./Availability";
import ContactCTA from "./ContactCTA";
import ContactForm from "./ContactForm";
import ContactHero from "./ContactHero";
import Social from "./Social";

const Contact = () => {
  return (
    <div>
      <SEO
        title="Contact Graphiqo Studio | Hire a Graphic Designer"
        description="Get in touch with Graphiqo Studio for branding, logo design, and professional graphic design services."
        keywords="hire graphic designer, contact design studio, branding service"
        url="https://graphiqo-studio.vercel.app/contact"
      />
      <ContactHero />
      <ContactForm />
      <Availability />
      <Social />
      <ContactCTA />
    </div>
  );
};

export default Contact;
