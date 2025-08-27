// src/components/layout/Footer.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "/logo.svg"; // ✅ Import your logo

const quickLinks = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Web Development", href: "/services#web-dev" },
  { name: "UI/UX Design", href: "/services#design" },
  { name: "API Development", href: "/services#api" },
  { name: "Performance Optimization", href: "/services#performance" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/", icon: Twitter },
  { name: "Instagram", href: "https://instagram.com/", icon: Instagram },
];

const FooterLink = ({ to, children, external = false }) =>
  external ? (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors text-sm"
    >
      {children}
    </a>
  ) : (
    <Link
      to={to}
      className="text-muted-foreground hover:text-primary transition-colors text-sm"
    >
      {children}
    </Link>
  );

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border/20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src={Logo}
                    alt="5D Creations Logo"
                    className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span
                  className="hidden md:inline text-2xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.9)]"
                  style={{ WebkitTextStroke: "0.6px #0ff", letterSpacing: "0.15em" }}
                >
                  5D Creations
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Build bold experiences in 5 Dimensions — design, code, speed,
                reliability, and impact.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <motion.a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-glow-cyan transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ name, href }) => (
                <li key={name}>
                  <FooterLink to={href}>{name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map(({ name, href }) => (
                <li key={name}>
                  <FooterLink to={href}>{name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a
                href="mailto:5dcreationskk@gmail.com"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Mail className="w-4 h-4 text-primary" />
                5dcreationskk@gmail.com
              </a>
              <a
                href="tel:+918825792220"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Phone className="w-4 h-4 text-primary" />
                +91 88257 92220
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Bangalore, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} 5D Creations. All rights reserved.</p>
          <div className="flex gap-6">
            <FooterLink to="/privacy">Privacy Policy</FooterLink>
            <FooterLink to="/terms">Terms of Service</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
