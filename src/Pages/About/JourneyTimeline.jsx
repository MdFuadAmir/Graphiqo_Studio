import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    year: "2022",
    title: "Junior UI Designer",
    company: "Creative Studio",
    desc: "Started my journey in UI/UX design and branding.",
  },
  {
    year: "2023",
    title: "Freelance Designer",
    company: "Self-Employed",
    desc: "Worked with global clients on branding & web design.",
  },
  {
    year: "2024",
    title: "Senior UI/UX Designer",
    company: "Digital Agency",
    desc: "Led product design for SaaS and startup products.",
  },
  {
    year: "2025",
    title: "Creative Lead",
    company: "Studio X",
    desc: "Managing design systems and creative direction.",
  },
];

const JourneyTimeline = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.2", "end 0.9"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 px-6 bg-[#e7f2ee] dark:bg-[#0f1a17] transition-colors duration-500">
      {/* HEADER */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1b3a33] dark:text-[#e7f2ee]">
          Career Timeline
        </h2>

        <p className="mt-4 text-[#5f7d73] dark:text-[#9fd8c5] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          A structured journey through my professional growth in design and
          development — highlighting the roles, responsibilities, and
          experiences that shaped my approach to building impactful digital
          products.
        </p>
      </div>

      {/* TIMELINE WRAPPER */}
      <div ref={ref} className="relative max-w-3xl mx-auto">
        {/* BACK LINE */}
        <div className="absolute left-4 md:left-1/2 top-0 w-0.5 h-full bg-[#cfe7df] dark:bg-white/10" />

        {/* ANIMATED LINE */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-[#34d399]"
        />

        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* DOT */}
              <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#34d399] shadow-[0_0_20px_rgba(52,211,153,0.6)]" />

              {/* CONTENT CARD */}
              <div
                className="
                ml-10 md:-ml-2 md:-mr-2 md:w-1/2
                p-6 rounded-2xl
                bg-white/70 dark:bg-[#132b24]/70
                backdrop-blur-md
                border border-[#7dd3b0]/20
                shadow-sm hover:shadow-lg
                transition
              "
              >
                <span className="text-xs text-[#34d399] font-semibold">
                  {item.year}
                </span>

                <h3 className="text-lg font-bold text-[#1b3a33] dark:text-[#e7f2ee] mt-1">
                  {item.title}
                </h3>

                <p className="text-sm text-[#5f7d73] dark:text-[#9fd8c5]">
                  {item.company}
                </p>

                <p className="mt-2 text-sm text-[#2f4f46] dark:text-[#c6f1e2]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
