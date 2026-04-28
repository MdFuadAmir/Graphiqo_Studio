import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Branding", "UI/UX", "Typography", "Social Media"];

const CategoryFilter = ({ onChange }) => {
  const [active, setActive] = useState("All");

  const handleClick = (cat) => {
    setActive(cat);
    onChange?.(cat);
  };

  return (
    <div className="flex justify-center mt-8 px-4">
      {/* SCROLLABLE WRAPPER FOR MOBILE */}
      <div
        className="
          relative flex gap-2
          px-2 py-2 rounded-full
          bg-white/60 dark:bg-[#132b24]/60
          backdrop-blur-md
          border border-[#7dd3b0]/20
          w-full md:w-auto
          overflow-x-auto md:overflow-visible
          whitespace-nowrap
        "
      >
        {/* ACTIVE PILL */}
        <motion.div
          layoutId="active-pill"
          className="
            absolute inset-y-1
            rounded-full
            bg-[#34d399]
            dark:bg-[#34d399]
          "
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />

        {/* ITEMS */}
        {categories.map((cat) => {
          const isActive = active === cat;

          return (
            <button
              key={cat}
              onClick={() => handleClick(cat)}
              className={`
                relative z-10 px-3 md:px-4 py-1.5 rounded-full text-sm
                transition-colors duration-300 shrink-0

                ${
                  isActive
                    ? "text-[#35ba97] dark:text-[#07f2b3] font-semibold"
                    : "text-[#3d5c52] dark:text-[#c6f1e2]"
                }
              `}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
