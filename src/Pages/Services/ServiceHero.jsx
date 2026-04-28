import { motion } from "framer-motion";

const ServiceHero = () => {
  return (
    <section className="relative py-24 md:py-28 flex items-center justify-center overflow-hidden bg-[#eef7f3] dark:bg-[#070f0d]">
      {/* 🌊 Mesh Gradient Layer */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-150 h-150 rounded-full blur-[160px] opacity-40 bg-[#34d399]"
          animate={{ x: [0, 150, -120, 0], y: [0, -120, 100, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-125 h-125 rounded-full blur-[180px] opacity-30 bg-[#043915]"
          animate={{ x: [0, -180, 120, 0], y: [0, 140, -100, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute w-137 h-137 rounded-full blur-[200px] opacity-20 bg-[#6911bc]"
          animate={{ x: [0, 120, -140, 0], y: [0, -140, 120, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 🧊 Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ✨ Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="
            text-4xl md:text-6xl font-bold
            text-[#1b3a33] dark:text-white
            leading-tight
          "
        >
          Solutions tailored <br />
          <span className="text-[#34d399] drop-shadow-[0_0_25px_rgba(52,211,153,0.35)]">
            for your brand
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-[#3d5c52] dark:text-[#9ca3af] max-w-xl mx-auto"
        >
          We design high-performing digital experiences that combine strategy,
          design, and conversion-focused thinking.
        </motion.p>

        {/* CTA */}
        <motion.button
          onClick={() =>
            document.getElementById("pricing")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
    mt-8 px-6 py-3 rounded-full
    bg-[#34d399]
    text-[#04110d]
    font-medium shadow-lg
  "
        >
          Explore Services
        </motion.button>
      </div>
    </section>
  );
};

export default ServiceHero;
