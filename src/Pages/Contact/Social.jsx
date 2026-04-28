import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const socials = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    link: "https://facebook.com",
    color: "#1877F2",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://instagram.com",
    color: "#E4405F",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    link: "https://linkedin.com",
    color: "#0A66C2",
  },
  { name: "X", icon: FaXTwitter, link: "https://x.com", color: "#111111" },
];

const SocialSection = () => {
  const [bg, setBg] = useState(null);

  return (
    <section
      className="
        py-16 md:py-24 px-6 transition-all duration-700
        bg-[#e7f2ee] dark:bg-[#0f1a17]
      "
      style={{
        backgroundColor: bg || undefined,
      }}
    >
      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1b3a33] dark:text-white">
          Stay Connected
        </h2>

        <p className="mt-4 text-[#5f7d73] dark:text-[#9fd8c5] max-w-xl mx-auto">
          Let’s connect across platforms and explore my latest creative work,
          thoughts, and projects.
        </p>
      </div>

      {/* ICONS */}
      <div className="flex justify-center gap-8 flex-wrap">
        {socials.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setBg(item.color)}
              onMouseLeave={() => setBg(null)}
              whileHover={{ y: -6, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="
                w-20 h-20 md:w-24 md:h-24
                flex items-center justify-center
                rounded-full
                bg-white/70 dark:bg-[#132b24]/70
                backdrop-blur-md
                border border-[#7dd3b0]/20
                shadow-sm hover:shadow-xl
              "
            >
              <Icon size={28} color={item.color} />
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};

export default SocialSection;
