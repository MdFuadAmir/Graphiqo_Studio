import { useEffect, useState } from "react";

const GlobalAvailability = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-6 bg-[#e7f2ee] dark:bg-[#0f1a17] transition-colors duration-500">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* TIME */}
        <div className="text-center md:text-left">
          <p className="text-sm text-[#5f7d73] dark:text-[#9fd8c5]">
            Global Time (UTC)
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1b3a33] dark:text-[#e7f2ee] mt-1">
            {time.toUTCString().slice(17, 25)}
          </h2>

          <p className="text-xs mt-1 text-[#5f7d73] dark:text-[#9fd8c5]">
            Universal Coordinated Time
          </p>
        </div>

        {/* STATUS */}
        <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/70 dark:bg-[#132b24]/70 border border-[#7dd3b0]/20 backdrop-blur-md">
          {/* BLINK DOT */}
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative h-3 w-3 rounded-full bg-green-500"></span>
          </span>

          <p className="text-sm font-medium text-[#1b3a33] dark:text-[#e7f2ee]">
            Available Worldwide for Projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalAvailability;


