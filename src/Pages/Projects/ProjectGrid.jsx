import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../../public/Data/Projects";
import CategoryFilter from "./CategoryFilter";

const ProjectGrid = () => {
  const [category, setCategory] = useState("All");

  const filtered =
    category === "All"
      ? projects
      : projects.filter((p) => p.category === category);

  return (
    <section className="py-16 md:py-24 px-6 bg-[#e7f2ee] dark:bg-[#0f1a17]">
      {/* FILTER */}
      <CategoryFilter onChange={setCategory} />

      {/* GRID */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 max-w-6xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Link to={`/projects/${item.id}`} className="group block">
                  {/* IMAGE CARD */}
                  <div
                    className="
                      relative overflow-hidden rounded-xl
                      shadow-[0_10px_40px_rgba(16,185,129,0.25)]
                      dark:shadow-[0_10px_40px_rgba(16,185,129,0.15)]
                      transition-all duration-500
                      group-hover:shadow-[0_20px_60px_rgba(16,185,129,0.4)]
                    "
                  >
                    {/* IMAGE */}
                    <img
                      src={item.img}
                      alt={item.title}
                      className="
                        w-full h-80 object-cover
                        transition duration-500
                        group-hover:grayscale
                        group-hover:scale-105
                      "
                    />

                    {/* HOVER OVERLAY */}
                    <motion.div
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      whileHover={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      className="
              absolute inset-0
              flex items-center justify-center
              bg-black/40
              opacity-0 group-hover:opacity-100
              transition
            "
                    >
                      <button className="px-6 py-2.5 cursor-pointer rounded-full bg-[#34d399] text-[#0f1a17]">
                        View Case Study
                      </button>
                    </motion.div>
                  </div>

                  {/* META */}
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-sm text-[#5f7d73] dark:text-[#9fd8c5]">
                      {item.year}
                    </p>

                    <div className="flex gap-2 flex-wrap justify-end">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="
                            text-xs px-2 py-1 rounded-full
                            bg-[#34d399]/10
                            text-[#2f4f46] dark:text-[#c6f1e2]
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="col-span-full flex flex-col items-center justify-center py-20 text-center"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-[#1b3a33] dark:text-[#e7f2ee]">
                No Projects Found
              </h3>

              <p className="mt-2 text-sm text-[#5f7d73] dark:text-[#9fd8c5] max-w-md">
                There are no projects available in this category right now.
              </p>

              <button
                onClick={() => setCategory("All")}
                className="
                  mt-6 px-5 py-2 rounded-full
                  bg-[#34d399]
                  text-[#0f1a17]
                  hover:scale-105 transition
                "
              >
                Show All Projects
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProjectGrid;
