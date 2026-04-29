import { motion } from "framer-motion";

import borneo from "../assets/images/borneo.png";
import pickleball from "../assets/images/pickleball.png";
import berkah from "../assets/images/berkahmuarafarm.png";

const projects = [
  {
    title: "Borneo Anfield Stadium Website",
    role: "Frontend Developer",
    tag: "Company Project",
    description:
      "Revamped the entire frontend of a sports facility website to improve branding, usability, and performance.",
    tech: ["React", "Vite", "Typescript", "Tailwind CSS", "Framer Motion"],
    deployment: "Live in Production",
    highlight: [
      "Rebuilt frontend from scratch using React, Vite, and Tailwind CSS",
      "Integrated real-time schedule API from existing backend",
      "Improved mobile responsiveness and overall user experience",
      "Redesigned UI to create a stronger brand presence",
    ],
    image: borneo,
    live: "https://revicidigiworks.github.io/borneoanfieldstadium/",
    github: "https://github.com/revicidigiworks/borneoanfieldstadium",
  },
  {
    title: "Pickleball House Booking System",
    role: "Fullstack Developer",
    tag: "Company Project",
    description:
      "Built a real-time schedule system for checking court availability and booking via WhatsApp.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Axios",
    ],
    deployment: "Live in Production",
    highlight: [
      "Integrated secure third-party API (AYO Indonesia)",
      "Built frontend + backend architecture",
      "Handled secure API synchronization",
      "Mobile-first real-time booking flow",
    ],
    image: pickleball,
    live: "https://www.pickleballhouse.id",
    github: "#",
  },
  {
    title: "Berkah Muara Farm E-Commerce",
    role: "Web Developer",
    tag: "CMS / E-Commerce",
    description:
      "Revamped an existing e-commerce website to improve structure, layout, and usability.",
    tech: ["WordPress", "WooCommerce", "Elementor"],
    deployment: "Hostinger",
    highlight: [
      "Fixed overlapping and broken layout issues",
      "Reorganized page structure",
      "Improved navigation clarity",
    ],
    image: berkah,
    live: "https://www.berkahmuarafarm.com",
    github: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-black text-white relative overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-20 bg-black" />

      <div
        className="absolute inset-0 -z-10 
        bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.12),transparent_40%),
             radial-gradient(circle_at_85%_80%,rgba(236,72,153,0.12),transparent_40%)]"
      />

      {/* FLOATING GLOW */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500/10 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-pink-500/10 blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* HEADING */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-20 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Selected{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Real projects focused on solving real problems through clean,
            responsive, and functional web development.
          </p>
        </motion.div>

        {/* PROJECT LIST */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-white/20 transition duration-500"
            >
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                {/* IMAGE */}
                <div className="relative overflow-hidden min-h-[320px]">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7 }}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* TAG */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="absolute top-5 left-5"
                  >
                    <span className="text-[11px] px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur text-gray-300">
                      {project.tag}
                    </span>
                  </motion.div>

                  {/* BUTTONS */}
                  <div className="absolute bottom-5 left-5 flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      href={project.live}
                      className="px-4 py-2 rounded-xl bg-white text-black text-sm font-medium"
                    >
                      Live Demo
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      href={project.github}
                      className="px-4 py-2 rounded-xl border border-white/20 bg-white/5 text-sm hover:bg-white/10 transition"
                    >
                      Source
                    </motion.a>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-7 md:p-9 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold leading-snug mb-4">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-500 mb-3">
                      {project.role}
                    </p>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* HIGHLIGHT */}
                    <div className="space-y-3 mb-6">
                      {project.highlight.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.07 }}
                          viewport={{ once: true }}
                          className="flex gap-3 text-sm text-gray-300"
                        >
                          <span className="w-2 h-2 rounded-full bg-white/40 mt-1.5 shrink-0" />
                          {item}
                        </motion.div>
                      ))}
                    </div>

                    {/* TECH STACK */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((item, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ y: -3, scale: 1.04 }}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.04 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/[0.03] text-gray-300"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Deploy: {project.deployment}
                    </span>

                    <motion.a
                      whileHover={{ x: 6 }}
                      href={project.live}
                      className="text-sm text-white/70 hover:text-white transition"
                    >
                      Explore Project →
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}