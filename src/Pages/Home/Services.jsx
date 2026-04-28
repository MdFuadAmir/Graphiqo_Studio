import { motion } from "framer-motion";
import { useState } from "react";
import { FaPenNib, FaLayerGroup, FaChartLine } from "react-icons/fa";

const services = [
  {
    icon: <FaPenNib />,
    title: "Brand Identity Design",
    desc: "Crafting unique visual identities that make your brand instantly recognizable and memorable.",
  },
  {
    icon: <FaLayerGroup />,
    title: "UI/UX Design",
    desc: "Designing modern, user-friendly interfaces that improve engagement and conversion.",
  },
  {
    icon: <FaChartLine />,
    title: "Growth & Marketing",
    desc: "Building strategies and systems that help your business scale with real results.",
  },
];

const ServiceCard = ({ item }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      whileHover={{
        rotateX: 6,
        rotateY: -6,
        scale: 1.03,
      }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
      className="
        relative p-6 rounded-2xl overflow-hidden

        bg-[#eef7f3]
        dark:bg-[#0f1a17]

        border border-emerald-200/40
        dark:border-emerald-500/20

        shadow-md hover:shadow-xl
      "
    >
      {/* 🔥 GLOW FOLLOW */}
      <span
        className="pointer-events-none absolute w-40 h-40 rounded-full blur-2xl opacity-40"
        style={{
          top: pos.y - 80,
          left: pos.x - 80,
          background: "rgba(52, 211, 153, 0.35)",
        }}
      />

      {/* ICON */}
      <div className="text-2xl text-emerald-500 mb-4">
        {item.icon}
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold text-[#1b3a34] dark:text-[#d6f5e8]">
        {item.title}
      </h3>

      {/* DESC */}
      <p className="mt-3 text-sm leading-relaxed text-[#3d5c52] dark:text-[#9fd8c5]">
        {item.desc}
      </p>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section
      className="
        py-20 px-6
        bg-[#e7f2ee]
        dark:bg-[#0f1a17]
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1b3a34] dark:text-[#d6f5e8]">
          Key Services
        </h2>

        <p className="text-center mt-4 text-sm md:text-base text-[#3d5c52] dark:text-[#9fd8c5] max-w-xl mx-auto">
          I provide design and growth solutions that help brands stand out and scale effectively.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {services.map((item, i) => (
            <ServiceCard key={i} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;