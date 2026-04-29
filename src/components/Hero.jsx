import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Code2,
  PenTool,
  Headphones,
} from "lucide-react";

import profile from "../assets/images/profile.png";

export default function Hero() {
  const cardRef = useRef(null);
  const lightRef = useRef(null);
  const sectionRef = useRef(null);

  /* GLOBAL PARALLAX BACKGROUND */
  useEffect(() => {
    const move = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      if (sectionRef.current) {
        sectionRef.current.style.setProperty("--x", `${x * 100}%`);
        sectionRef.current.style.setProperty("--y", `${y * 100}%`);
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* 3D CARD */
  const handleMove = (e) => {
    const card = cardRef.current;
    const light = lightRef.current;

    if (!card || !light) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 18;
    const rotateX = ((y / rect.height) - 0.5) * -18;

    card.style.transform = `
      perspective(1400px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.03,1.03,1.03)
    `;

    light.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(255,255,255,0.55),
        rgba(255,255,255,0.10) 20%,
        transparent 55%
      )
    `;
  };

  const reset = () => {
    if (!cardRef.current || !lightRef.current) return;

    cardRef.current.style.transform =
      "perspective(1400px) rotateX(0deg) rotateY(0deg) scale(1)";
    lightRef.current.style.background = "none";
  };

  const services = [
    {
      icon: <Code2 size={18} />,
      title: "Web Developer",
      desc: "Fast, responsive, and modern websites.",
      color: "blue",
    },
    {
      icon: <PenTool size={18} />,
      title: "Graphic Design",
      desc: "Clean visuals that actually communicate.",
      color: "pink",
    },
    {
      icon: <Headphones size={18} />,
      title: "IT Support",
      desc: "Reliable solutions for real problems.",
      color: "purple",
    },
  ];

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black text-white pt-25 flex items-center [--x:50%] [--y:50%]"
    >
      {/* BASE */}
      <div className="absolute inset-0 -z-30 bg-black" />

      {/* INTERACTIVE LIGHT */}
      <div
        className="absolute inset-0 -z-20 transition-all duration-300"
        style={{
          background: `
            radial-gradient(700px at var(--x) var(--y), rgba(255,255,255,0.06), transparent 60%)
          `,
        }}
      />

      {/* COLOR BLOBS */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/20 blur-[130px] -z-20 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-pink-500/20 blur-[130px] -z-20 animate-pulse" />
      <div className="absolute top-[35%] left-[45%] w-[350px] h-[350px] bg-purple-500/15 blur-[120px] -z-20" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] -z-10 bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[size:45px_45px]" />

      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* LABEL */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 sm:mb-8">
              <div className="h-[1px] w-10 bg-gradient-to-r from-blue-500 to-transparent" />

              <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.25em]">
                Halo, Saya
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] uppercase">
              Muhammad
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent uppercase">
                Rafli Tawil
              </span>
            </h1>

            {/* SUBTEXT */}
            <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              I build fast, responsive websites that help businesses and personal brands look more professional and stand out online.
            </p>

            {/* SERVICES */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-10">
              {services.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 text-left group"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4
                    ${item.color === "blue"
                        ? "bg-blue-500/10 text-blue-400"
                        : item.color === "pink"
                          ? "bg-pink-500/10 text-pink-400"
                          : "bg-purple-500/10 text-purple-400"
                      }`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
              <a
                href="#projects"
                className="px-7 h-14 rounded-2xl bg-white text-black font-semibold flex items-center gap-2 hover:scale-105 transition"
              >
                See My Projects
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="px-7 h-14 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl flex items-center hover:bg-white/10 transition"
              >
                Start a Project
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div
              ref={cardRef}
              onMouseMove={handleMove}
              onMouseLeave={reset}
              className="relative transition-transform duration-200 ease-out will-change-transform group"
            >
              {/* LIGHT */}
              <div
                ref={lightRef}
                className="absolute inset-0 rounded-[30px] z-20 pointer-events-none mix-blend-screen"
              />

              {/* FLOATING RING */}
              <div className="absolute -inset-6 rounded-[40px] border border-white/10 animate-spin [animation-duration:14s]" />

              {/* FRAME */}
              <div className="relative p-[2px] rounded-[30px] bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 shadow-[0_20px_80px_rgba(59,130,246,0.35)]">
                <div className="rounded-[28px] bg-neutral-950 overflow-hidden relative">
                  <img
                    src={profile}
                    alt="profile"
                    className="w-[310px] sm:w-[360px] md:w-[430px] object-cover group-hover:scale-[1.03] transition duration-500"
                  />
                </div>
              </div>

              {/* BADGE */}
              <div className="absolute bottom-4 right-4 px-4 py-3 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-xl flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400"></span>
                </span>

                <span className="text-sm text-gray-200">
                  Ready for collaboration
                </span>
              </div>

              {/* FLOATING MINI CARD */}
              <div className="absolute -left-6 top-10 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <p className="text-xs text-gray-400">Experience</p>
                <p className="font-bold">3+ Years</p>
              </div>

              {/* GLOW */}
              <div className="absolute inset-0 -z-10 blur-[90px] opacity-50 bg-gradient-to-br from-cyan-500 via-blue-500 to-fuchsia-500 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}