import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { Link } from "react-router";

const ContactCTA = () => {
  return (
    <section className="py-16 px-6 bg-[#e7f2ee] dark:bg-[#0f1a17] transition-colors duration-500">
      <div className="max-w-4xl mx-auto text-center">
        {/* TEXT */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-[#1b3a33] dark:text-[#e7f2ee]"
        >
          Thanks for visiting my portfolio
        </motion.h2>

        <p className="mt-3 text-[#5f7d73] dark:text-[#9fd8c5]">
          Let’s keep it simple — explore more or grab my resume.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          {/* BACK HOME */}
          <Link to="/">
            <motion.button
              whileHover={{ x: -5 }}
              className="
                flex items-center gap-2 px-6 py-3 rounded-full
                bg-white/70 dark:bg-[#132b24]/70
                border border-[#7dd3b0]/20
                backdrop-blur-md
                text-[#1b3a33] dark:text-[#e7f2ee]
                hover:shadow-lg transition
              "
            >
              <FiArrowRight className="rotate-180" />
              Back to Home
            </motion.button>
          </Link>

          {/* DOWNLOAD RESUME */}
          <motion.a
            href="https://docs.google.com/document/d/12K2cXFu7bpCguwRwaytDKMEsww5fUsbcZP4UmAU-N6E/export?format=pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="
    flex items-center gap-2 px-6 py-3 rounded-full
    bg-[#34d399] text-[#0f1a17]
    font-medium
    shadow-md hover:shadow-xl transition
  "
          >
            <FiDownload />
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
