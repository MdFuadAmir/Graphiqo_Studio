import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    q: "What services do you offer?",
    a: "We provide UI/UX design, full-stack web development, and conversion-focused landing pages for modern brands."
  },
  {
    id: 2,
    q: "How long does a project take?",
    a: "Most projects take 1–3 weeks depending on complexity and features required."
  },
  {
    id: 3,
    q: "Do you offer revisions?",
    a: "Yes, we offer multiple revisions to ensure the final product matches your vision perfectly."
  },
  {
    id: 4,
    q: "Can I request a custom design system?",
    a: "Absolutely. We build fully custom design systems tailored to your brand identity."
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 px-6 bg-[#eef7f3] dark:bg-[#0f1a17]">

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1b3a34] dark:text-[#d6f5e8]">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-[#3d5c52] dark:text-[#9fd8c5]">
          Everything you need to know before working with us.
        </p>
      </div>

      {/* ACCORDION */}
      <div className="max-w-3xl mx-auto space-y-4">

        {faqs.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className="
                border border-[#7dd3b0]/20
                rounded-xl
                bg-white/60 dark:bg-[#132b24]/60
                backdrop-blur-md
                overflow-hidden
              "
            >
              {/* QUESTION */}
              <button
                onClick={() => toggle(item.id)}
                className="
                  w-full flex justify-between items-center
                  px-5 py-4 text-left
                "
              >
                <span className="font-medium text-[#1b3a34] dark:text-[#d6f5e8]">
                  {item.q}
                </span>

                <span className="text-[#34d399] text-xl">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* ANSWER */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-5 pb-4"
                  >
                    <p className="text-sm text-[#3d5c52] dark:text-[#9fd8c5] leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default FAQ;