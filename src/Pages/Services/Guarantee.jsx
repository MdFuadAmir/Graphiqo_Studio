import { motion } from "framer-motion";
import { FiRefreshCw, FiShield, FiHeadphones } from "react-icons/fi";

const features = [
  {
    id: 1,
    icon: <FiShield />,
    title: "Money Back Guarantee",
    desc: "If you're not satisfied, we ensure a full refund—no questions asked.",
  },
  {
    id: 2,
    icon: <FiRefreshCw />,
    title: "Unlimited Revisions",
    desc: "We refine until it perfectly matches your vision and expectations.",
  },
  {
    id: 3,
    icon: <FiHeadphones />,
    title: "24/7 Support",
    desc: "Always available to assist you anytime during and after the project.",
  },
];

const Guarantee = () => {
  return (
    <section className="py-24 px-6 bg-[#e7f2ee] dark:bg-[#0f1a17]">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1b3a33] dark:text-[#e7f2ee]">
          Your Satisfaction, Guaranteed
        </h2>
        <p className="mt-3 text-[#5f7d73] dark:text-[#9fd8c5]">
          We ensure quality, trust, and long-term partnership
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {features.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="
              group p-6 rounded-2xl text-center
              bg-white dark:bg-[#132b24]
              border border-[#7dd3b0]/20 dark:border-[#34d399]/10
              hover:shadow-[0_10px_30px_rgba(52,211,153,0.15)]
              transition-all duration-300
            "
          >
            {/* ICON */}
            <div className="
              w-14 h-14 mx-auto mb-4
              flex items-center justify-center
              rounded-full
              bg-[#34d399]/10
              text-[#34d399]
              text-2xl
            ">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-[#1b3a33] dark:text-[#e7f2ee]">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-2 text-sm text-[#5f7d73] dark:text-[#9fd8c5]">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Guarantee;