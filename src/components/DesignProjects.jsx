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
  { title: "T-Shirt Berkah Muara Farm", category: "Apparel", image: kaos2 },
  { title: "Football Jersey FC LONA", category: "Apparel", image: kaos3 },
  { title: "Football Jersey Concept", category: "Apparel", image: kaos4 },

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

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function DesignWorks() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [index, setIndex] = useState(0);

  const mobileRef = useRef(null);
  const desktopRef = useRef(null);

  const categories = ["All", ...new Set(designs.map((d) => d.category))];

  const filtered =
    activeFilter === "All"
      ? designs.slice(0, 9)
      : designs.filter((d) => d.category === activeFilter);

  useEffect(() => {
    setIndex(0);
  }, [activeFilter]);

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      const next = (index + 1) % filtered.length;
      setIndex(next);
    }, 4000);

    return () => clearInterval(timer);
  }, [index, filtered.length]);

  const scroll = (dir) => {
    const next =
      dir === "left"
        ? Math.max(index - 1, 0)
        : Math.min(index + 1, filtered.length - 1);

    setIndex(next);

    mobileRef.current?.scrollTo({
      left: next * mobileRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="design"
      className="py-28 bg-black text-white relative overflow-hidden"
    >
      {/* BG */}
      <div className="absolute inset-0 bg-black" />

      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.2),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.15),transparent_50%)]" />

      {/* FLOATING GLOW */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-blue-500/10 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-pink-500/10 blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* TITLE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-20 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Design{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
              Works
            </span>
          </h2>

          <p className="text-gray-400 leading-relaxed">
            A curated collection of visual designs focused on clarity,
            branding, and impactful communication.
          </p>
        </motion.div>

        {/* FILTER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              layout
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
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
        </motion.div>

        {/* MOBILE */}
        <div className="relative md:hidden">
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 backdrop-blur border border-white/10"
          >
            ←
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 backdrop-blur border border-white/10"
          >
            →
          </button>

          <div
            ref={mobileRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="min-w-full snap-center px-2"
              >
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:block overflow-hidden">
          <motion.div
            ref={desktopRef}
            animate={{ x: `-${index * 33.333}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="w-1/3 flex-shrink-0 px-3 cursor-pointer"
                onClick={() => setSelected(item)}
              >
                <div className="rounded-2xl overflow-hidden bg-[#0a0a0a] group">
                  <img
                    src={item.image}
                    className="w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="p-4">
                    <p className="text-xs text-gray-400">{item.category}</p>
                    <h3 className="text-sm">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-6 z-50"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl w-full bg-[#0a0a0a] rounded-2xl overflow-hidden"
            >
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