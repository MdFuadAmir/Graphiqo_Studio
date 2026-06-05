import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import img from "../../assets/Images/project/p1.png";
import { Link } from "react-router";
const Hero = () => {
  return (
    <section
      className="
        relative md:min-h-screen px-6 flex items-center overflow-hidden
        bg-[#e7f2ee] 
        dark:bg-[#0f1a17]
        py-28
      "
    >
      {/* BACKGROUND */}
      <motion.div
        animate={{ rotate: [0, 6, -6, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="
          absolute -right-24 top-1/2 -translate-y-1/2
          w-105 h-105
          rounded-[40%]
          blur-3xl

          bg-linear-to-tr
          from-[#7dd3b0]/25
          to-[#34d399]/25

          dark:from-[#7dd3b0]/10
          dark:to-[#34d399]/10
        "
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-20 items-center">
        {/* ================= RIGHT VISUAL ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          {/* 🖥️ MAIN MOCKUP CARD */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="
  w-full md:w-105
  aspect-4/3 md:aspect-auto
  md:h-105
  rounded-2xl shadow-xl overflow-hidden
  bg-linear-to-br
  from-[#7dd3b0]
  to-[#34d399]
"
          >
            <img
              src={img}
              alt="project preview"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* 📊 STATS CARD */}
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="
              absolute -bottom-12 -left-4
              w-28 sm:w-32
              h-28 sm:h-32

              rounded-xl
              shadow-md

              bg-[#cfe9df]/80
              dark:bg-[#12302a]/80

              backdrop-blur-md
              border border-[#7dd3b0]/30

              flex flex-col items-center justify-center
              text-center
            "
          >
            <p className="text-lg font-bold text-[#1d3a33] dark:text-[#d6f5e8]">
              +240%
            </p>
            <p className="text-xs text-[#3d5c52] dark:text-[#a7d9c6]">
              Conversion
            </p>
          </motion.div>
        </motion.div>

        {/* ================= TEXT ================= */}
        <div className="order-2 md:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              text-3xl sm:text-4xl md:text-6xl
              font-extrabold leading-tight

              text-[#1d3a33] 
              dark:text-[#d6f5e8]
            "
          >
            Crafting
            <span className="block mt-1">
              <span
                className="
                  text-transparent bg-clip-text
                  bg-linear-to-r
                  from-[#7dd3b0]
                  to-[#34d399]
                "
              >
                Visual Identities
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="
              mt-5 text-sm sm:text-base md:text-lg
              max-w-md sm:max-w-lg leading-relaxed

              text-[#3d5c52] 
              dark:text-[#a7d9c6]
            "
          >
            I design clean, modern and strategic visuals that help brands stand
            out and communicate with clarity.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <Link
              to={"/projects"}
              className="
                px-6 py-2.5 rounded-full

                bg-[#1d3a33] 
                dark:bg-[#34d399]

                text-[#e7f2ee] 
                dark:text-[#0f1a17]

                hover:scale-105 active:scale-95 transition
              "
            >
              View Work
            </Link>

            <Link
              to={"/contact"}
              state={{
                message:
                  "Hi, I’m interested in your design services. Let’s discuss a project.",
              }}
              className="
                px-6 py-2.5 rounded-full

                border border-[#7dd3b0]

                text-[#1d3a33] 
                dark:text-[#d6f5e8]

                hover:bg-[#7dd3b0]/10
                transition
              "
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>

      {/* SCROLL */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="
          absolute bottom-6 left-1/2 -translate-x-1/2
          text-[#34d399]
        "
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;
