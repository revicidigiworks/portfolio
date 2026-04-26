import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import kaos1 from "../assets/images/kaos1.png";
import kaos2 from "../assets/images/kaos2.png";
import kaos3 from "../assets/images/kaos3.png";
import kaos4 from "../assets/images/kaos4.png";

import info1 from "../assets/images/infografis1.png";
import info2 from "../assets/images/infografis2.png";
import info3 from "../assets/images/infografis3.png";

import paket from "../assets/images/paketumroh.png";

import poster1 from "../assets/images/poster1.png";
import poster2 from "../assets/images/poster2.png";
import poster3 from "../assets/images/poster3.jpeg";

import logo from "../assets/images/design4.png";
import banner from "../assets/images/design5.png";
import yt from "../assets/images/design6.png";

import promo1 from "../assets/images/promo1.png";

const designs = [
  { title: "T-Shirt RKKW", category: "Apparel", image: kaos1 },
  { title: "T-Shirt Berkah Muara Farm, Sleman Yogyakarta", category: "Apparel", image: kaos2 },
  { title: "Footbal Jersey FC LONA, Sulawesi Selatan", category: "Apparel", image: kaos3 },
  { title: "Footbal Jersey Concept 3", category: "Apparel", image: kaos4 },

  { title: "Info Grafis - Idul Fitri", category: "Social Media", image: info1 },
  { title: "Promo Umroh", category: "Marketing", image: info2 },
  { title: "Education Umrah", category: "Social Media", image: info3 },
  { title: "Paket Umroh", category: "Social Media", image: paket },

  { title: "Poster Design 1", category: "Poster", image: poster1 },
  { title: "Poster Design 2", category: "Poster", image: poster2 },
  { title: "Poster Design 3", category: "Poster", image: poster3 },

  { title: "Logo Concept", category: "Branding", image: logo },
  { title: "Product Banner", category: "Marketing", image: banner },
  { title: "YouTube Thumbnail", category: "Content", image: yt },

  { title: "Promo Salon", category: "Marketing", image: promo1 },
];

export default function DesignWorks() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [index, setIndex] = useState(0);

  const mobileRef = useRef(null);
  const desktopRef = useRef(null);

  const categories = ["All", ...new Set(designs.map(d => d.category))];

  const filtered =
    activeFilter === "All"
      ? designs.slice(0, 9)
      : designs.filter(d => d.category === activeFilter);

  /* RESET */
  useEffect(() => {
    setIndex(0);
  }, [activeFilter]);

  /* AUTO SLIDE (desktop + mobile logic unified) */
  useEffect(() => {
    const interval = setInterval(() => {
      const next = (index + 1) % filtered.length;
      setIndex(next);

      const ref = window.innerWidth < 768 ? mobileRef : desktopRef;

      ref.current?.scrollTo({
        left: next * ref.current.offsetWidth,
        behavior: "smooth",
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [index, filtered.length]);

  const scroll = (dir) => {
    const ref = mobileRef;

    const next =
      dir === "left"
        ? Math.max(index - 1, 0)
        : Math.min(index + 1, filtered.length - 1);

    setIndex(next);

    ref.current?.scrollTo({
      left: next * ref.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="design" className="py-30 bg-black text-white relative overflow-hidden">

      {/* BG */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.2),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.15),transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* TITLE */}
        <div className="mb-20 text-center max-w-2xl mx-auto">
  <h2 className="text-4xl md:text-5xl font-bold mb-4">
    Design{" "}
    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
      Works
    </span>
  </h2>

  <p className="text-gray-400 leading-relaxed">
  A curated collection of visual designs focused on clarity, branding, and impactful communication.
</p>
</div>
        

        {/* FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <AnimatePresence mode="wait">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                layout
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-sm rounded-full border transition ${
                  activeFilter === cat
                    ? "bg-white text-black"
                    : "border-white/10 text-gray-400 hover:text-white"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="relative md:hidden">

          {/* LEFT */}
{/* LEFT */}
<button
  onClick={() => scroll("left")}
  className="absolute left-2 top-1/2 -translate-y-1/2 z-20
  w-12 h-12 flex items-center justify-center
  rounded-full
  bg-black/20 backdrop-blur-xl
  border border-white/10
  shadow-lg
  active:scale-95 transition"
>
  <svg
    className="w-5 h-5 text-white/80"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M14 6l-6 6 6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>

{/* RIGHT */}
<button
  onClick={() => scroll("right")}
  className="absolute right-2 top-1/2 -translate-y-1/2 z-20
  w-12 h-12 flex items-center justify-center
  rounded-full
  bg-black/20 backdrop-blur-xl
  border border-white/10
  shadow-lg
  active:scale-95 transition"
>
  <svg
    className="w-5 h-5 text-white/80"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M10 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>

          <div
            ref={mobileRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
          >
            {filtered.map((item, i) => (
              <div key={i} className="min-w-full snap-center px-2">
                <div
                  onClick={() => setSelected(item)}
                  className="rounded-2xl overflow-hidden bg-[#0a0a0a]"
                >
                  <img src={item.image} className="w-full object-cover" />
                  <div className="p-4">
                    <p className="text-xs text-gray-400">{item.category}</p>
                    <h3 className="text-sm">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP (3 CARD CAROUSEL) ================= */}
        <div className="hidden md:block overflow-hidden">

          <div
            ref={desktopRef}
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${index * 33.333}%)`,
            }}
          >
            {filtered.map((item, i) => (
              <div
                key={i}
                className="w-1/3 flex-shrink-0 px-3"
                onClick={() => setSelected(item)}
              >
                <div className="rounded-2xl overflow-hidden bg-[#0a0a0a] group">
                  <img
                    src={item.image}
                    className="w-full object-cover transition group-hover:scale-110"
                  />
                  <div className="p-4">
                    <p className="text-xs text-gray-400">{item.category}</p>
                    <h3 className="text-sm">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-6 z-50"
            onClick={() => setSelected(null)}
          >
            <motion.div className="max-w-3xl w-full bg-[#0a0a0a] rounded-2xl overflow-hidden">
              <img src={selected.image} className="w-full" />
              <div className="p-6">
                <h3 className="text-xl">{selected.title}</h3>
                <p className="text-gray-400">{selected.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}