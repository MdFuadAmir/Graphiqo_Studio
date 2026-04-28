import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router";

const PricingTable = () => {
  const [currency, setCurrency] = useState("USD");
  const navigate = useNavigate();

  const pricing = {
    USD: [
      {
        name: "Starter Flow",
        subtitle: "Perfect for small launches",
        price: "$19",
        features: [
          "1 Landing Page",
          "Basic UI Design",
          "Email Support",
          "1 Revision Cycle",
        ],
      },
      {
        name: "Growth Engine",
        subtitle: "Best for scaling brands",
        price: "$49",
        popular: true,
        features: [
          "Up to 5 Pages",
          "Advanced UI/UX",
          "Priority Support",
          "SEO Optimization",
          "Conversion Strategy",
        ],
      },
      {
        name: "Elite System",
        subtitle: "For enterprise solutions",
        price: "$99",
        features: [
          "Unlimited Pages",
          "Full Product Design",
          "24/7 Support",
          "Dedicated Designer",
          "Advanced Analytics",
          "Performance Optimization",
        ],
      },
    ],

    BDT: [
      {
        name: "Starter Flow",
        subtitle: "Perfect for small launches",
        price: "৳1999",
        features: [
          "1 Landing Page",
          "Basic UI Design",
          "Email Support",
          "1 Revision Cycle",
        ],
      },
      {
        name: "Growth Engine",
        subtitle: "Best for scaling brands",
        price: "৳4999",
        popular: true,
        features: [
          "Up to 5 Pages",
          "Advanced UI/UX",
          "Priority Support",
          "SEO Optimization",
          "Conversion Strategy",
        ],
      },
      {
        name: "Elite System",
        subtitle: "For enterprise solutions",
        price: "৳9999",
        features: [
          "Unlimited Pages",
          "Full Product Design",
          "24/7 Support",
          "Dedicated Designer",
          "Advanced Analytics",
          "Performance Optimization",
        ],
      },
    ],
  };

  return (
    <section id="pricing" className="py-24 px-6 bg-[#eef7f3] dark:bg-[#0f1a17]">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1b3a33] dark:text-white">
          Flexible Pricing
        </h2>

        {/* TOGGLE */}
        <div className="mt-6 inline-flex bg-white/60 dark:bg-[#132b24]/60 backdrop-blur-md px-2 py-1 rounded-full border border-[#7dd3b0]/20">
          {["USD", "BDT"].map((cur) => (
            <button
              key={cur}
              onClick={() => setCurrency(cur)}
              className={`px-4 py-1 rounded-full text-sm transition ${
                currency === cur
                  ? "bg-[#34d399] text-[#0f1a17]"
                  : "text-[#3d5c52] dark:text-[#c6f1e2]"
              }`}
            >
              {cur}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricing[currency].map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            className={`
              relative p-8 rounded-2xl
              backdrop-blur-xl
              border border-[#7dd3b0]/20

              /* LIGHT MODE */
              bg-linear-to-b from-white/70 to-[#e7f2ee]/40

              /* DARK MODE */
              dark:bg-linear-to-b dark:from-[#132b24]/70 dark:to-[#0f1a17]/80

              shadow-xl
              ${plan.popular ? "md:scale-110 border-[#34d399]/40" : ""}
            `}
          >
            {/* BADGE */}
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#34d399] text-[#0f1a17] text-xs px-3 py-1 rounded-full font-medium">
                Most Popular
              </div>
            )}

            {/* TITLE */}
            <h3 className="text-xl font-semibold text-[#1b3a33] dark:text-white text-center">
              {plan.name}
            </h3>

            {/* SUBTITLE */}
            <p className="text-sm text-center mt-1 text-[#5f7d73] dark:text-[#9ca3af]">
              {plan.subtitle}
            </p>

            {/* PRICE */}
            <p className="text-3xl font-bold text-center mt-5 text-[#34d399]">
              {plan.price}
            </p>

            {/* FEATURES */}
            <div className="mt-6 space-y-3">
              {plan.features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-[#2f4f46] dark:text-[#c6f1e2]"
                >
                  <FaCheck className="text-[#34d399]" />
                  {f}
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <button
              onClick={() =>
                navigate("/contact", {
                  state: {
                    plan: plan,
                  },
                })
              }
              className="mt-8 w-full py-2 rounded-full bg-[#34d399] text-[#0f1a17] font-medium hover:scale-105 transition"
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingTable;
