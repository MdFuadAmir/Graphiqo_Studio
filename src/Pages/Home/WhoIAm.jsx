import { motion } from "framer-motion";
import { Link } from "react-router";
import profile from "../../assets/Images/pro1.png"
const text =
  "I help brands stand out through modern, clean and conversion-focused design systems. From visual identity to UI/UX, I create experiences that not only look beautiful but also drive real business results. My approach combines strategy, creativity and performance to build designs that actually work in the real world.";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

const WhoIAm = () => {
  return (
    <section
      className="
         py-16 md:py-20 px-6
        bg-[#eef7f3] 
        dark:bg-[#0f1a17]
      "
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* 🖼️ LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-start"
        >
          {/* IMAGE WRAPPER */}
          <div className="relative w-65 sm:w-75 md:w-85">
            {/* ✅ CONTROLLED GLOW (only behind image) */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-emerald-400/20 to-teal-400/10 blur-xl opacity-60"></div>

            {/* IMAGE */}
            <motion.img
              // src="https://i.ibb.co.com/HTjSwDhd/fuad.png"
              src={profile}
              alt="about"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="
        relative
        w-full
        aspect-3/4
        object-cover
        rounded-2xl
        border border-emerald-200/40
        dark:border-emerald-500/20
        shadow-lg
      "
            />
          </div>
        </motion.div>

        {/* 🧠 RIGHT TEXT */}
        <div>
          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              text-3xl md:text-4xl font-bold

              text-[#1b3a34] 
              dark:text-[#d6f5e8]
            "
          >
            Who I Am
          </motion.h2>

          {/* DESCRIPTION (LETTER ANIMATION) */}
          <motion.p
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
              mt-6 text-sm md:text-base leading-relaxed

              text-[#355f56] 
              dark:text-[#9fd8c5]
            "
          >
            {text.split("").map((char, index) => (
              <motion.span key={index} variants={child}>
                {char}
              </motion.span>
            ))}
          </motion.p>

          {/* CTA */}
          <Link
            to="/about"
            className="
    inline-flex items-center justify-center gap-2
    mt-8 px-6 py-2.5 rounded-full

    bg-linear-to-r from-[#1b3a34] to-[#244c43]
    dark:from-[#34d399] dark:to-[#10b981]

    text-[#e6f4ef] dark:text-[#0f1a17]
    font-medium

    shadow-md hover:shadow-xl

    transition-all duration-300
    hover:scale-105 active:scale-95

    focus:outline-none focus:ring-2 focus:ring-[#34d399]/40
  "
          >
            Learn More
            {/* subtle arrow */}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoIAm;
