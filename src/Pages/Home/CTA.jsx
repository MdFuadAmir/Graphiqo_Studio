import { motion, useMotionValue, useSpring } from "framer-motion";
import { useNavigate } from "react-router";

const CTA = () => {
  const navigate = useNavigate();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 12 });
  const springY = useSpring(y, { stiffness: 150, damping: 12 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    x.set(offsetX * 0.2);
    y.set(offsetY * 0.2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      className="
        py-28 px-6 text-center
        bg-[#e7f2ee]
        dark:bg-[#0f1a17]
        relative overflow-hidden
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div
          className="
          absolute w-100 h-100
          bg-[#34d399]/20 dark:bg-[#34d399]/15
          blur-[120px]
          rounded-full
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
        "
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2
          className="
          text-3xl md:text-5xl font-bold
          text-[#1d3a33]
          dark:text-[#e7f2ee]
        "
        >
          Ready to Build Something Amazing?
        </h2>

        <p
          className="
          mt-5
          text-[#3d5c52]
          dark:text-[#9fd8c5]
        "
        >
          Let’s turn your idea into a high-converting digital experience.
        </p>

        {/* MAGNETIC BUTTON */}
        <div className="mt-10 flex justify-center">
          <motion.button
            onClick={() =>
              navigate("/contact", {
                state: {
                  message:
                    "Hi, I’d like to start a new project. Let’s discuss the details.",
                },
              })
            }
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            style={{ x: springX, y: springY }}
            className="
              px-8 py-4 rounded-full font-semibold text-lg
              bg-[#1d3a33] text-[#e7f2ee]
              dark:bg-[#34d399] dark:text-[#0f1a17]

              shadow-lg
              shadow-[#34d399]/20 dark:shadow-[#34d399]/30

              hover:scale-105 transition
            "
          >
            Start Your Project →
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
