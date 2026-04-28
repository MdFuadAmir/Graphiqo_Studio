import SEO from "../../Utils/SEO";
import LogoWall from "./LogoWall";
import ProjectCTA from "./ProjectCTA";
import ProjectGrid from "./ProjectGrid";
import ProjectHero from "./ProjectHero";

const Projects = () => {
  return (
    <div>
      <SEO
  title="Design Portfolio | Graphiqo Studio"
  description="Browse creative graphic design projects including logos, branding systems, and visual identity work by Graphiqo Studio."
  keywords="design portfolio, branding projects, logo design examples"
  url=""
/>
      <ProjectHero />
      <ProjectGrid />
      <LogoWall />
      <ProjectCTA />
    </div>
  );
};

export default Projects;
