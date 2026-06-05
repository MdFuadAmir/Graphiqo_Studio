import logo1 from "../../assets/Images/brand/b1.png";
import logo2 from "../../assets/Images/brand/b2.png";
import logo3 from "../../assets/Images/brand/b3.png";
import logo4 from "../../assets/Images/brand/b4.png";
import logo5 from "../../assets/Images/brand/b5.png";
import logo6 from "../../assets/Images/brand/b6.png";
import logo7 from "../../assets/Images/brand/b7.png";
import logo8 from "../../assets/Images/brand/b8.png";
import logo9 from "../../assets/Images/brand/b9.png";
import logo10 from "../../assets/Images/brand/b10.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];

const LogoWall = () => {
  return (
    <section className="py-24 px-6 bg-[#e7f2ee] dark:bg-[#0f1a17]">
      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1b3a33] dark:text-[#e7f2ee]">
          Brands I’ve Transformed
        </h2>

        <p className="mt-4 text-[#5f7d73] dark:text-[#9fd8c5]">
          Trusted by startups and global companies
        </p>
      </div>

      {/* GRID */}
      <div
        className="
        grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
        gap-10 max-w-6xl mx-auto
      "
      >
        {logos.map((logo, i) => (
          <div
            key={i}
            className="
              flex items-center justify-center
              p-6 rounded-xl
              bg-white/40 dark:bg-[#132b24]/40
              backdrop-blur-md
              border border-[#7dd3b0]/10

              transition duration-300
              group
            "
          >
            <img
              src={logo}
              alt="client logo"
              className="
                w-24 h-auto
                object-contain

                grayscale
                opacity-70

                transition duration-300

                group-hover:grayscale-0
                group-hover:opacity-100
                group-hover:scale-110

                group-hover:drop-shadow-[0_0_15px_rgba(52,211,153,0.6)]
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoWall;
