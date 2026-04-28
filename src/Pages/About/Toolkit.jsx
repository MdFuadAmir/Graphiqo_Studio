import { motion } from "framer-motion";
import {
  FaPhotoVideo,
  FaFigma,
  FaPaintBrush,
  FaMagic,
  FaImages,
  FaPencilRuler,
} from "react-icons/fa";

const tools = [
  { name: "Photoshop", level: 90, icon: FaPhotoVideo, color: "#31A8FF" },
  { name: "Figma", level: 85, icon: FaFigma, color: "#F24E1E" },
  { name: "Illustrator", level: 88, icon: FaPencilRuler, color: "#FF9A00" },
  { name: "After Effects", level: 70, icon: FaMagic, color: "#A855F7" },
  { name: "Lightroom", level: 75, icon: FaImages, color: "#1E90FF" },
  { name: "Creative Tools", level: 80, icon: FaPaintBrush, color: "#34d399" },
];

const Toolkit = () => {
  return (
    <section className="py-20 px-6 bg-[#e7f2ee] dark:bg-[#0f1a17]">
      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1b3a33] dark:text-[#e7f2ee]">
          Technical Toolkit
        </h2>
        <p className="mt-3 text-[#5f7d73] dark:text-[#9fd8c5]">
          Tools I use to craft modern visual experiences
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tools.map((tool, i) => {
          const Icon = tool.icon;

          return (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="
                relative p-6 rounded-2xl
                bg-white/70 dark:bg-[#132b24]/70
                backdrop-blur-md
                border border-[#7dd3b0]/20
                shadow-sm hover:shadow-xl
                transition
                overflow-hidden
              "
            >
              {/* floating glow dot */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#34d399]"
              />

              {/* ICON */}
              <div className="flex items-center gap-3">
                <Icon size={28} style={{ color: tool.color }} />
                <h3 className="text-lg font-semibold text-[#1b3a33] dark:text-[#e7f2ee]">
                  {tool.name}
                </h3>
              </div>

              {/* PROGRESS BAR */}
              <div className="mt-5 w-full h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tool.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-[#34d399]"
                />
              </div>

              {/* PERCENTAGE */}
              <p className="mt-3 text-sm text-[#5f7d73] dark:text-[#9fd8c5]">
                {tool.level}% Proficiency
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Toolkit;
