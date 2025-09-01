// src/pages/Services.jsx
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import clsx from "clsx";
import {
  Code2,
  Palette,
  Zap,
  Database,
  Smartphone,
  Search,
  ArrowRight,
  Check,
} from "lucide-react";
import { fadeInUp, staggerChildren } from "@/lib/variants";

// ✅ Services Data
const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Full-stack web applications built with React, Django, and modern technologies",
    features: [
      "React & TypeScript",
      "Django REST Framework",
      "PostgreSQL Database",
      "Cloud Deployment",
    ],
    price: "From ₹50,000",
    color: "cyan",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, user-centric designs that convert visitors into customers",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing",
    ],
    price: "From ₹30,000",
    color: "violet",
  },
  {
    icon: Database,
    title: "API Development",
    description:
      "Robust, scalable APIs and integrations for seamless data flow",
    features: ["RESTful APIs", "GraphQL", "Authentication", "Third-party Integrations"],
    price: "From ₹25,000",
    color: "cyan",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast websites optimized for speed and UX",
    features: [
      "Speed Optimization",
      "SEO Enhancement",
      "Core Web Vitals",
      "Mobile Optimization",
    ],
    price: "From ₹20,000",
    color: "violet",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first designs that work perfectly on all devices",
    features: [
      "Mobile-First Approach",
      "Cross-Browser Testing",
      "Progressive Web Apps",
      "Accessibility",
    ],
    price: "From ₹15,000",
    color: "cyan",
  },
  {
    icon: Search,
    title: "SEO & Analytics",
    description: "Data-driven strategies to improve visibility and performance",
    features: [
      "Technical SEO",
      "Google Analytics",
      "Performance Monitoring",
      "Growth Analysis",
    ],
    price: "From ₹10,000",
    color: "violet",
  },
];

// ✅ Pricing Data
const pricingTiers = [
  {
    name: "Starter",
    price: "₹75,000",
    description: "Perfect for small businesses and startups",
    features: [
      "Landing Page Design",
      "Responsive Development",
      "Basic SEO Setup",
      "Contact Form Integration",
      "3 Revisions Included",
      "1 Month Support",
    ],
    color: "cyan",
    popular: false,
  },
  {
    name: "Growth",
    price: "₹1,50,000",
    description: "Ideal for growing businesses",
    features: [
      "Multi-page Website",
      "Custom Backend Development",
      "API Integrations",
      "Advanced SEO",
      "Admin Dashboard",
      "3 Months Support",
      "Performance Optimization",
    ],
    color: "violet",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Custom Web Application",
      "Scalable Architecture",
      "Advanced Security",
      "Third-party Integrations",
      "Dedicated Support",
      "Training & Documentation",
      "Ongoing Maintenance",
    ],
    color: "cyan",
    popular: false,
  },
];

// ✅ Services Page
export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | 5D Tech - Web Development & Design</title>
        <meta
          name="description"
          content="Professional web development services including React development, UI/UX design, API development, and performance optimization. Get a quote today."
        />
      </Helmet>

      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerChildren}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp}>
                <Badge className="mb-4">Our Services</Badge>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Transform Your Vision Into{" "}
                <span className="bg-gradient-cyan bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                From concept to deployment, we deliver end-to-end solutions that
                drive results and exceed expectations.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <Card
                    className={clsx(
                      "p-8 h-full glass border-border/20 transition-all duration-300",
                      service.color === "cyan"
                        ? "hover:border-primary/40 hover:shadow-glow-cyan"
                        : "hover:border-secondary/40 hover:shadow-glow-violet"
                    )}
                  >
                    <div
                      className={clsx(
                        "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300",
                        service.color === "cyan"
                          ? "bg-gradient-cyan shadow-glow-cyan group-hover:shadow-glow-intense-cyan"
                          : "bg-gradient-violet shadow-glow-violet group-hover:shadow-glow-intense-violet"
                      )}
                    >
                      <service.icon
                        className="w-8 h-8 text-primary-foreground"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-sm"
                        >
                          <Check className="w-4 h-4 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <p className="text-lg font-semibold text-primary mb-4">
                      {service.price}
                    </p>
                    <Button variant="minimal" className="w-full group" asChild>
                      <Link to="/contact">
                        Get Quote
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Choose Your Package
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Flexible pricing options to suit businesses of all sizes
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {pricingTiers.map((tier) => (
                <motion.div
                  key={tier.name}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={clsx("relative", tier.popular && "scale-105")}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-gradient-violet text-secondary-foreground shadow-glow-violet">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <Card
                    className={clsx(
                      "p-8 h-full transition-all duration-300",
                      tier.popular
                        ? "border-secondary/40 shadow-glow-violet"
                        : "glass border-border/20"
                    )}
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {tier.price}
                      </div>
                      <p className="text-muted-foreground">{tier.description}</p>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Check className="w-5 h-5 text-primary mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant={tier.popular ? "hero" : "minimal"}
                      className="w-full"
                      asChild
                    >
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-surface relative overflow-hidden">
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
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss your requirements and create a custom solution
                that fits your needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Get Free Consultation</Link>
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
