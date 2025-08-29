// src/pages/Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import clsx from "clsx";
import {
  ArrowRight,
  Code2,
  Palette,
  Zap,
  Shield,
  TrendingUp,
  Star,
  Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { fadeInUp, staggerChildren } from "@/lib/variants";
import { useEffect, useRef } from "react";

// ✅ Section Header
const SectionHeader = ({ title, subtitle }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={staggerChildren}
    className="text-center mb-16"
  >
    <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6">
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        variants={fadeInUp}
        className="text-xl text-muted-foreground max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);

// ✅ Hero
const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/20 to-background" />
    <div className="container mx-auto px-4 relative z-20 text-center max-w-5xl">
      <motion.div initial="initial" animate="animate" variants={staggerChildren}>
        <motion.span
          variants={fadeInUp}
          className="inline-flex items-center px-4 py-2 rounded-full glass border border-primary/20 text-sm font-medium text-primary mb-6"
        >
          <Zap className="w-4 h-4 mr-2" /> Building the Future, One Dimension at a Time
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Build bold experiences in <br />
          <span className="bg-gradient-cyan bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
            5 Dimensions
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Design, code, speed, reliability, and impact. I craft modern web apps with a glowing aesthetic, clean architecture, and measurable results.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" className="group">
              Get a Quote{" "}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button variant="neon" size="xl" asChild>
            <Link to="/portfolio">View My Work</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// ✅ Services
const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern React & Django applications with clean architecture and scalable design.",
    color: "cyan"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that users love and convert visitors into customers.",
    color: "violet"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lightning-fast websites optimized for speed, SEO, and user experience.",
    color: "cyan"
  },
  {
    icon: Shield,
    title: "Security",
    description:
      "Robust, secure applications with modern authentication and data protection.",
    color: "violet"
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "Data-driven solutions that scale with your business and drive measurable impact.",
    color: "cyan"
  }
];

const Services = () => (
  <section className="py-24 bg-surface relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
    <div className="container mx-auto px-4 relative">
      <SectionHeader
        title="The 5 Dimensions of Excellence"
        subtitle="Every project is built with these core pillars to ensure exceptional results"
      />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map(({ icon: Icon, title, description, color }) => (
          <motion.div key={title} variants={fadeInUp} whileHover={{ y: -8, scale: 1.02 }}>
            <Card
              className={clsx(
                "p-8 h-full glass border-border/20 transition-all duration-300",
                color === "cyan"
                  ? "hover:border-primary/40 hover:shadow-glow-cyan"
                  : "hover:border-secondary/40 hover:shadow-glow-violet"
              )}
            >
              <div
                className={clsx(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300",
                  color === "cyan"
                    ? "bg-gradient-cyan shadow-glow-cyan group-hover:shadow-glow-intense-cyan"
                    : "bg-gradient-violet shadow-glow-violet group-hover:shadow-glow-intense-violet"
                )}
              >
                <Icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// ✅ Testimonials
const testimonials = [
  {
    name: "Manoj Kumar",
    role: "AI Enthusiast",
    content:
      "5D Creations delivered exactly what we needed - a beautiful, fast website that converts visitors into customers. The attention to detail is incredible.",
    rating: 5,
    avatar: "MK"
  },
  {
    name: "Mithunkarthik",
    role: "Early Career Dev",
    content:
      "Working with 5D was a game-changer. They understood our vision perfectly and delivered a solution that exceeded our expectations.",
    rating: 5,
    avatar: "MK"
  },
  {
    name: "Shri Maha Vishnu",
    role: "UI/UX Expert",
    content:
      "The design and development quality is outstanding. Our new platform has improved user engagement by 300% since launch.",
    rating: 5,
    avatar: "MV"
  }
];

const Testimonials = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <SectionHeader
        title="What Clients Say"
        subtitle="Real results from real people who trusted us with their vision"
      />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {testimonials.map(({ name, role, content, rating, avatar }) => (
          <motion.div key={name} variants={fadeInUp} whileHover={{ y: -4 }}>
            <Card className="p-8 glass border-border/20 hover:border-primary/20 transition-all duration-300">
              <div className="flex items-center mb-4" aria-label={`${rating}-star rating`}>
                {[...Array(rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warning fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed">"{content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-cyan rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-4">
                  {avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{name}</h4>
                  <p className="text-sm text-muted-foreground">{role}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// ✅ CTA
const CTA = () => (
  <section className="py-24 bg-surface relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-mesh" />
    <div className="container mx-auto px-4 relative">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build Something Amazing?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Let's discuss your project and bring your vision to life with cutting-edge technology and beautiful design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" className="group">
              Start Your Project{" "}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button variant="neon" size="xl" asChild>
            <Link to="/portfolio">See Previous Work</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Services />
      <Testimonials />
      <CTA />
    </main>
  );
}
