import { motion, useMotionValue, useTransform } from "framer-motion";

const ProjectHero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const textX = useTransform(x, [-300, 300], [-10, 10]);
  const textY = useTransform(y, [-300, 300], [-10, 10]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;

    const offsetX = e.clientX - innerWidth / 2;
    const offsetY = e.clientY - innerHeight / 2;

    x.set(offsetX);
    y.set(offsetY);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="
        relative flex flex-col items-center justify-center text-center
        bg-[#dcefe8] dark:bg-[#11211c]
        overflow-hidden px-6 pt-28 pb-10 
      "
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* 🧠 CONTENT */}
      <div className="relative z-10 flex flex-col items-center">
        {/* TITLE */}
        <motion.h1
          style={{ x: textX, y: textY }}
          className="
            font-extrabold
            text-4xl sm:text-5xl md:text-6xl lg:text-8xl
            text-[#1b3a33] dark:text-[#e7f2ee]
            tracking-[0.15em]
          "
        >
          <span className="block">MY</span>
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#34d399] to-[#7dd3b0]">
            WORKS
          </span>
        </motion.h1>

        {/* SUBTITLE */}
        <p
          className="
            mt-6 md:mt-8
            text-sm md:text-base
            text-[#3d5c52] dark:text-[#9fd8c5]
            max-w-md
          "
        >
          A curated collection of digital experiences crafted with precision,
          motion and purpose.
        </p>

        {/* SCROLL INDICATOR */}
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-10 md:mt-14"
        >
          <div className="w-6 h-10 rounded-full border border-[#34d399] flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#34d399] rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHero;
