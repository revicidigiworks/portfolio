import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "Instagram", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "WhatsApp", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-24 pb-14 overflow-hidden">

      {/* BACKGROUND (SAMAIN DENGAN ABOUT) */}
      <div className="absolute inset-0 bg-black -z-20" />

      <div className="absolute inset-0 -z-10
        bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.15),transparent_40%),
            radial-gradient(circle_at_85%_80%,rgba(236,72,153,0.15),transparent_40%)]"
      />

      {/* FLOAT GLOW (CONSISTENT STYLE) */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-pink-500/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* TOP CTA (MATCH ABOUT HEADER STYLE) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          {/* LABEL STYLE SAMA ABOUT */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-10 bg-gradient-to-r from-blue-500 to-transparent" />
            <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.25em]">
              Final Section
            </span>
            <div className="h-[1px] w-10 bg-gradient-to-l from-pink-500 to-transparent" />
          </div>

          {/* TITLE STYLE SAMA ABOUT */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Have an idea?
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
              Let’s build it properly.
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            I design and develop modern interfaces that focus on clarity, performance,
            and real usability — not just visuals.
          </p>

          <a
            href="#contact"
            className="inline-flex mt-10 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 active:scale-95 transition"
          >
            Start a Project
          </a>
        </motion.div>

        {/* GRID (MATCH CARD STYLE ABOUT) */}
        <div className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-14">

          {/* BRAND */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide">Muhammad Rafli Tawil</h3>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Frontend Developer & UI Designer focused on building clean,
              modern, and usable interfaces.
            </p>
          </div>

          {/* NAV */}
          <div>
            <p className="text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-5">
              Navigation
            </p>

            <div className="flex flex-col gap-3">
              {links.map((l, i) => (
                <a
                  key={i}
                  href={l.href}
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <p className="text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-5">
              Socials
            </p>

            <div className="flex flex-col gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM BAR (MATCH CLEAN DEV STYLE) */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10 pt-6">

          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Muhammad Rafli Tawil. All rights reserved.
          </p>

          <p className="text-gray-500 text-xs tracking-widest">
            BUILT WITH REACT • TAILWIND • FRAMER MOTION
          </p>

        </div>

      </div>
    </footer>
  );
}