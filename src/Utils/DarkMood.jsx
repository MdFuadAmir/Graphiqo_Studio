/* eslint-disable react-hooks/set-state-in-effect */
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdModeNight } from "react-icons/md";

const DarkMood = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const root = document.documentElement;

    root.classList.add("theme-transition");

    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    root.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);

    setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 500);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
      className="
    relative
    w-10 h-10
    flex items-center justify-center

    rounded-lg

    bg-emerald-50/70
    dark:bg-emerald-950/40

    border border-emerald-200/40
    dark:border-emerald-700/30

    backdrop-blur-xl
    shadow-sm
    overflow-hidden
    transition
  "
    >
      {/* subtle glow */}
      <span
        className="
    absolute inset-0
    bg-emerald-400/10
    blur-md
  "
      ></span>

      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.div
            key="light"
            initial={{ opacity: 0, scale: 0.6, rotate: -60 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: 60 }}
            transition={{ duration: 0.25 }}
            className="text-emerald-300 text-lg z-10"
          >
            <CiLight />
          </motion.div>
        ) : (
          <motion.div
            key="dark"
            initial={{ opacity: 0, scale: 0.6, rotate: 60 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: -60 }}
            transition={{ duration: 0.25 }}
            className="text-emerald-700 text-lg z-10"
          >
            <MdModeNight />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default DarkMood;
