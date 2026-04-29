import { motion } from "framer-motion";

import reactIcon from "../assets/icons/react.svg";
import nextIcon from "../assets/icons/nextjs.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import jsIcon from "../assets/icons/js.svg";
import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/css.svg";

import nodeIcon from "../assets/icons/nodejs.svg";
import expressIcon from "../assets/icons/express.svg";
import laravelIcon from "../assets/icons/laravel.svg";
import phpIcon from "../assets/icons/php.svg";
import mongoIcon from "../assets/icons/mongodb.svg";
import mysqlIcon from "../assets/icons/mysql.svg";

import figmaIcon from "../assets/icons/figma.svg";
import psIcon from "../assets/icons/photoshop.svg";
import aiIcon from "../assets/icons/illustrator.svg";
import canvaIcon from "../assets/icons/canva.svg";
import capcutIcon from "../assets/icons/capcut.svg";
import affinityIcon from "../assets/icons/affinity.svg";

import gitIcon from "../assets/icons/git.svg";
import githubIcon from "../assets/icons/github.svg";
import vscodeIcon from "../assets/icons/vscode.svg";
import vercelIcon from "../assets/icons/vercel.svg";
import postmanIcon from "../assets/icons/postman.svg";

const skillGroups = [
  {
    title: "Core Stack",
    color: "from-blue-500 to-cyan-400",
    glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]",
    items: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "React", icon: reactIcon },
      { name: "Next.js", icon: nextIcon },
      { name: "Tailwind", icon: tailwindIcon },
    ],
  },
  {
    title: "Backend & Data",
    color: "from-green-500 to-emerald-400",
    glow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.35)]",
    items: [
      { name: "Node.js", icon: nodeIcon },
      { name: "Express", icon: expressIcon },
      { name: "Laravel", icon: laravelIcon },
      { name: "PHP", icon: phpIcon },
      { name: "MongoDB", icon: mongoIcon },
      { name: "MySQL", icon: mysqlIcon },
    ],
  },
  {
    title: "Design & Creative",
    color: "from-pink-500 to-purple-500",
    glow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]",
    items: [
      { name: "Figma", icon: figmaIcon },
      { name: "Photoshop", icon: psIcon },
      { name: "Illustrator", icon: aiIcon },
      { name: "Affinity", icon: affinityIcon },
      { name: "Canva", icon: canvaIcon },
      { name: "CapCut", icon: capcutIcon },
    ],
  },
  {
    title: "Tools & Workflow",
    color: "from-yellow-400 to-orange-500",
    glow: "hover:shadow-[0_0_30px_rgba(251,191,36,0.35)]",
    items: [
      { name: "Git", icon: gitIcon },
      { name: "GitHub", icon: githubIcon },
      { name: "VS Code", icon: vscodeIcon },
      { name: "Vercel", icon: vercelIcon },
      { name: "Postman", icon: postmanIcon },
    ],
  },
];

/* ANIMATION */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-20 bg-black" />

      <div
        className="absolute inset-0 -z-10
        bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.12),transparent_40%),
             radial-gradient(circle_at_85%_80%,rgba(236,72,153,0.12),transparent_40%)]"
      />

      {/* FLOATING BLUR */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-pink-500/10 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-blue-500/10 blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* LABEL */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex items-center justify-center md:justify-start gap-3 mb-6 sm:mb-8"
        >
          <div className="h-[1px] w-10 bg-gradient-to-r from-blue-500 to-transparent" />
          <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.25em]">
            My Skills
          </span>
        </motion.div>

        {/* HEADING */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-2xl mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Tech Stack &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
              Tools
            </span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Frontend-focused developer with design mindset, plus backend
            integration and modern workflow tools.
          </p>
        </motion.div>

        {/* GROUPS */}
        <div className="space-y-14">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* TITLE */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`h-[1px] w-10 bg-gradient-to-r ${group.color}`}
                />
                <h3 className="text-[11px] uppercase tracking-[0.22em] text-gray-300 font-semibold">
                  {group.title}
                </h3>
              </div>

              {/* GRID */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4"
              >
                {group.items.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={card}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                    }}
                    whileTap={{ scale: 0.96 }}
                    className="group rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition duration-300"
                  >
                    <div
                      className={`h-full flex flex-col items-center justify-center gap-3 p-4 rounded-[16px] bg-[#080808]/95 border border-white/10 backdrop-blur ${group.glow} hover:border-white/20 transition duration-300`}
                    >
                      <motion.img
                        src={item.icon}
                        alt={item.name}
                        className="w-9 h-9 opacity-75"
                        whileHover={{ rotate: 8, scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />

                      <span className="text-[11px] sm:text-xs text-gray-400 group-hover:text-white text-center leading-tight transition">
                        {item.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}