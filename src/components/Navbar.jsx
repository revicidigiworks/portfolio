import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import logo from "../assets/images/revici.webp";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const [projectOpen, setProjectOpen] = useState(false); // mobile
  const [desktopProjectOpen, setDesktopProjectOpen] =
    useState(false); // desktop

  const dropdownRef = useRef(null);

  const links = [
    { id: "hero", label: "home" },
    { id: "about", label: "about" },
    { id: "services", label: "services" },
    { id: "skills", label: "skills" },

    {
      label: "projects",
      children: [
        { id: "projects", label: "web development" },
        { id: "design", label: "graphic design" },
      ],
    },

    { id: "experience", label: "experience" },
    { id: "contact", label: "contact" },
  ];

  /* ACTIVE SECTION */
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  /* SCROLL */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  /* BODY LOCK */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  /* CLOSE DESKTOP DROPDOWN OUTSIDE CLICK */
  useEffect(() => {
    const handleClick = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDesktopProjectOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClick
      );
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div
            className={`relative overflow-visible rounded-2xl border transition-all duration-500 ${
              scrolled
                ? "bg-black/55 border-white/10 backdrop-blur-2xl shadow-[0_10px_60px_rgba(0,0,0,0.55)]"
                : "bg-white/[0.03] border-white/5 backdrop-blur-xl"
            }`}
          >
            {/* glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-fuchsia-500/10 pointer-events-none rounded-2xl" />

            <div className="relative px-5 md:px-7 h-[74px] flex items-center justify-between">
              {/* LOGO */}
              <a
                href="#hero"
                className="flex items-center gap-3 group"
              >
                <div className="relative">
                  <img
                    src={logo}
                    alt="logo"
                    className="h-9 object-contain transition duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="hidden sm:block leading-tight">
                  <p className="text-white font-semibold tracking-wide">
                    RAFLI TAWIL
                  </p>
                  <p className="text-[11px] text-gray-400">
                    Creative Developer
                  </p>
                </div>
              </a>

              {/* DESKTOP MENU */}
              <div className="hidden lg:flex items-center gap-2">
                {links.map((item) => {
                  /* PROJECT DROPDOWN */
                  if (item.children) {
                    const isActive =
                      item.children.some(
                        (child) => child.id === active
                      );

                    return (
                      <div
                        key={item.label}
                        ref={dropdownRef}
                        className="relative"
                      >
                        <button
                          onClick={() =>
                            setDesktopProjectOpen(
                              !desktopProjectOpen
                            )
                          }
                          className={`px-4 h-11 rounded-xl flex items-center gap-2 text-sm capitalize transition ${
                            isActive ||
                            desktopProjectOpen
                              ? "text-white bg-white/10"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {item.label}

                          <ChevronDown
                            size={16}
                            className={`transition ${
                              desktopProjectOpen
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {desktopProjectOpen && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                y: 12,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              exit={{
                                opacity: 0,
                                y: 12,
                              }}
                              transition={{
                                duration: 0.22,
                              }}
                              className="absolute top-full left-0 pt-3 z-[9999]"
                            >
                              <div className="w-64 rounded-2xl bg-black/95 border border-white/10 backdrop-blur-2xl p-2 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
                                {item.children.map(
                                  (child) => (
                                    <a
                                      key={child.id}
                                      href={`#${child.id}`}
                                      onClick={() =>
                                        setDesktopProjectOpen(
                                          false
                                        )
                                      }
                                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm capitalize transition ${
                                        active ===
                                        child.id
                                          ? "bg-white/10 text-white"
                                          : "text-gray-400 hover:text-white hover:bg-white/5"
                                      }`}
                                    >
                                      {
                                        child.label
                                      }

                                      <ArrowUpRight
                                        size={15}
                                      />
                                    </a>
                                  )
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  /* NORMAL LINK */
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`relative px-4 h-11 rounded-xl flex items-center text-sm capitalize transition ${
                        active === item.id
                          ? "text-white bg-white/10"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.label}

                      {active === item.id && (
                        <motion.span
                          layoutId="active-pill"
                          className="absolute inset-0 rounded-xl border border-cyan-400/20"
                        />
                      )}
                    </a>
                  );
                })}
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  className="hidden md:flex px-5 h-11 rounded-xl bg-white text-black font-medium items-center gap-2 hover:scale-105 transition"
                >
                  <Sparkles size={16} />
                  Hire Me
                </a>

                <button
                  onClick={() => setOpen(true)}
                  className="lg:hidden w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center"
                >
                  <Menu size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 180,
              }}
              className="fixed top-0 left-0 h-screen w-[86%] max-w-sm z-[999] bg-neutral-950 border-r border-white/10 flex flex-col"
            >
              {/* HEADER */}
              <div className="px-6 h-20 border-b border-white/10 flex items-center justify-between">
                <img
                  src={logo}
                  className="h-8"
                />

                <button
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center"
                >
                  <X size={20} />
                </button>
              </div>

              {/* LINKS */}
              <div className="flex-1 px-5 py-6 overflow-y-auto space-y-2">
                {links.map((item) => {
                  if (item.children) {
                    return (
                      <div key={item.label}>
                        <button
                          onClick={() =>
                            setProjectOpen(
                              !projectOpen
                            )
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white/5 text-white flex items-center justify-between capitalize"
                        >
                          {item.label}

                          <ChevronDown
                            size={18}
                            className={`transition ${
                              projectOpen
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {projectOpen && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              className="overflow-hidden pl-3 mt-2 space-y-2"
                            >
                              {item.children.map(
                                (child) => (
                                  <a
                                    key={child.id}
                                    href={`#${child.id}`}
                                    onClick={() =>
                                      setOpen(
                                        false
                                      )
                                    }
                                    className="block px-4 py-3 rounded-xl capitalize text-gray-300 hover:bg-white/5 hover:text-white"
                                  >
                                    {
                                      child.label
                                    }
                                  </a>
                                )
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() =>
                        setOpen(false)
                      }
                      className="block px-4 py-3 rounded-xl capitalize text-gray-300 hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>

              {/* FOOTER */}
              <div className="p-5 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="h-12 rounded-xl bg-white text-black font-semibold flex items-center justify-center gap-2"
                >
                  <Sparkles size={16} />
                  Start Project
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}