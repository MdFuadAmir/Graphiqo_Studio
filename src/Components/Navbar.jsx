import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useNavigate } from "react-router";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import DarkMood from "../Utils/DarkMood";
import Logo from "../Utils/Logo";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // 👉 Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4">
      <div className="max-w-6xl mx-auto">
        {/* NAVBAR */}
        <div
          className="
          flex items-center justify-between
          px-5 py-3
          rounded-2xl
          backdrop-blur-xl

          bg-emerald-50/60
          dark:bg-emerald-950/40

          border border-emerald-100/40
          dark:border-emerald-800/30

          shadow-sm
        "
        >
          {/* LOGO */}
          <Logo />

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition
                  ${
                    isActive
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-emerald-800/70 dark:text-emerald-200/70"
                  }`
                }
              >
                {({ isActive }) => (
                  <div className="relative">
                    {link.name}

                    {isActive && (
                      <motion.div
                        layoutId="activeLink"
                        className="
                          absolute left-0 -bottom-1
                          w-full h-0.5
                          bg-emerald-500
                          rounded-full
                        "
                      />
                    )}
                  </div>
                )}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* DARK MODE */}
            <DarkMood />

            {/* HIRE BUTTON */}
            <button
              onClick={() =>
                navigate("/contact", {
                  state: {
                    message: `Hello,

We have reviewed your work and are genuinely impressed with your design approach, creativity, and attention to detail.

We would love to collaborate with you and explore the opportunity of having you work with our company on upcoming projects.

Your skillset aligns perfectly with what we are looking for, and we believe you can bring great value to our team.

Please let us know your availability so we can discuss this further.

Looking forward to working with you.`,
                  },
                })
              }
              className="
    hidden md:block
    px-5 py-2 rounded-full
    text-sm font-medium
    text-white
    bg-emerald-600
    hover:bg-emerald-500
    transition
  "
            >
              Hire Me
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="
                md:hidden text-2xl
                text-emerald-900
                dark:text-emerald-100
              "
            >
              {open ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="
                mt-3 p-5 rounded-2xl
                backdrop-blur-xl

                bg-emerald-50/70
                dark:bg-emerald-950/50

                border border-emerald-100/40
                dark:border-emerald-800/30

                shadow-sm
              "
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <NavLink
                    key={i}
                    to={link.path}
                    onClick={() => setOpen(false)} // 👉 close on click
                    className={({ isActive }) =>
                      `text-sm font-medium transition
                      ${
                        isActive
                          ? "text-emerald-600 dark:text-emerald-300"
                          : "text-emerald-800/70 dark:text-emerald-200/70"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <button
                  onClick={() => {
                    setOpen(false);
                    navigate("/contact", {
                      state: {
                        message: `Hello,

We have reviewed your work and are genuinely impressed with your design approach, creativity, and attention to detail.

We would love to collaborate with you and explore the opportunity of having you work with our company on upcoming projects.

Your skillset aligns perfectly with what we are looking for, and we believe you can bring great value to our team.

Please let us know your availability so we can discuss this further.

Looking forward to working with you.`,
                      },
                    });
                  }}
                  className="
    mt-2 py-2 rounded-full
    text-sm font-medium
    text-white
    bg-emerald-600
    hover:bg-emerald-500
    transition
  "
                >
                  Hire Me
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
