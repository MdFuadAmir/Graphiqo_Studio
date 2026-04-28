import { useNavigate, useParams } from "react-router";
import { projects } from "../../../public/Data/Projects";
import { FaArrowLeft } from "react-icons/fa";
import SEO from "../../Utils/SEO";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ FIXED (no Number)
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="py-32 text-center text-[#1b3a33] dark:text-[#e7f2ee]">
        Project Not Found
      </div>
    );
  }

  return (
    <section className="py-24 px-6 bg-[#e7f2ee] dark:bg-[#0f1a17]">
      <SEO
        title={`${project.title} | Graphic Design Case Study | Graphiqo Studio`}
        description={project.description}
        keywords={`${project.tags.join(", ")}, graphic design, branding`}
        image={project.img}
        url={`https://graphiqo-studio.com/projects/${project.id}`}
      />
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="
        inline-flex items-center gap-2
        px-4 py-2 rounded-full
        text-sm font-medium mb-4

        bg-white/70 dark:bg-[#132b24]/70
        backdrop-blur-md

        border border-[#7dd3b0]/20
        text-[#1b3a33] dark:text-[#e7f2ee]

        shadow-sm
        hover:shadow-md

        transition-all duration-300
        hover:-translate-x-1 hover:scale-105
      "
        >
          <FaArrowLeft className="text-xs" />
          Back to Projects
        </button>
        {/* 🔥 HERO */}
        <div className="mb-12">
          <img
            src={project.img}
            alt={project.title}
            className="
              w-full h-55 md:h-95
              object-cover rounded-xl
              shadow-lg
            "
          />
        </div>

        {/* 🔥 TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#1b3a33] dark:text-[#e7f2ee]">
          {project.title}
        </h1>

        {/* META */}
        <div className="mt-3 flex flex-wrap gap-4 text-sm text-[#5f7d73] dark:text-[#9fd8c5]">
          <span>Client: {project.client}</span>
          <span>•</span>
          <span>{project.duration}</span>
          <span>•</span>
          <span>{project.year}</span>
        </div>

        {/* TAGS */}
        <div className="mt-4 flex gap-2 flex-wrap">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="
                text-xs px-3 py-1 rounded-full
                bg-[#34d399]/10
                text-[#2f4f46]
                dark:text-[#c6f1e2]
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* DESCRIPTION */}
        <p className="mt-6 text-[#2f4f46] dark:text-[#c6f1e2] leading-relaxed">
          {project.description}
        </p>

        {/* 🔥 CONTENT BLOCKS */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {/* CARD */}
          <div className="p-5 rounded-xl bg-white/70 dark:bg-[#132b24]/70 border border-[#7dd3b0]/20">
            <h3 className="font-semibold text-[#1b3a33] dark:text-[#e7f2ee]">
              Challenge
            </h3>
            <p className="mt-2 text-sm text-[#2f4f46] dark:text-[#c6f1e2]">
              {project.challenge}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/70 dark:bg-[#132b24]/70 border border-[#7dd3b0]/20">
            <h3 className="font-semibold text-[#1b3a33] dark:text-[#e7f2ee]">
              Solution
            </h3>
            <p className="mt-2 text-sm text-[#2f4f46] dark:text-[#c6f1e2]">
              {project.solution}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/70 dark:bg-[#132b24]/70 border border-[#7dd3b0]/20">
            <h3 className="font-semibold text-[#1b3a33] dark:text-[#e7f2ee]">
              Result
            </h3>
            <p className="mt-2 text-sm text-[#2f4f46] dark:text-[#c6f1e2]">
              {project.result}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
