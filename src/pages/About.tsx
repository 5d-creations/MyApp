import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Code,
  Palette,
  Zap,
  MapPin,
  Mail,
  ArrowRight,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const skills = [
  { name: "React & TypeScript", level: 95 },
  { name: "Django & Python", level: 90 },
  { name: "UI/UX Design", level: 85 },
  { name: "PostgreSQL", level: 88 },
  { name: "Cloud Deployment", level: 80 },
  { name: "API Development", level: 92 },
];

const timeline = [
  {
    year: "2025",
    title: "5D Tech Founded",
    description:
      "Launched freelance practice focusing on full-stack development and modern web solutions.",
  },
  {
    year: "2024",
    title: "Full Stack Developer",
    description:
      "Led development of multiple high-impact projects, specializing in React and Django ecosystems.",
  },
  {
    year: "2023",
    title: "React Specialist",
    description:
      "Transitioned to React ecosystem, mastering modern patterns and state management solutions.",
  },
  {
    year: "2022",
    title: "Started Web Development",
    description:
      "Began journey in web development with focus on user experience and clean code practices.",
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | 5D Tech - Meet the Team</title>
        <meta
          name="description"
          content="Learn about 5D Tech - passionate full-stack developers specializing in React, Django, and modern web technologies. Based in Bangalore, India."
        />
      </Helmet>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
          <div className="container mx-auto px-4 relative max-w-6xl">
            <motion.div
              initial="initial"
              animate="animate"
              variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Text */}
              <motion.div variants={fadeInUp}>
                <Badge className="mb-6">About Us</Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Building the Future,{" "}
                  <span className="bg-gradient-cyan bg-clip-text text-transparent">
                    One Line at a Time
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  We are passionate full-stack developers who believe in creating digital experiences that are not just functional, but truly transformative. With expertise spanning design, development, and deployment, we bring ideas to life in the digital realm.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Button variant="hero" asChild>
                    <Link to="/contact">
                      Let's Work Together
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="neon" asChild>
                    <Link to="/portfolio">View Our Work</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Right SVG Logo */}
              <motion.div variants={fadeInUp} className="flex flex-col justify-center items-center mt-12 lg:mt-0">
                <div className="glass rounded-2xl p-8 shadow-glow-cyan w-80 h-80 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    className="w-32 h-32 drop-shadow-[0_0_25px_rgba(0,255,255,0.7)] animate-bounce"
                  >
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M15 20h40q20 0 20 30t-20 30H15v-20h30q5 0 5-5t-5-5H15z"
                      fill="url(#grad)"
                    />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Technical Expertise
                </h2>
                <p className="text-xl text-muted-foreground">
                  Constantly learning and evolving with the latest technologies
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-cyan h-2 rounded-full shadow-glow-cyan"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Our Journey
                </h2>
                <p className="text-xl text-muted-foreground">
                  From curiosity to expertise - the path that led to 5D Tech
                </p>
              </motion.div>

              <div className="relative">
                <div className="absolute left-4 md:left-1/2 md:-ml-px top-0 bottom-0 w-0.5 bg-gradient-cyan shadow-glow-cyan" />
                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      variants={fadeInUp}
                      className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        }`}
                    >
                      <div className="absolute left-4 md:left-1/2 md:-ml-3 w-6 h-6 bg-gradient-cyan rounded-full shadow-glow-cyan flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                      </div>

                      <div
                        className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                          } ml-12 md:ml-0`}
                      >
                        <Card className="p-6 glass border-border/20">
                          <div className="text-primary font-bold text-lg mb-2">
                            {item.year}
                          </div>
                          <h3 className="text-xl font-semibold mb-3">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </Card>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Core Values & Approach
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide every project and interaction
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div variants={fadeInUp}>
                  <Card className="p-8 text-center glass border-border/20 hover:border-primary/20 transition-all duration-300">
                    <Code className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h3 className="text-xl font-semibold mb-4">Clean Code</h3>
                    <p className="text-muted-foreground">
                      Writing maintainable, scalable code that stands the test of time.
                    </p>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="p-8 text-center glass border-border/20 hover:border-secondary/20 transition-all duration-300">
                    <Palette className="w-12 h-12 text-secondary mx-auto mb-6" />
                    <h3 className="text-xl font-semibold mb-4">User-Centric Design</h3>
                    <p className="text-muted-foreground">
                      Every design decision is made with the end user in mind.
                    </p>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="p-8 text-center glass border-border/20 hover:border-primary/20 transition-all duration-300">
                    <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h3 className="text-xl font-semibold mb-4">Performance First</h3>
                    <p className="text-muted-foreground">
                      Optimizing for speed, efficiency, and reliability for better UX.
                    </p>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
          <div className="container mx-auto px-4 max-w-3xl relative text-center">
            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Let's Create Something Amazing
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to bring your vision to life? Let's discuss your project and explore how we can work together.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> Bangalore, India
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" /> official@5dtech.in
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Start a Project</Link>
                </Button>
                <Button variant="neon" size="lg" asChild>
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
