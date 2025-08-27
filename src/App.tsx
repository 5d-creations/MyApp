import { useState, useEffect, Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Preloader from "./components/layout/Preloader";
import { AnimatePresence, motion } from "framer-motion";

// ✅ React Query instance
const queryClient = new QueryClient();

// Lazy-loaded pages (SEO-friendly when hydrated + faster performance)
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AnimatePresence mode="wait">
              {loading ? (
                <Preloader key="preloader" loading={loading} />
              ) : (
                <motion.div
                  key="app"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                  className="min-h-screen bg-background text-foreground"
                >
                  {/* ✅ Global SEO tags */}
                  <Helmet>
                    <title>5D Creations | Modern Web Development & Design</title>
                    <meta
                      name="description"
                      content="Welcome to 5D Creation — a modern creative web development, Design and innovative digital services."
                    />
                    <meta name="robots" content="index, follow" />
                    <link rel="canonical" href="https://www.5dcreations.com/" />

                    {/* Open Graph / Social */}
                    <meta property="og:title" content="5D Creations" />
                    <meta
                      property="og:description"
                      content="Explore services, projects, and digital creations from 5D Creations."
                    />
                    <meta
                      property="og:image"
                      content="https://www.5dcreations.com/preview.jpg"
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.5dcreations.com/" />

                    {/* Twitter */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="5D Creations" />
                    <meta
                      name="twitter:description"
                      content="Discover creative works, services, and portfolio from 5D Creation."
                    />
                    <meta
                      name="twitter:image"
                      content="https://www.5dcreations.com/preview.jpg"
                    />

                    {/* Structured Data Example */}
                    <script type="application/ld+json">{`
                      {
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "5D Creations",
                        "url": "https://www.5dcreations.com",
                        "author": {
                          "@type": "Organization",
                          "name": "5D Creations"
                        }
                      }
                    `}</script>
                  </Helmet>

                  <Navbar />
                  <main role="main">
                    <Suspense fallback={<Preloader loading={true} />}>
                      <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />
                </motion.div>
              )}
            </AnimatePresence>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
