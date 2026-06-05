import { useEffect, useRef } from "react";
import img1 from "../../assets/Images/brand/b1.png";
import img2 from "../../assets/Images/brand/b3.png";
import img3 from "../../assets/Images/brand/b2.png";
import img4 from "../../assets/Images/brand/b4.png";
import img5 from "../../assets/Images/brand/b5.png";
import img6 from "../../assets/Images/brand/b6.png";
import img7 from "../../assets/Images/brand/b7.png";
import img8 from "../../assets/Images/brand/b8.png";
import img9 from "../../assets/Images/brand/b9.png";
import img10 from "../../assets/Images/brand/b10.png";

const logos = [img1, img2, img3, img4, img5, img6, img7, img8,img9,img10];

const TrustedBy = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    let animationFrame;
    let x = 0;

    const speed = 1; // 🔥 control speed here

    const animate = () => {
      if (!marqueeRef.current) return;

      x -= speed;

      // 🔥 reset WITHOUT jump
      if (Math.abs(x) >= marqueeRef.current.scrollWidth / 2) {
        x = 0;
      }

      marqueeRef.current.style.transform = `translateX(${x}px)`;

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="py-16 overflow-hidden bg-[#e7f2ee] dark:bg-[#0f1a17]">

      {/* TITLE */}
      <p className="text-center text-sm tracking-widest mb-10 text-[#3d5c52] dark:text-[#a7d9c6]">
        Trusted By Brands
      </p>

      {/* MARQUEE */}
      <div className="overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex gap-16 w-max items-center"
        >
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="logo"
              className="
                w-10 md:w-16
                object-contain
                grayscale opacity-60
                transition-all duration-300
                hover:grayscale-0 hover:opacity-100 hover:scale-110
              "
            />
          ))}
        </div>
      </div>

      {/* glow line */}
      <div className="mt-10 h-px w-2/3 mx-auto bg-linear-to-r from-transparent via-[#34d399]/40 to-transparent" />

    </section>
  );
};

export default TrustedBy;