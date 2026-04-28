import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { toast } from "react-toastify";
import { useLocation } from "react-router";

const ContactForm = () => {
  const location = useLocation();
  const { register, handleSubmit, reset, setValue } = useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location.state?.message) {
      setValue("message", location.state.message);
    } else if (location.state?.plan) {
      const p = location.state.plan;

      setValue(
        "message",
        `Hi, I am interested in the "${p.name}" package (${p.price}).

Features:
${p.features.map((f) => `• ${f}`).join("\n")}

Please contact me.`,
      );
    }
  }, [location.state, setValue]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await axios.post("https://graphiqo-studio-server-th45.vercel.app/send-email", data);
      toast.success("Message sent successfully 🚀");
      reset();
    } catch {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 px-6 bg-[#e7f2ee] dark:bg-[#0f1a17] overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-[#1b3a33] dark:text-white">
            Let’s build something amazing
          </h2>

          <p className="text-[#5f7d73] dark:text-[#9fd8c5]">
            I’m available for freelance work, collaborations, and full-time
            opportunities. Feel free to reach out anytime.
          </p>

          <div className="p-6 rounded-2xl bg-white/60 dark:bg-[#132b24]/60 backdrop-blur-md border border-[#7dd3b0]/20">
            <p className="text-sm text-[#5f7d73] dark:text-[#9fd8c5]">
              📧 Email: mdfuadamir@gmail.com
            </p>
            <p className="text-sm text-[#5f7d73] dark:text-[#9fd8c5] mt-2">
              📞 Phone: +880 1705470131
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-5"
        >
          {/* INPUT COMPONENT */}
          {[
            { name: "name", label: "Your Name" },
            { name: "email", label: "Email Address" },
          ].map((field) => (
            <div key={field.name} className="relative">
              <input
                {...register(field.name, { required: true })}
                className="
                  peer w-full px-4 pt-6 pb-2 rounded-xl
                  bg-white/70 dark:bg-[#132b24]/70
                  border border-[#7dd3b0]/20
                  text-[#1b3a33] dark:text-white
                  outline-none focus:border-[#34d399]
                  transition
                "
              />

              <label
                className="
                  absolute left-4 top-3 text-sm
                  text-[#5f7d73] dark:text-[#9fd8c5]
                  transition-all
                  peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#34d399]
                  peer-valid:top-1 peer-valid:text-xs
                "
              >
                {field.label}
              </label>
            </div>
          ))}

          {/* TEXTAREA */}
          <div className="relative">
            <textarea
              {...register("message", { required: true })}
              rows="8"
              className="
                peer w-full px-4 pt-6 pb-2 rounded-xl
                bg-white/70 dark:bg-[#132b24]/70
                border border-[#7dd3b0]/20
                text-[#1b3a33] dark:text-white
                outline-none focus:border-[#34d399]
              "
            />

            <label
              className="
                absolute left-4 top-3 text-sm
                text-[#5f7d73] dark:text-[#9fd8c5]
                transition-all
                peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#34d399]
                peer-valid:top-1 peer-valid:text-xs
              "
            >
              Your Message
            </label>
          </div>

          {/* BUTTON */}
          <button
            disabled={loading}
            className="
              w-full py-3 rounded-xl
              bg-[#34d399]
              text-[#0f1a17]
              font-semibold
              flex items-center justify-center gap-2
              hover:scale-[1.02] active:scale-95 transition
            "
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Send Message <FiSend />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
