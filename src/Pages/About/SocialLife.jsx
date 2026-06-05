import { motion } from "framer-motion";
import img1 from "../../assets/Images/life/p1.png";
import img2 from "../../assets/Images/life/p2.png";
import img3 from "../../assets/Images/life/p3.png";
import img4 from "../../assets/Images/life/p4.png";
import img5 from "../../assets/Images/life/p5.png";

const images = [img1, img2, img3, img4, img5];

const SocialLife = () => {
  return (
    <section className="py-16 md:py-28 px-6 bg-[#e7f2ee] dark:bg-[#0f1a17]">
      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1b3a33] dark:text-[#e7f2ee]">
          Life Beyond Pixels
        </h2>
        <p className="mt-4 text-[#5f7d73] dark:text-[#9fd8c5] max-w-xl mx-auto">
          A glimpse into creativity, workspace and real life moments.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => {
          const span = i === 0 ? "md:col-span-2 md:row-span-2" : "";

          return (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.04,
                rotate: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
              className={`
                relative overflow-hidden rounded-2xl
                cursor-pointer
                ${span}
              `}
            >
              {/* IMAGE */}
              <motion.img
                src={img}
                alt="life"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* SOFT OVERLAY */}
              <div
                className="
                absolute inset-0
                bg-black/0 hover:bg-black/10
                transition-all duration-500
              "
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SocialLife;
