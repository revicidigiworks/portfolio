import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Helper Ikon SVG Inline (Ringan & Anti-Error)
const Icons = {
  Chat: ({ className = "w-5 h-5" }) => (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    </svg>
  ),
  Arrow: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  ),
  Mail: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
  Github: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>,
  Linkedin: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
};

const contacts = [
  { label: "Email", value: "muhammadrafli.tawil@gmail.com", href: "mailto:muhammadrafli.tawil@gmail.com", icon: <Icons.Mail /> },
  { label: "GitHub", value: "https://github.com/revicidigiworks", href: "https://github.com", icon: <Icons.Github /> },
  { label: "LinkedIn", value: "linkedin.com/in/yourprofile", href: "www.linkedin.com/in/muhammad-rafli-tawil-532288367", icon: <Icons.Linkedin /> },
];

const socials = [
  { name: "WhatsApp", href: "https://wa.me/628139438856", color: "from-green-400 to-green-600", img: "https://cdn-icons-png.flaticon.com/512/733/733585.png" },
  { name: "Instagram", href: "https://www.instagram.com/rftawil", color: "from-pink-400 to-purple-500", img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png" },
  { name: "TikTok", href: "https://www.tiktok.com/@mrapwill", color: "from-white/20 to-white/10", img: "https://cdn-icons-png.flaticon.com/512/3046/3046126.png" },
  { name: "Facebook", href: "https://www.facebook.com/share/18onVPwVCd/", color: "from-blue-400 to-blue-600", img: "https://cdn-icons-png.flaticon.com/512/733/733547.png" },
];

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <section id="contact" className="relative pt-35 pb-24 md:pt-24 md:pb-28 text-white bg-black overflow-hidden">
      
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 bg-black -z-20" />
      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.15),transparent_45%)] -z-10" />

      <div className="max-w-6xl mx-auto px-5 relative z-10">

        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 md:w-10 bg-linear-to-r from-blue-500 to-transparent" />
            <span className="text-blue-400 text-[9px] md:text-[10px] tracking-[0.35em] uppercase font-bold">
              Contact
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold leading-[1.2] tracking-tight">
            Let’s Build Something{" "}
            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
              Meaningful
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-xl leading-relaxed text-base md:text-lg">
            Open for freelance, collaboration, and full-time opportunities.
            If you have a project, I’m ready to build it.
          </p>
        </motion.div>

        {/* CONTACT GRID - Responsive columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {contacts.map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/15 to-transparent hover:from-blue-500/50 hover:to-pink-500/50 transition-all duration-500"
            >
              <div className="bg-[#0a0a0a] rounded-2xl p-6 md:p-8 h-full transition duration-500 group-hover:bg-[#0f0f0f] flex flex-col justify-between backdrop-blur-sm">
                <div>
                  <div className="mb-4 md:mb-5 transform group-hover:scale-110 transition-transform duration-300 origin-left uppercase">
                    {c.icon}
                  </div>
                  <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                    {c.label}
                  </p>
                  <p className="text-white mt-1 md:mt-2 text-sm md:text-base break-words font-medium">
                    {c.value}
                  </p>
                </div>

                <div className="mt-6 md:mt-8 flex items-center gap-2 text-gray-500 group-hover:text-white transition-all font-bold text-[10px] md:text-xs tracking-widest">
                  <span>OPEN</span>
                  <div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <Icons.Arrow />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>

{/* ================= PREMIUM FLOATING CTA ================= */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex flex-col items-end gap-3">

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 15, filter: "blur(10px)" }}
              className="flex flex-col gap-3 mb-2"
            >
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  whileHover={{ scale: 1.05, x: -5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center justify-center shadow-2xl transition-colors group/item"
                >
                  <img 
                    src={s.img} 
                    className="w-5 h-5 md:w-6 md:h-6 object-contain opacity-50 group-hover/item:opacity-100 transition-opacity grayscale group-hover/item:grayscale-0" 
                    alt={s.name} 
                  />
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* MAIN PREMIUM BUTTON */}
        <motion.button
          onClick={() => setOpen(!open)}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={`
            relative overflow-hidden px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-bold flex items-center gap-3 transition-all duration-500 shadow-2xl border
            ${open 
              ? "bg-white text-black border-white shadow-white/10" 
              : "bg-[#0a0a0a]/80 text-white border-white/10 backdrop-blur-2xl hover:border-white/40 shadow-black/50"
            }
          `}
        >
          {/* Subtle Shine Effect */}
          {!open && (
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 2 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
            />
          )}

          <div className="relative w-5 h-5 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {open ? (
                <motion.svg 
                  key="close"
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 45 }}
                  width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </motion.svg>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <Icons.Chat />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <span className="text-xs md:text-sm tracking-[0.2em] uppercase relative z-10">
            {open ? "Close" : "Connect"}
          </span>
        </motion.button>

      </div>

    </section>
  );
}