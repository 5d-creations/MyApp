import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "Learn how to structure large React applications using TypeScript, modern patterns, and best practices for maintainable code.",
    content: "In this comprehensive guide, we'll explore the essential patterns and practices for building scalable React applications...",
    author: "5D Tech",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "TypeScript", "Architecture"],
    featured: true,
    image: "/assets/react.png"
  },
  {
    id: 2,
    title: "Django REST Framework: Advanced API Patterns",
    excerpt: "Deep dive into advanced Django REST Framework patterns for building robust, secure, and scalable APIs.",
    content: "Django REST Framework provides powerful tools for API development. Let's explore advanced patterns...",
    author: "5D Tech",
    publishedAt: "2024-01-10",
    readTime: "12 min read",
    tags: ["Django", "API", "Python"],
    featured: true,
    image: "/assets/django.png"
  },
  {
    id: 3,
    title: "The Art of Modern Web Design: Glassmorphism & Beyond",
    excerpt: "Explore contemporary design trends including glassmorphism, neumorphism, and creating engaging user interfaces.",
    content: "Modern web design is constantly evolving. Today we'll explore the latest trends in UI design...",
    author: "5D Tech",
    publishedAt: "2024-01-05",
    readTime: "6 min read",
    tags: ["Design", "UI/UX", "Trends"],
    featured: false,
    image: "/assets/ui.png"
  },
  {
    id: 4,
    title: "Performance Optimization: Making Web Apps Lightning Fast",
    excerpt: "Comprehensive guide to web performance optimization, from code splitting to CDN implementation.",
    content: "Performance is crucial for user experience and SEO. Let's dive into optimization techniques...",
    author: "5D Tech",
    publishedAt: "2023-12-28",
    readTime: "10 min read",
    tags: ["Performance", "Web Development", "SEO"],
    featured: false,
    image: "/assets/web.png"
  },
  {
    id: 5,
    title: "Cloud Deployment Strategies for Modern Web Applications",
    excerpt: "Compare different cloud deployment options and learn best practices for deploying React and Django applications.",
    content: "Choosing the right deployment strategy is crucial for application success. We'll compare various options...",
    author: "5D Tech",
    publishedAt: "2023-12-20",
    readTime: "9 min read",
    tags: ["Cloud", "Deployment", "DevOps"],
    featured: false,
    image: "/assets/cloud.png"
  },
  {
    id: 6,
    title: "Authentication Best Practices in 2024",
    excerpt: "Modern authentication patterns including JWT, OAuth, and security considerations for web applications.",
    content: "Security is paramount in modern applications. Let's explore authentication best practices...",
    author: "5D Tech",
    publishedAt: "2023-12-15",
    readTime: "11 min read",
    tags: ["Security", "Authentication", "JWT"],
    featured: false,
    image: "/assets/security.png"
  }
];

const categories = ["All", "React", "Django", "Design", "Performance", "Security", "Cloud"];

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog | 5D Tech - Web Development Insights & Tutorials</title>
        <meta name="description" content="Read about web development, React, Django, UI/UX design, and modern development practices. Learn from real-world project experiences and technical insights." />
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
                <Badge className="mb-4">Our Blog</Badge>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Insights, Tutorials &{" "}
                <span className="bg-gradient-violet bg-clip-text text-transparent">
                  Best Practices
                </span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                Deep dives into modern web development, design patterns, and lessons learned 
                from building real-world applications.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
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
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
              >
                Featured Articles
              </motion.h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    variants={fadeInUp}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group"
                  >
                    <Card className="overflow-hidden glass border-border/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-cyan h-full">
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge>Featured</Badge>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-3 leading-tight">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(post.publishedAt).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {post.readTime}
                            </div>
                          </div>
                        </div>
                        
                        <Button variant="minimal" className="group w-full">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* All Posts */}
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
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  All Articles
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Explore our complete collection of tutorials, insights, and technical deep-dives
                </p>
              </motion.div>

              {/* Categories Filter */}
              <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "hero" : "minimal"}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </motion.div>

              <motion.div
                variants={{
                  animate: {
                    transition: { staggerChildren: 0.1 }
                  }
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {blogPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    variants={fadeInUp}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group"
                  >
                    <Card className="overflow-hidden glass border-border/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-cyan h-full">
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <h3 className="text-lg font-semibold mb-2 leading-tight">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        
                        <Button variant="minimal" size="sm" className="w-full group">
                          Read Article
                          <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter CTA */}
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
                Stay Updated
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get the latest articles, tutorials, and insights delivered directly to your inbox. 
                Join our community of developers and designers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="hero">Subscribe</Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}