import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const services = [
  {
    title: "Brand Identity",
    description: "Crafting strong visual identity systems for modern brands.",
    items: ["Logo Design", "Color System", "Typography System", "Brand Guideline"],
  },
  {
    title: "UI/UX Experience",
    description: "Designing intuitive and conversion-focused digital experiences.",
    items: ["Wireframing", "UI Design", "Prototyping", "User Journey"],
  },
  {
    title: "Web Engineering",
    description: "High-performance scalable modern web applications.",
    items: ["Frontend Development", "API Integration", "Optimization", "Deployment"],
  },
  {
    title: "Digital Growth",
    description: "Helping brands grow through smart digital strategy.",
    items: ["Content Strategy", "Ad Design", "Campaign Planning"],
  },
];

const ServiceAccordion = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 px-6 bg-[#e7f2ee] dark:bg-[#0f1a17] transition-colors duration-500">
      
      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1b3a33] dark:text-white">
          What I Do Best
        </h2>
        <p className="mt-4 text-[#5f7d73] dark:text-[#9fd8c5]">
          A focused set of services designed for real impact
        </p>
      </div>

      {/* LAYOUT */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT MENU */}
        <div className="space-y-3">
          {services.map((service, i) => {
            const isActive = active === i;

            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`
                  w-full text-left p-5 rounded-2xl transition-all duration-300
                  border backdrop-blur-md

                  ${
                    isActive
                      ? "bg-[#34d399] text-[#0f1a17] shadow-lg"
                      : "bg-white/60 dark:bg-[#132b24]/60 border-[#7dd3b0]/20 text-[#1b3a33] dark:text-white hover:scale-[1.02]"
                  }
                `}
              >
                <h3 className="font-semibold text-lg">
                  {service.title}
                </h3>
                <p className="text-sm opacity-80 mt-1">
                  {service.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="
                p-8 rounded-3xl
                bg-white/70 dark:bg-[#132b24]/70
                backdrop-blur-xl
                border border-[#7dd3b0]/20
                shadow-xl
              "
            >
              <h3 className="text-2xl font-bold text-[#1b3a33] dark:text-white">
                {services[active].title}
              </h3>

              <p className="mt-3 text-[#5f7d73] dark:text-[#9fd8c5]">
                {services[active].description}
              </p>

              <div className="mt-6 space-y-3">
                {services[active].items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#2f4f46] dark:text-[#c6f1e2]">
                    <FaCheck className="text-[#34d399]" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default ServiceAccordion;