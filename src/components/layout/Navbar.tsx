import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Logo = () => (
  <motion.div
    className="flex items-center space-x-2"
    whileHover={{ scale: 1.1, rotate: 0.1 }}
    transition={{ type: "spring", stiffness: 250, damping: 15 }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-[0_0_15px_rgba(0,255,255,0.7)]">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <path d="M15 20h40q20 0 20 30t-20 30H15v-20h30q5 0 5-5t-5-5H15z" fill="url(#grad)" />
    </svg>
    <span
      className="hidden md:inline text-2xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.9)]"
      style={{ WebkitTextStroke: "0.6px #0ff", letterSpacing: "0.15em" }}
    >
      5D Creations
    </span>
  </motion.div>
);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 17, delay: 0.1 }}
      className={`fixed top-3 inset-x-4 z-50 rounded-2xl px-4 md:px-6 transition-all duration-500 ${
        scrolled
          ? "bg-black/50 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-black/30 backdrop-blur-md border border-white/10"
      }`}
    >
      <div className="flex items-center justify-between h-14">
        <Link to="/" className="flex items-center space-x-2"><Logo /></Link>

        <div className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <motion.div key={item.name} whileHover={{ y: -2 }}>
                <Link to={item.href} className={`relative px-2 py-1 text-sm font-medium tracking-wide transition-colors ${isActive ? "text-cyan-300" : "text-gray-300 hover:text-white"}`}>
                  {item.name}
                  {isActive && <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="hidden md:block">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold px-5 shadow-[0_0_18px_rgba(0,255,255,0.6)] hover:shadow-[0_0_25px_rgba(0,255,255,1)] transition-all" size="sm" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
          </motion.div>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-400 hover:text-white transition-colors">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} className="md:hidden mt-2 rounded-xl bg-black/70 backdrop-blur-lg border border-white/10 p-4 space-y-2 shadow-[0_0_25px_rgba(0,255,255,0.2)]">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link key={item.name} to={item.href} className={`block px-3 py-2 text-base font-medium rounded-lg ${isActive ? "text-cyan-300 bg-cyan-500/10" : "text-gray-300 hover:text-white hover:bg-cyan-500/5"}`}>
                  {item.name}
                </Link>
              );
            })}
            <Button className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold shadow-[0_0_15px_rgba(0,255,255,0.7)] hover:shadow-[0_0_25px_rgba(0,255,255,1)]" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
