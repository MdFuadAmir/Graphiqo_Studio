import { motion } from "framer-motion";

const ContactHero = () => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d795.5054282910435!2d89.1312295013132!3d23.901983615685943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe979f5fbbf045%3A0xa5b132ac740b85c8!2sSomobai%20market%202!5e0!3m2!1sen!2sbd!4v1777324660242!5m2!1sen!2sbd";

  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-[#e7f2ee] dark:bg-[#0f1a17]">
      {/* MAP */}
      <div className="absolute inset-0 z-0">
        <iframe
          title="Google Map"
          src={mapUrl}
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
        />
      </div>
{/* 0f1a17 */}
      {/* OVERLAY (IMPORTANT: pointer-events-none) */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-b from-[#e7f2ee]/30 via-transparent to-[#e7f2ee]/60 dark:from-[#084d34]/70 dark:to-[#084d34]/70" />

      {/* TITLE */}
      <div className="absolute top-24 w-full text-center z-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-[#084d34]"
        >
          Let’s Build <span className="text-[#158c60]">Something Bold</span>
        </motion.h1>
      </div>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          absolute bottom-12 left-1/2 -translate-x-1/2 z-20
          w-[92%] md:w-105
          p-6 rounded-2xl
          bg-white/70 dark:bg-[#132b24]/70
          backdrop-blur-xl
          border border-[#7dd3b0]/20
          shadow-xl
        "
      >
        <h3 className="font-bold text-[#1b3a33] dark:text-white">
          Contact Info
        </h3>

        <p className="mt-2 text-[#5f7d73] dark:text-[#9fd8c5]">
          mdfuadamir@gmail.com
        </p>
        <p className="text-[#5f7d73] dark:text-[#9fd8c5]">+880 1705470131</p>

        <button
          onClick={() => (window.location.href = "mailto:mdfuadamir@gmail.com")}
          className="mt-4 w-full py-2.5 rounded-full bg-[#34d399] text-[#0f1a17] hover:scale-105 transition"
        >
          Send Message
        </button>
      </motion.div>
    </section>
  );
};

export default ContactHero;
