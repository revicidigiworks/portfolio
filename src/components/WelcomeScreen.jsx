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
          transition={{ delay: 1.6, duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-neutral-950"
        >
          {/* Glow */}
          <div className="absolute w-[250px] h-[250px] bg-blue-500/15 blur-3xl rounded-full" />
          <div className="absolute w-[250px] h-[250px] bg-pink-500/15 blur-3xl rounded-full translate-x-16 translate-y-16" />

          {/* Logo */}
          <motion.img
            src={logo}
            alt="logo"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-20 md:w-24"
          />

          {/* Light sweep */}
          <motion.div
            initial={{ x: "-120%", opacity: 0 }}
            animate={{ x: "120%", opacity: 0.25 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute w-[180px] h-[180px] bg-white/10 blur-2xl rotate-45"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}