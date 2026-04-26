const projects = [
  {
    title: "Borneo Anfield Stadium Website",
    tag: "Company Project",
    description:
      "Company profile website built with Next.js and Tailwind, focused on performance, SEO, and clear service presentation for a sports facility business.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    deployment: "Hostinger",
    highlight: [
      "Optimized performance & SEO structure",
      "Clear service & booking call-to-action",
      "Responsive design across all devices",
    ],
    image: "/src/assets/images/borneo.png",
    live: "#",
    github: "#",
  },
  {
    title: "Pickleball House Booking System",
    tag: "Company Project",
    description:
      "Fullstack booking system built with React and Node.js, enabling users to check availability and manage reservations efficiently via API integration.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Axios",
    ],
    deployment: "Hostinger",
    highlight: [
      "Real-time schedule & availability system",
      "REST API integration using Axios",
      "Clean and user-friendly interface",
    ],
    image: "/src/assets/images/pickleball.png",
    live: "#",
    github: "#",
  },
  {
    title: "Berkah Muara Farm E-Commerce",
    tag: "CMS / E-Commerce",
    description:
      "Developed and customized an e-commerce website using WordPress and WooCommerce, focusing on product management, filtering system, and improving user purchasing flow.",
    tech: ["WordPress", "WooCommerce", "Elementor"],
    deployment: "Hostinger",
    highlight: [
      "Product & inventory management system",
      "Filtering and category navigation setup",
      "Customized layout and UI improvements",
    ],
    image: "/src/assets/images/berkahmuarafarm.png",
    live: "#",
    github: "#",
  },
];

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

      {/* GLOW */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-pink-500/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* HEADING */}
<div className="mb-20 text-center max-w-2xl mx-auto">
  <h2 className="text-4xl md:text-5xl font-bold mb-4">
    Selected{" "}
    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
      Projects
    </span>
  </h2>

  <p className="text-gray-400 leading-relaxed">
    Real-world projects focused on building responsive, functional, modern
    experiences with clean UI and strong performance.
  </p>
</div>

        {/* PROJECTS */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-white/20 transition duration-500"
            >
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                {/* IMAGE */}
                <div className="relative overflow-hidden min-h-[320px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* top tag */}
                  <div className="absolute top-5 left-5">
                    <span className="text-[11px] px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur text-gray-300">
                      {project.tag}
                    </span>
                  </div>

                  {/* buttons */}
                  <div className="absolute bottom-5 left-5 flex gap-3">
                    <a
                      href={project.live}
                      className="px-4 py-2 rounded-xl bg-white text-black text-sm font-medium hover:scale-105 transition"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      className="px-4 py-2 rounded-xl border border-white/20 bg-white/5 text-sm hover:bg-white/10 transition"
                    >
                      Source
                    </a>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-7 md:p-9 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold leading-snug mb-4">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* highlight */}
                    <div className="space-y-3 mb-6">
                      {project.highlight.map((item, i) => (
                        <div
                          key={i}
                          className="flex gap-3 text-sm text-gray-300"
                        >
                          <span className="w-2 h-2 rounded-full bg-white/40 mt-1.5 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* tech */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/[0.03] text-gray-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* footer */}
                  <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Deploy: {project.deployment}
                    </span>

                    <a
                      href={project.live}
                      className="text-sm text-white/70 hover:text-white transition"
                    >
                      Explore Project →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}