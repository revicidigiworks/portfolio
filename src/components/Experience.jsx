import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Internship – IT Hardware Technician",
    company: "Flashnet Computer Makassar",
    period: "2021",
    type: "IT",
    color: "from-yellow-400 to-orange-500",
    desc: [
      "Installed laptops and desktop computer systems",
      "Repaired hardware such as keyboards, storage, and basic components",
      "Assisted customer troubleshooting and diagnostics",
    ],
  },
  {
    id: 2,
    title: "Programming Division – Web Developer",
    company: "Kedai Computerworks",
    period: "2021",
    type: "Web",
    color: "from-blue-500 to-cyan-400",
    desc: [
      "Developed Pet Shop web application using SvelteKit",
      "Implemented CRUD features and simple UI system",
      "Collaborated within organization programming division",
    ],
  },
  {
    id: 3,
    title: "Private Tutor – Programming Tutor",
    company: "SMAT Bimbel Balikpapan",
    period: "2022",
    type: "IT",
    color: "from-yellow-400 to-orange-500",
    desc: [
      "Taught programming fundamentals to students",
      "Explained HTML, CSS, and coding logic concepts",
      "Guided hands-on coding practice sessions",
    ],
  },
  {
    id: 4,
    title: "Graphic Design & IT Support",
    company: "Yayasan Masjid Berkah Box Indonesia",
    period: "2022 - 2024",
    type: "Design",
    color: "from-pink-500 to-purple-500",
    desc: [
      "Designed posters, social media content, and visual materials",
      "Handled computer devices and software support",
      "Supported digital operations and organization activities",
    ],
  },
  {
    id: 5,
    title: "Freelance Work – Design & IT Support",
    company: "Self Employed",
    period: "2022 - Present",
    type: "Design",
    color: "from-pink-500 to-purple-500",
    desc: [
      "Designed logo for RKKW Tamiya racing community",
      "Created t-shirt designs and visual branding assets",
      "PC setup project for Kelurahan Telagasari",
      "Hardware repair including HDD and printer services",
    ],
  },
  {
    id: 6,
    title: "Graphic Designer",
    company: "PT Sebelas Bintang Jaya",
    period: "2025",
    type: "Design",
    color: "from-pink-500 to-purple-500",
    desc: [
      "Managed design needs for Salon Muslimah",
      "Handled branding for PT Cahaya Indonesia Wisata (Umrah Travel)",
      "Created social media promotions and marketing visuals",
      "Designed posters, banners, and digital campaigns",
      "Adjusted design style for beauty and religious travel markets",
    ],
  },
  {
    id: 7,
    title: "IT Team / Web Developer",
    company: "PT Sebelas Bintang Jaya",
    period: "2025 - 2026",
    type: "Web",
    color: "from-blue-500 to-cyan-400",
    desc: [
      "Developed Pickleball House Balikpapan website (React, Vite, Tailwind, Node.js, Express)",
      "Built Coda website using Laravel",
      "Developed Borneo Anfield Stadium website (Next.js, Tailwind)",
      "Collaborated on internal and public web systems",
    ],
  },
  {
    id: 8,
    title: "Company Profile Design Projects",
    company: "Multiple Corporate Clients",
    period: "2025 - 2026",
    type: "Design",
    color: "from-pink-500 to-purple-500",
    desc: [
      "Designed company profile for PT Anugerah Jaya Mulia Utama",
      "Designed company profile for PT Anugerah Jaya Beton",
      "Focused on professional layout and company branding",
    ],
  },
  {
    id: 9,
    title: "Website Revamp Specialist",
    company: "Berkah Muara Farm - Sleman, Yogyakarta",
    period: "2026",
    type: "Web",
    color: "from-blue-500 to-cyan-400",
    desc: [
      "Redesigned and improved website appearance",
      "Optimized UI structure to be modern and responsive",
      "Worked with Elementor page builder",
    ],
  },
  {
    id: 10,
    title: "Freelance Design Projects",
    company: "Multi Client",
    period: "2024 - 2026",
    type: "Design",
    color: "from-pink-500 to-purple-500",
    desc: [
      "Created banners for Kedai Nisa, An Nasr Cell, Pandawa Mobil, Kuliner Ayu Nabila",
      "Designed Instagram feeds, price lists, and promo assets",
      "Created t-shirt, sticker, and UMKM branding designs",
    ],
  },
  {
    id: 11,
    title: "Personal Project – Portfolio Website",
    company: "Self Project",
    period: "2026",
    type: "Web",
    color: "from-blue-500 to-cyan-400",
    desc: [
      "Built personal portfolio using React, Vite, and Tailwind CSS",
      "Created modern, responsive, reusable UI component system",
      "Showcased works and experience through interactive website",
    ],
  },
];

export default function Experience() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? experiences
      : experiences.filter((item) => item.type === filter);

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-black py-28 text-white"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-20 bg-black" />
      <div
        className="absolute inset-0 -z-10
        bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.12),transparent_35%),
             radial-gradient(circle_at_85%_80%,rgba(236,72,153,0.12),transparent_35%)]"
      />

      <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[260px] bg-blue-500/10 blur-3xl" />
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[260px] bg-pink-500/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* HEADING */}
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
            Career
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
              Journey
            </span>
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Real-world experience across web development, design, and IT support
            through freelance and company projects.
          </p>
        </div>

        {/* FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {["All", "Web", "Design", "IT"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-5 h-11 rounded-full text-sm border transition-all duration-300 ${
                filter === item
                  ? "bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.12)] scale-105"
                  : "bg-white/[0.03] border-white/10 text-white/70 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* GRID */}
        <AnimatePresence mode="popLayout">
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((exp) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition duration-500"
              >
                <div className="rounded-[22px] bg-[#080808]/95 backdrop-blur-xl p-7 h-full border border-white/5 group-hover:border-white/10 transition">
                  {/* TOP */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <p
                        className={`text-xs font-semibold mb-2 uppercase tracking-[0.2em] bg-gradient-to-r ${exp.color} text-transparent bg-clip-text`}
                      >
                        {exp.type}
                      </p>

                      <h3 className="text-xl font-semibold leading-snug">
                        {exp.title}
                      </h3>

                      <p className="text-sm text-gray-400 mt-2">
                        {exp.company}
                      </p>
                    </div>

                    <span className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-gray-400 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* DESC */}
                  <ul className="space-y-3">
                    {exp.desc.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-gray-300 leading-relaxed"
                      >
                        <span
                          className={`w-2 h-2 rounded-full mt-1.5 shrink-0 bg-gradient-to-r ${exp.color}`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* LINE */}
                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      Professional Experience
                    </span>

                    <span className="text-xs text-white/60 group-hover:text-white transition">
                      View Details →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}