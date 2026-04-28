import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router";

const Logo = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300;
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Link to="/" onClick={scrollToTop}>
      <motion.h1
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
            text-lg md:text-xl font-bold
            text-emerald-900
            dark:text-emerald-100
          "
      >
        Graphiqo<span className="text-emerald-500">.</span>
      </motion.h1>
    </Link>
  );
};

export default Logo;
