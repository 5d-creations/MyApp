import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { fadeInUp} from "@/lib/variants";

/* =========================
   Animation Variants
========================= */


const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } },
};

/* =========================
   Reusable Section Header
========================= */
const SectionHeader = ({ title, subtitle, centered = true }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={staggerContainer}
    className={`mb-16 ${centered ? "text-center" : ""}`}
  >
    <motion.h2
      variants={fadeInUp}
      className="text-3xl md:text-5xl font-bold mb-6"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        variants={fadeInUp}
        className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
      >
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);

/* =========================
   Projects Data
========================= */
const projects = [
  {
    id: 1,
    title: "SilentVote",
    description: "Secure, anonymous voting platform with real-time results.",
    longDescription:
      "SilentVote revolutionizes digital democracy with end-to-end encryption, blockchain verification, and real-time analytics.",
    image: "Screenshot 2025-07-04 205005.png",
    category: "Web Application",
    tech: ["React", "Node", "MongoDB", "TailwindCSS", "Express"],
    featured: true,
    liveUrl: "https://silentvotes.vercel.app",
    githubUrl: "https://github.com/MithunkarthikK/silentvotes",
    outcomes: [
      "99.9% uptime during elections",
      "Zero security incidents in 2+ years",
      "Used by 50+ organizations",
      "500K+ votes processed",
    ],
  },
  {
    id: 2,
    title: "Tourist Guide Pro",
    description: "AI-powered tourist guide with translations & offline maps.",
    longDescription:
      "An intelligent travel companion that provides personalized recommendations using AI & ML.",
    image: "/tn.png",
    category: "Web App",
    tech: ["React", "Django", "Python", "REST API", "Firebase"],
    featured: true,
    liveUrl: "https://touristguide.vercel.app",
    githubUrl: "https://github.com/MithunkarthikK/touristguide",
    outcomes: [
      "4.8/5 app store rating",
      "100K+ downloads in year one",
      "35% boost in engagement",
      "Featured in travel magazines",
    ],
  },
  {
    id: 3,
    title: "Diabetes Prediction ML",
    description: "ML model for early diabetes prediction.",
    longDescription:
      "Advanced ML system analyzing lifestyle & genetic data with 94% accuracy.",
    image: "/image.png",
    category: "Machine Learning",
    tech: ["Python", "TensorFlow", "Flask", "React", "Healthcare APIs"],
    featured: false,
    liveUrl: "https://diabetes-predictor.com",
    githubUrl: "https://github.com/5dtech/diabetes-ml",
    outcomes: ["94% accuracy", "10K+ patients helped", "Journal publication"],
  },
];

/* =========================
   Portfolio Page
========================= */
export default function Portfolio() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <Helmet>
        <title>Portfolio | 5D Tech</title>
        <meta
          name="description"
          content="Explore our portfolio of apps, ML projects, and digital solutions. Real projects with measurable impact."
        />
      </Helmet>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="mb-4">
                <Badge>Our Portfolio</Badge>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Real Projects,{" "}
                <span className="bg-gradient-violet bg-clip-text text-transparent">
                  Real Results
                </span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                Explore our collection of successful projects that helped
                businesses grow, innovate, and achieve their goals.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <SectionHeader title="Featured Projects" subtitle={undefined} />

            <div className="space-y-16">
              {featuredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Project Image */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="glass rounded-2xl p-2 shadow-glow-cyan hover:shadow-glow-intense-cyan transition-all">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-64 lg:h-80 object-cover rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div
                    className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <Badge className="mb-4">{project.category}</Badge>
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Outcomes */}
                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        Key Outcomes:
                      </h4>
                      <ul className="space-y-2">
                        {project.outcomes.slice(0, 3).map((outcome, idx) => (
                          <li key={idx} className="flex items-start">
                            <ArrowRight className="w-4 h-4 text-primary mr-2 mt-0.5" />
                            <span className="text-sm text-muted-foreground">
                              {outcome}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4">
                      <Button variant="hero" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </a>
                      </Button>
                      <Button variant="minimal" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* All Projects */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="All Projects"
              subtitle="A comprehensive look at our diverse portfolio spanning industries and technologies."
            />

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <Card className="overflow-hidden glass hover:shadow-glow-cyan transition-all duration-300">
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge>{project.category}</Badge>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.tech.length - 3} more
                          </Badge>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button variant="minimal" size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live
                          </a>
                        </Button>
                        <Button variant="minimal" size="sm" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's create something amazing together and add your project to our
                portfolio of success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button variant="neon" size="lg" asChild>
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
