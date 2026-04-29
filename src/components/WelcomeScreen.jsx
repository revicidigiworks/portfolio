import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/revici.webp";

export default function WelcomeScreen({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 2.8, duration: 0.9 }}
          className="fixed inset-0 z-[9999] overflow-hidden bg-[#020202] flex items-center justify-center"
        >
          {/* GRID */}
          <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:44px_44px]" />

          {/* NOISE */}
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:18px_18px]" />

          {/* AURORA GLOW */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.18, 0.32, 0.18],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[620px] h-[620px] rounded-full bg-blue-500/10 blur-[150px]"
          />

          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.14, 0.28, 0.14],
              rotate: [0, -12, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[560px] h-[560px] rounded-full bg-pink-500/10 blur-[150px]"
          />

          {/* OUTER ORBIT */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-60 h-60 md:w-72 md:h-72 rounded-full border border-white/5"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_12px_rgba(244,114,182,0.8)]" />
          </motion.div>

          {/* SECOND RING */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full border border-dashed border-white/10"
          />

          {/* CENTER GLASS BOX */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-36 h-36 md:w-40 md:h-40 rounded-[2rem]
            border border-white/10
            bg-white/[0.04]
            backdrop-blur-2xl
            shadow-[0_0_80px_rgba(255,255,255,0.04)]
            flex items-center justify-center overflow-hidden"
          >
            {/* EDGE LIGHT */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

            {/* SHINE PASS */}
            <motion.div
              initial={{ x: "-180%" }}
              animate={{ x: "180%" }}
              transition={{
                delay: 0.8,
                duration: 1.3,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 w-12 bg-white/20 blur-xl rotate-12"
            />

            {/* LOGO */}
            <motion.img
              src={logo}
              alt="logo"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: [0, -4, 0],
              }}
              transition={{
                opacity: { duration: 0.8 },
                scale: { duration: 0.8 },
                y: {
                  delay: 1,
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="relative w-16 md:w-20 drop-shadow-[0_0_25px_rgba(255,255,255,0.28)]"
            />
          </motion.div>

          {/* BRAND TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="absolute bottom-[17%] text-center"
          >
            <p className="mt-2 text-[10px] md:text-xs tracking-[0.35em] text-white/30 uppercase">
              Digital Solutions
            </p>
          </motion.div>

          {/* LOADER */}
          <div className="absolute bottom-10 w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              className="h-full w-1/2 bg-gradient-to-r from-blue-400 via-white to-pink-400"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}