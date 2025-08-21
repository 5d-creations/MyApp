import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const projects = [
  {
    id: 1,
    title: "SilentVote",
    description: "A secure, anonymous voting platform built with React and Django, featuring real-time results and blockchain verification.",
    longDescription: "SilentVote revolutionizes digital democracy with a secure, transparent voting system. Features include end-to-end encryption, real-time analytics, and blockchain verification for tamper-proof results.",
    image: "/api/placeholder/600/400",
    category: "Web Application",
    tech: ["React", "Django", "PostgreSQL", "WebSocket", "Blockchain"],
    featured: true,
    liveUrl: "https://silentvote-demo.com",
    githubUrl: "https://github.com/5dcreations/silentvote",
    outcomes: [
      "99.9% uptime during election periods",
      "Zero security incidents in 2+ years",
      "Used by 50+ organizations",
      "500K+ votes processed"
    ]
  },
  {
    id: 2,
    title: "Tourist Guide Pro",
    description: "AI-powered tourist guide application with personalized recommendations, real-time translations, and offline maps.",
    longDescription: "An intelligent travel companion that uses machine learning to provide personalized recommendations based on user preferences, budget, and travel style.",
    image: "/api/placeholder/600/400",
    category: "Mobile App",
    tech: ["React Native", "Django", "AI/ML", "Maps API", "Payment Gateway"],
    featured: true,
    liveUrl: "https://touristguide-pro.com",
    githubUrl: "https://github.com/5dcreations/tourist-guide",
    outcomes: [
      "4.8/5 app store rating",
      "100K+ downloads in first year",
      "35% increase in user engagement",
      "Featured in travel magazines"
    ]
  },
  {
    id: 3,
    title: "TeamMind",
    description: "Collaborative knowledge base and project management platform with real-time editing and AI-powered insights.",
    longDescription: "A Confluence-like knowledge management system designed for modern teams, featuring collaborative editing, intelligent search, and automated documentation.",
    image: "/api/placeholder/600/400",
    category: "SaaS Platform",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Elasticsearch"],
    featured: true,
    liveUrl: "https://teammind-app.com",
    githubUrl: "https://github.com/5dcreations/teammind",
    outcomes: [
      "200% faster knowledge retrieval",
      "90% reduction in duplicate work",
      "Used by 1000+ teams globally",
      "$2M+ in productivity savings"
    ]
  },
  {
    id: 4,
    title: "Diabetes Prediction ML",
    description: "Machine learning model for early diabetes prediction using patient data and lifestyle factors.",
    longDescription: "Advanced ML system that analyzes patient data, lifestyle patterns, and genetic factors to predict diabetes risk with 94% accuracy.",
    image: "/api/placeholder/600/400",
    category: "Machine Learning",
    tech: ["Python", "TensorFlow", "Flask", "React", "Healthcare APIs"],
    featured: false,
    liveUrl: "https://diabetes-predictor.com",
    githubUrl: "https://github.com/5dcreations/diabetes-ml",
    outcomes: [
      "94% prediction accuracy",
      "Helped 10K+ patients",
      "Published in medical journal",
      "Reduced healthcare costs by 30%"
    ]
  },
  {
    id: 5,
    title: "EcoTrack",
    description: "Sustainability tracking dashboard for businesses to monitor and reduce their environmental impact.",
    longDescription: "Comprehensive ESG tracking platform that helps businesses monitor carbon footprint, waste management, and sustainability goals with real-time analytics.",
    image: "/api/placeholder/600/400",
    category: "Dashboard",
    tech: ["React", "Django", "PostgreSQL", "Chart.js", "AWS"],
    featured: false,
    liveUrl: "https://ecotrack-dashboard.com",
    githubUrl: "https://github.com/5dcreations/ecotrack",
    outcomes: [
      "40% carbon footprint reduction",
      "500+ companies using platform",
      "ISO 14001 compliance achieved",
      "Winner of Green Tech Award 2023"
    ]
  },
  {
    id: 6,
    title: "CryptoPortfolio",
    description: "Real-time cryptocurrency portfolio tracker with advanced analytics and trading insights.",
    longDescription: "Professional-grade crypto portfolio management tool with real-time market data, advanced charting, and automated trading strategies.",
    image: "/api/placeholder/600/400",
    category: "FinTech",
    tech: ["React", "Node.js", "WebSocket", "Chart.js", "Crypto APIs"],
    featured: false,
    liveUrl: "https://cryptoportfolio-pro.com",
    githubUrl: "https://github.com/5dcreations/cryptoportfolio",
    outcomes: [
      "$50M+ assets tracked",
      "25K+ active traders",
      "15% average portfolio growth",
      "Featured in CoinDesk"
    ]
  }
];

const categories = ["All", "Web Application", "Mobile App", "SaaS Platform", "Machine Learning", "Dashboard", "FinTech"];

export default function Portfolio() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <>
      <Helmet>
        <title>Portfolio | 5D Creations - Our Work & Case Studies</title>
        <meta name="description" content="Explore our portfolio of web applications, mobile apps, and digital solutions. Real projects with measurable results and cutting-edge technology." />
      </Helmet>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial="initial"
              animate="animate"
              variants={{
                animate: {
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <Badge className="mb-4">Our Portfolio</Badge>
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
                Explore our collection of successful projects that have helped businesses 
                grow, innovate, and achieve their goals.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                animate: {
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-bold mb-6 text-center"
              >
                Featured Projects
              </motion.h2>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                animate: {
                  transition: { staggerChildren: 0.2 }
                }
              }}
              className="space-y-16"
            >
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="glass rounded-2xl p-2 shadow-glow-cyan hover:shadow-glow-intense-cyan transition-all duration-300">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 lg:h-80 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                  
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div>
                      <Badge className="mb-4">{project.category}</Badge>
                      <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {project.longDescription}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-primary">Key Outcomes:</h4>
                      <ul className="space-y-2">
                        {project.outcomes.slice(0, 3).map((outcome, idx) => (
                          <li key={idx} className="flex items-start">
                            <ArrowRight className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

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
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* All Projects Grid */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                animate: {
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                All Projects
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                A comprehensive look at our diverse portfolio spanning multiple industries and technologies
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                animate: {
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <Card className="overflow-hidden glass border-border/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-cyan">
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
                      
                      <div className="flex gap-2">
                        <Button variant="minimal" size="sm" className="flex-1" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live
                          </a>
                        </Button>
                        <Button variant="minimal" size="sm" className="flex-1" asChild>
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

        {/* CTA Section */}
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
                Let's create something amazing together and add your project to our portfolio of success.
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