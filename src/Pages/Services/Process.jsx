import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Discovery",
    desc: "We analyze your brand, audience, and business goals.",
  },
  {
    id: "02",
    title: "Strategy",
    desc: "We plan structure, flow, and conversion-focused UX.",
  },
  {
    id: "03",
    title: "Design & Build",
    desc: "We create modern UI and scalable development system.",
  },
  {
    id: "04",
    title: "Launch",
    desc: "We deploy, optimize, and ensure smooth performance.",
  },
];

const Process = () => {
  return (
    <section className="py-24 px-6 bg-[#e7f2ee] dark:bg-[#0f1a17] transition-colors duration-500">
      {/* HEADER */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1b3a33] dark:text-[#e7f2ee]">
          How We Work
        </h2>
        <p className="mt-3 text-[#5f7d73] dark:text-[#9fd8c5]">
          A simple, structured and effective workflow
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative max-w-4xl mx-auto">
        {/* LINE */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-[#7dd3b0]/30 dark:bg-[#34d399]/20 block md:hidden" />

        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className={`flex items-start md:items-center gap-6 md:gap-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* NUMBER */}
              <div className="relative z-10">
                <div
                  className="
                  w-10 h-10 md:w-12 md:h-12
                  flex items-center justify-center
                  rounded-full
                  bg-white dark:bg-[#132b24]
                  border border-[#7dd3b0]/40 dark:border-[#34d399]/30
                  text-[#34d399] font-bold
                  shadow-sm
                "
                >
                  {step.id}
                </div>
              </div>

              {/* CARD */}
              <div
                className="
                flex-1 p-6 md:p-8 rounded-2xl
                bg-white dark:bg-[#132b24]
                border border-[#7dd3b0]/20 dark:border-[#34d399]/10
                shadow-sm
                hover:shadow-[0_10px_30px_rgba(52,211,153,0.15)]
                transition-all duration-300
              "
              >
                <h3 className="text-xl font-semibold text-[#1b3a33] dark:text-[#e7f2ee]">
                  {step.title}
                </h3>

                <p className="mt-2 text-[#5f7d73] dark:text-[#9fd8c5] text-sm md:text-base">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
