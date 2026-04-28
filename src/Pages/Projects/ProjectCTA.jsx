import { useState } from "react";
import { useNavigate } from "react-router";

const ProjectCTA = () => {
  const [ripples, setRipples] = useState([]);
  const navigate = useNavigate();

  const handleClick = (e) => {
    // ripple
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, ripple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
    }, 600);

    setTimeout(() => {
      navigate("/contact", {
        state: {
          message:
            "Hi, I have a project idea and would like to discuss it with you.",
        },
      });
    }, 200);
  };
  return (
    <section
      className="
        py-28 px-6 text-center
        relative overflow-hidden

        bg-[#e7f2ee] 
        dark:bg-[#0f1a17]
      "
    >
      {/* BACKGROUND GLOW (adaptive) */}
      <div
        className="
        absolute w-96 h-96 blur-3xl rounded-full
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2

        bg-[#34d399]/20
        dark:bg-[#34d399]/10
      "
      />

      {/* CONTENT */}
      <div className="relative max-w-2xl mx-auto">
        <h2
          className="
          text-3xl md:text-5xl font-bold

          text-[#1b3a33]
          dark:text-[#e7f2ee]
        "
        >
          Have a unique idea?
        </h2>

        <p
          className="
          mt-4

          text-[#3d5c52]
          dark:text-[#9fd8c5]
        "
        >
          Let’s turn your vision into a modern digital experience that stands
          out.
        </p>

        {/* BUTTON */}
        <button
          onClick={handleClick}
          className="relative mt-10 px-8 py-3 font-semibold rounded-full overflow-hidden transition bg-[#1b3a33] text-[#e7f2ee] dark:bg-[#34d399] dark:text-[#0f1a17] hover:scale-105"
        >
          Start a Project
          {ripples.map((r) => (
            <span
              key={r.id}
              className="absolute bg-white/40 rounded-full animate-ping"
              style={{
                left: r.x,
                top: r.y,
                width: 20,
                height: 20,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </button>
      </div>
    </section>
  );
};

export default ProjectCTA;
