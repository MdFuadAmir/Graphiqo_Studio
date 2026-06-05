import { motion } from "framer-motion";
import profile from "../../assets/Images/pro3.png";

const AboutHero = () => {
  return (
    <section className="py-26 md:py-32 px-4 sm:px-6 bg-[#e7f2ee] dark:bg-[#0f1a17] transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative">
            {/* IMAGE */}
            <img
              src={profile}
              alt="profile"
              className="
                w-full h-full object-cover aspect-3/4
                 rounded-2xl
                shadow-[0_20px_60px_rgba(52,211,153,0.2)]
              "
            />

            {/* BADGE */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="
                absolute -top-3 -right-3
                px-3 py-1.5 sm:px-4 sm:py-2
                rounded-xl
                bg-white dark:bg-[#132b24]
                border border-[#7dd3b0]/30
                shadow-lg
              "
            >
              <p className="text-xs sm:text-sm font-semibold text-[#34d399] whitespace-nowrap">
                5+ Years Exp
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              text-2xl sm:text-3xl md:text-5xl
              font-bold text-[#1b3a33] dark:text-[#e7f2ee]
              leading-snug
            "
          >
            I design{" "}
            <span className="text-[#34d399]">bold, modern and meaningfulz</span>{" "}
            visual experiences.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-sm sm:text-base text-[#5f7d73] dark:text-[#9fd8c5] leading-relaxed"
          >
            I’m a passionate{" "}
            <span className="text-[#34d399] font-medium">graphic designer</span>{" "}
            focused on creating clean, impactful and brand-driven visuals that
            communicate ideas clearly and beautifully.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-sm sm:text-base text-[#5f7d73] dark:text-[#9fd8c5]"
          >
            My work blends creativity with strategy — from branding and logo
            design to social media visuals and UI concepts that help businesses
            stand out in a competitive digital world.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
