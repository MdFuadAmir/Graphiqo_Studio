/* eslint-disable react-hooks/rules-of-hooks */
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const statsData = [
  { label: "Projects", value: 15 },
  { label: "Clients", value: 12 },
  { label: "Awards", value: 3 },
  { label: "Experience", value: 2, suffix: "Y+" },
];

// 🔢 Count Up Hook
const useCountUp = (end, inView) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1200;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, inView]);

  return count;
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="
        py-24 px-6
        bg-[#e7f2ee]
        dark:bg-[#0f1a17]
        relative overflow-hidden
      "
    >
      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute w-125 h-125 bg-[#34d399]/10 blur-[140px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#1c3a33] dark:text-[#e7f2ee]">
          Achievements That Matter
        </h2>

        <p className="text-center mt-4 text-[#3d5c52] dark:text-[#9fd8c5] max-w-xl mx-auto">
          Real numbers that reflect consistency, trust, and performance.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          {statsData.map((item, i) => {
            const count = useCountUp(item.value, isInView);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="
                  relative text-center
                  p-6 md:p-8 rounded-2xl
                  bg-white/60 dark:bg-[#132b24]/60
                  backdrop-blur-md

                  border border-[#7dd3b0]/20
                  shadow-md hover:shadow-xl

                  transition-all
                "
              >
                {/* linear ring */}
                <div className="absolute inset-0 rounded-2xl border border-transparent bg-linear-to-r from-[#34d399]/20 to-transparent opacity-0 hover:opacity-100 transition" />

                {/* NUMBER */}
                <h3 className="text-3xl md:text-5xl font-bold text-[#1c3a33] dark:text-[#e0fff4]">
                  {count}
                  {item.suffix || "+"}
                </h3>

                {/* LABEL */}
                <p className="mt-2 text-sm md:text-base text-[#4e6b63] dark:text-[#9fd8c5]">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
