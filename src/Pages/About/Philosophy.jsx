import { motion } from "framer-motion";
import { useState } from "react";
import { FaRegGem, FaBolt, FaRegLightbulb } from "react-icons/fa";

const values = [
  {
    title: "Minimalism",
    desc: "Clean and focused design that removes unnecessary distractions.",
    icon: FaRegLightbulb,
  },
  {
    title: "Quality",
    desc: "Pixel-perfect execution with attention to every detail.",
    icon: FaRegGem,
  },
  {
    title: "Speed",
    desc: "Fast, optimized and performance-driven experiences.",
    icon: FaBolt,
  },
];

const Philosophy = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="py-16 md:py-24 px-6 bg-[#e7f2ee] dark:bg-[#0f1a17] transition-colors duration-500">
      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1b3a33] dark:text-[#e7f2ee]">
          Design Philosophy
        </h2>

        <p className="mt-3 text-[#5f7d73] dark:text-[#9fd8c5] max-w-xl mx-auto">
          Principles that guide my creative and development process.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((item, index) => {
          const Icon = item.icon;
          const isActive = active === index;

          return (
            <motion.div
              key={index}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="
                p-8 rounded-2xl
                bg-white/60 dark:bg-[#132b24]/60
                backdrop-blur-md
                border border-[#7dd3b0]/20
                shadow-sm hover:shadow-xl
                transition overflow-hidden
              "
            >
              <div className="absolute -top-6 -right-6 text-[#34d399]/10 text-7xl rotate-12">
                <Icon />
              </div>
              {/* ICON */}
              <motion.div
                animate={isActive ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.6 }}
                className="
                  w-14 h-14 flex items-center justify-center
                  rounded-xl mb-6
                  bg-[#34d399]/10
                  text-[#34d399]
                "
              >
                <Icon size={22} />
              </motion.div>

              {/* CONTENT */}
              <h3 className="text-xl font-semibold text-[#1b3a33] dark:text-[#e7f2ee]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-[#5f7d73] dark:text-[#9fd8c5] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Philosophy;
