import { motion } from "framer-motion";
import { Link } from "react-router";
import { projects } from "../../../public/Data/Projects";

const FeaturedWork = () => {
  const featured = projects.slice(0, 4);

  return (
    <section className="py-20 px-6 bg-[#eef7f3] dark:bg-[#0f1a17]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1b3a34] dark:text-[#d6f5e8]">
          Featured Work
        </h2>

        <p className="text-center mt-4 text-sm text-[#3d5c52] dark:text-[#9fd8c5] max-w-xl mx-auto">
          A selection of projects that showcase strategy, design, and results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 auto-rows-auto md:auto-rows-[220px]">
          {featured.map((item, index) => (
            <Link
              to={`/projects/${item.id}`}
              key={item.id}
              className={`
                relative overflow-hidden rounded-2xl group
                ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}
              `}
            >
              {/* IMAGE */}
              <motion.img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.06 }}
              />
              {/* OVERLAY */}
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
                <span
                  to={`/projects/${item.id}`}
                  className="
                    px-6 py-2.5 rounded-full
                    bg-[#34d399]
                    text-[#0f1a17]
                    font-medium
                    hover:scale-105 transition
                  "
                >
                  View Case Study
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
