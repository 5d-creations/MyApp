// src/components/Preloader.jsx
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
      transition={{ duration: 1 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
    >
      <motion.div
        initial={{ y: 0, x: 0, scale: 1 }}
        animate={{ y: [0, -30, 0], x: 0, scale: 1 }}
        exit={{
          x: "-42vw", // move left
          y: "-42vh", // move up
          scale: 0.4, // shrink to navbar size
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
        className="relative flex flex-col items-center justify-center"
      >
        {/* Glow behind logo */}
        <motion.div
          className="absolute w-60 h-60 rounded-full bg-blue-500 blur-3xl opacity-40"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          className="w-32 h-32 drop-shadow-[0_0_35px_rgba(59,130,246,0.95)]"
        />

        {/* Futuristic Glowing Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mt-6 text-3xl font-extrabold tracking-widest 
            text-transparent bg-clip-text 
            bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 
            drop-shadow-[0_0_20px_rgba(59,130,246,0.9)]"
          style={{
            WebkitTextStroke: "0.6px #0ff", // ✅ Neon outline
            letterSpacing: "0.2em", // ✅ Wider futuristic spacing
          }}
        >
          5D Creation
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
