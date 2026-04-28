import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "E-commerce Owner",
    text: "Conversions increased massively after implementing funnel system.",
    rating: 5,
  },
  {
    id: 2,
    name: "John Carter",
    role: "Marketing Agency",
    text: "Scaling ads without burning money. Game changer.",
    rating: 4,
  },
  {
    id: 3,
    name: "Ayesha Khan",
    role: "Content Creator",
    text: "SEO growth was insane. Traffic doubled within weeks.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Lee",
    role: "Startup Founder",
    text: "Clean design helped raise investor confidence.",
    rating: 5,
  },
  {
    id: 5,
    name: "David Smith",
    role: "Digital Marketer",
    text: "Engagement went through the roof.",
    rating: 4,
  },
];

// ---------------- MODAL ----------------
const Modal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="
            w-full max-w-lg p-6 rounded-2xl
            bg-[#e7f2ee] dark:bg-[#0f1a17]
            border border-[#7dd3b0]/30
            shadow-2xl
          "
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-bold text-[#1b3a33] dark:text-[#d6f5e8]">
            {data.name}
          </h2>

          <p className="text-sm text-[#5f7d73] dark:text-[#9fd8c5]">
            {data.role}
          </p>

          <p className="mt-2 text-[#34d399]">{"⭐".repeat(data.rating)}</p>

          <p className="mt-5 text-[#2f4f46] dark:text-[#c6f1e2]">{data.text}</p>

          <button
            onClick={onClose}
            className="
              mt-6 px-4 py-2 rounded-full
              bg-[#34d399] text-[#0f1a17] cursor-pointer
            "
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ---------------- MAIN ----------------
const Testimonials = () => {
  const [selected, setSelected] = useState(null);

  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials, ...testimonials];

  return (
    <section className="py-16 md:py-24 bg-[#eef7f3] dark:bg-[#0f1a17] overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#a2dcc2]/20 w-105 h-105 rounded-full blur-3xl"></div>

      {/* HEADER */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1b3a33] dark:text-[#e7f2ee]">
          What Clients Say
        </h2>
      </div>

      {/* DIAGONAL WRAPPER */}
      <div className="relative h-100 -rotate-12 scale-110">
        {/* ROW 1 */}
        <div className="flex gap-6 w-max animate-marquee-left pause-on-hover">
          {row1.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelected(item)}
              className="
                w-70 p-5 rounded-xl cursor-pointer
                bg-white/70 dark:bg-[#132b24]/70
                backdrop-blur-md
                border border-[#7dd3b0]/20
                shadow-md
              "
            >
              <p className="text-sm text-[#2f4f46] dark:text-[#c6f1e2]">
                “{item.text}”
              </p>

              <h4 className="mt-4 font-semibold text-[#1b3a33] dark:text-[#e7f2ee]">
                {item.name}
              </h4>
            </div>
          ))}
        </div>

        {/* ROW 2 (reverse direction) */}
        <div className="flex gap-6 w-max mt-10 animate-marquee-right pause-on-hover">
          {row2.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelected(item)}
              className="
                w-70 p-5 rounded-xl cursor-pointer
                bg-white/70 dark:bg-[#132b24]/70
                backdrop-blur-md
                border border-[#7dd3b0]/20
                shadow-md
              "
            >
              <p className="text-sm text-[#2f4f46] dark:text-[#c6f1e2]">
                “{item.text}”
              </p>

              <h4 className="mt-4 font-semibold text-[#1b3a33] dark:text-[#e7f2ee]">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <Modal data={selected} onClose={() => setSelected(null)} />

      {/* ANIMATION CSS */}
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        .animate-marquee-left {
          animation: marquee-left 20s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
