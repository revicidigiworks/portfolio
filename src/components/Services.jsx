import { useState } from "react";

const services = [
  {
    title: "Web Development",
    highlight: "Build fast, modern & responsive websites",
    color: "from-blue-500 to-cyan-400",
    items: [
      "Custom Landing Page Development",
      "Company Profile Website (Bisnis/UMKM)",
      "Personal & Portfolio Website",
      "Responsive Website (Mobile-Friendly)",
      "UI to Code (Figma → Code)",
      "Performance Optimization (Speed & SEO Basic)",
      "Website Maintenance & Bug Fixing",
      "Deployment (Vercel / GitHub Pages)",
      "Basic Backend Integration (Form / API)",
    ],
  },
  {
    title: "Graphic Design",
    highlight: "Create visuals that stand out & communicate clearly",
    color: "from-pink-500 to-purple-500",
    items: [
      "Social Media Design (Post, Story, Feed)",
      "Poster, Banner, Promotional Design",
      "T-Shirt / Jersey Design",
      "Logo Design (Basic Branding)",
      "Business Card & Stationery",
      "Packaging Design",
      "Thumbnail (YouTube / Content)",
      "Design Mockup Presentation",
      "Re-design / Improve Existing Design",
    ],
  },
  {
    title: "IT Support",
    highlight: "Solve technical issues quickly & efficiently",
    color: "from-yellow-400 to-orange-500",
    items: [
      "Install Windows (10 / 11)",
      "Driver Installation & Update",
      "Software Installation & Setup",
      "Troubleshooting Laptop / PC",
      "Virus / Malware Cleaning",
      "Data Backup & Restore",
      "SSD Setup & Partition",
      "Basic Networking (WiFi / LAN)",
      "Remote Support (AnyDesk / TeamViewer)",
    ],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="services" className=" bg-black py-20 text-white relative overflow-hidden">
      
      {/* BASE BACKGROUND */}
      <div className="absolute inset-0 -z-20 bg-black" />

      {/* RADIAL GRADIENT (MATCH ABOUT) */}
      <div
        className="absolute inset-0 -z-10 
        bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.15),transparent_40%),
             radial-gradient(circle_at_85%_80%,rgba(236,72,153,0.15),transparent_40%)]"
      />

      {/* TOP & BOTTOM GLOW */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-pink-500/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* HEADING */}
         <div className="max-w-2xl mb-16 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Services I {" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
              Offer
            </span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Practical solutions to help your business, content, or system work better.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {services.map((service, index) => {
            const isOpen = openIndex === index;
            const mainItems = service.items.slice(0, 3);
            const extraItems = service.items.slice(3);

            return (
              <div
                key={index}
                className="group relative rounded-3xl p-[1px] 
                bg-gradient-to-br from-white/10 to-white/5 
                hover:from-white/20 hover:to-white/10 
                hover:scale-[1.02] hover:-translate-y-1 
                transition duration-300"
              >
                <div className="rounded-[22px] p-6 bg-[#080808]/95 backdrop-blur">

                  {/* HIGHLIGHT */}
                  <p className={`text-xs font-semibold mb-3 bg-gradient-to-r ${service.color} text-transparent bg-clip-text`}>
                    {service.highlight}
                  </p>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold mb-4">
                    {service.title}
                  </h3>

                  {/* MAIN ITEMS */}
                  <ul className="space-y-2 text-sm text-gray-300">
                    {mainItems.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className={`w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r ${service.color} shadow-[0_0_6px_rgba(255,255,255,0.3)]`} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* EXPAND BUTTON */}
                  {extraItems.length > 0 && (
                    <>
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="mt-4 text-sm text-gray-400 hover:text-white transition flex items-center gap-1"
                      >
                        {isOpen ? "Show less" : `+ ${extraItems.length} more`}
                      </button>

                      {isOpen && (
                        <ul className="mt-3 space-y-2 text-sm text-gray-400">
                          {extraItems.map((item, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="w-1.5 h-1.5 mt-2 rounded-full bg-white/40" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="inline-block mt-6 text-sm font-medium text-white/70 hover:text-white transition"
                  >
                    Request service →
                  </a>

                </div>
              </div>
            );
          })}

        </div>

        {/* ADDITIONAL SERVICES */}
        <div className="mt-20 text-center">

          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            Additional Services
          </p>

          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">

            {[
              "IT & Digital Consultation",
              "Setup Tools (Design / Coding)",
              "Basic SEO Setup Website",
            ].map((item, i) => (
              <div
                key={i}
                className="px-4 py-2 text-sm rounded-full border border-white/10 bg-white/[0.03] backdrop-blur hover:border-white/30 hover:bg-white/[0.06] transition"
              >
                {item}
              </div>
            ))}

          </div>

          <p className="text-gray-500 text-xs mt-5">
            Need something else? Let’s discuss.
          </p>

        </div>

      </div>
    </section>
  );
}