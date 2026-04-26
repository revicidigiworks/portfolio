import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Download,
  Code2,
  Layers3,
  Briefcase,
  Star,
  MapPin,
} from "lucide-react";

import reactIcon from "../assets/icons/react.svg";
import nextIcon from "../assets/icons/nextjs.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import jsIcon from "../assets/icons/js.svg";
import figmaIcon from "../assets/icons/figma.svg";

const stack = [
  reactIcon,
  nextIcon,
  tailwindIcon,
  jsIcon,
  figmaIcon,
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "25+", label: "Projects Built" },
  { value: "100%", label: "UI Focused" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-40 bg-black text-white overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-30 bg-black" />

      <div className="absolute top-[-15%] left-[-10%] w-[520px] h-[520px] bg-blue-500/20 blur-[140px] -z-20" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[520px] h-[520px] bg-pink-500/20 blur-[140px] -z-20" />
      <div className="absolute top-[35%] left-[45%] w-[320px] h-[320px] bg-purple-500/15 blur-[120px] -z-20" />

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] -z-10 bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:46px_46px]" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
           {/* LABEL */}
<div className="flex items-center gap-3 mb-6 sm:mb-8">
  <div className="h-[1px] w-10 bg-gradient-to-r from-blue-500 to-transparent" />

  <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.25em]">
    About Me
  </span>
</div>

            {/* TITLE */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            Frontend Developer <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
              with Design Mindset
            </span>
          </h2>

            {/* DESC */}
            <div className="mt-8 space-y-5 text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
              <p className="text-white font-medium">
                I design and develop modern digital experiences with a strong
                balance between aesthetics, usability, and performance.
              </p>

              <p>
                With a background in graphic design, I understand how visuals
                influence trust, clarity, and conversion.
              </p>

              <p>
                My focus is building websites that look expensive, feel smooth,
                and help brands stand out.
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 text-center"
                >
                  <h3 className="text-2xl md:text-3xl font-black">
                    {item.value}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#contact"
                className="px-7 h-14 rounded-2xl bg-white text-black font-semibold flex items-center gap-2 hover:scale-105 transition"
              >
                Let's Work
                <ArrowRight size={18} />
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                className="px-7 h-14 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center gap-2 hover:bg-white/10 transition"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* GLOW */}
            <div className="absolute w-[380px] h-[380px] bg-gradient-to-br from-cyan-500 via-blue-500 to-fuchsia-500 blur-[100px] opacity-30 rounded-full" />

            {/* MAIN CARD */}
            <div className="relative w-full max-w-md rounded-[32px] p-[1px] bg-gradient-to-br from-white/20 to-white/5">
              <div className="rounded-[32px] bg-[#080808]/95 backdrop-blur-2xl p-7 border border-white/5">
                {/* HEADER */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                      Profile
                    </p>
                    <h3 className="text-2xl font-bold mt-2">
                      Muhammad Rafli
                    </h3>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Star size={18} className="text-yellow-400" />
                  </div>
                </div>

                {/* INFO */}
                <div className="space-y-5 py-7">
                  {[
                    {
                      icon: <Briefcase size={16} />,
                      label: "Role",
                      value: "Frontend Developer",
                    },
                    {
                      icon: <Layers3 size={16} />,
                      label: "Focus",
                      value: "UI / UX Experience",
                    },
                    {
                      icon: <Code2 size={16} />,
                      label: "Stack",
                      value: "React Ecosystem",
                    },
                    {
      icon: <MapPin size={16} />,
      label: "Location",
      value: "Kota Balikpapan, Indonesia",
    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                        {item.icon}
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500">
                          {item.label}
                        </p>
                        <p className="text-gray-200 mt-1">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* TECH ORBIT */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-4">
                    Core Stack
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {stack.map((icon, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -4, scale: 1.05 }}
                        className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center"
                      >
                        <img
                          src={icon}
                          alt="tech"
                          className="w-5 h-5"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING BADGES */}
            <div className="absolute -left-4 top-12 px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl hidden md:block">
              <p className="text-xs text-gray-500">Design Quality</p>
              <p className="font-bold">High-End</p>
            </div>

            <div className="absolute -right-4 bottom-10 px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl hidden md:block">
              <p className="text-xs text-gray-500">Delivery</p>
              <p className="font-bold">Fast & Clean</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}