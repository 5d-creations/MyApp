import { motion } from "framer-motion";
import Logo from "../assets/logo.svg";

const Preloader = ({ loading }) => {
  if (!loading) return null;

  return (
    <motion.div
      key="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
      aria-label="Loading screen"
    >
      <motion.div
        initial={{ y: 0, scale: 1 }}
        animate={{ y: [0, -20, 0], scale: 1 }}
        exit={{
          x: "-40vw",
          y: "-40vh",
          scale: 0.35,
          opacity: 0.9,
          transition: { duration: 1, ease: "easeInOut" },
        }}
        className="relative flex flex-col items-center justify-center"
      >
        {/* Glow behind logo */}
        <motion.div
          className="absolute w-60 h-60 rounded-full bg-blue-500 blur-3xl opacity-40"
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Logo */}
        <img
          src={Logo}
          alt="5D Creation Logo"
          className="w-28 h-28 sm:w-32 sm:h-32 drop-shadow-[0_0_35px_rgba(59,130,246,0.95)]"
          loading="eager"
        />

        {/* Glowing Text */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="mt-6 text-2xl sm:text-3xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 drop-shadow-[0_0_18px_rgba(59,130,246,0.9)]"
          style={{ WebkitTextStroke: "0.6px #0ff", letterSpacing: "0.15em" }}
        >
          5D Creations
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-2 text-sm sm:text-base text-gray-300 tracking-widest"
        >
          Innovative Digital Experience
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
