import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  FaDribbble,
  FaBehance,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Logo from "../Utils/Logo";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        px-6 pt-20 pb-10
        bg-[#f4fbf8] dark:bg-[#0f1a17]
        text-[#1b3a33] dark:text-white
        transition-colors duration-500
      "
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <Logo />
          <p className="mt-4 text-[#5f7d73] dark:text-[#9fd8c5] text-sm leading-relaxed">
            Crafting digital experiences with precision and performance.
          </p>

          <div className="flex gap-4 mt-6">
            {[FaDribbble, FaBehance, FaLinkedinIn, FaInstagram].map(
              (Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="
                    p-2 rounded-full cursor-pointer
                    bg-[#e6f5ef] dark:bg-[#132b24]
                    hover:bg-[#34d399] 
                    transition
                  "
                >
                  <Icon size={16} />
                </motion.div>
              ),
            )}
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="font-semibold mb-4 text-[#1b3a33] dark:text-[#d6f5e8]">
            Navigation
          </h4>

          <div className="space-y-2 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "Projects", path: "/projects" },
              { name: "Services", path: "/services" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="
                  block relative w-fit group
                  text-[#5f7d73] dark:text-[#9fd8c5]
                  hover:text-[#1b3a33] dark:hover:text-white
                "
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#34d399] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* EXTRA LINKS */}
        <div>
          <h4 className="font-semibold mb-4 text-[#1b3a33] dark:text-[#d6f5e8]">
            Resources
          </h4>

          <div className="space-y-2 text-sm text-[#5f7d73] dark:text-[#9fd8c5]">
            <p className="hover:text-[#1b3a33] dark:hover:text-white cursor-pointer">
              Privacy Policy
            </p>
            <p className="hover:text-[#1b3a33] dark:hover:text-white cursor-pointer">
              Terms & Conditions
            </p>
            <p className="hover:text-[#1b3a33] dark:hover:text-white cursor-pointer">
              Design System
            </p>
            <p className="hover:text-[#1b3a33] dark:hover:text-white cursor-pointer">
              Case Studies
            </p>
          </div>
        </div>

        {/* CTA */}
        <div>
          <h4 className="font-semibold text-[#1b3a33] dark:text-[#d6f5e8]">
            Let’s build something great 🚀
          </h4>

          <p className="mt-3 text-sm text-[#5f7d73] dark:text-[#9fd8c5]">
            Drop your email and I’ll get back to you within 24 hours.
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="
        mt-16 pt-6 border-t
        border-[#cfe7df] dark:border-white/10
        flex flex-col md:flex-row justify-between items-center gap-4 md:px-16
      ">
        <p className="text-sm text-[#5f7d73] dark:text-[#9fd8c5]">
          © 2026 Md Fuad Amir. All rights reserved.
        </p>

        <button
          onClick={scrollTop}
          className="
            text-sm text-[#34d399]
            hover:underline
          "
        >
          ↑ Back to Top
        </button>
      </div>
    </motion.footer>
  );
};

export default Footer;