import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | 5D Creations</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to 5D Creations homepage." />
      </Helmet>

      <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="text-center max-w-md mx-auto px-4 relative z-10">
          <div className="w-24 h-24 bg-gradient-cyan rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-glow-cyan">
            <span className="text-4xl font-bold text-primary-foreground">404</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 bg-gradient-cyan bg-clip-text text-transparent">
            Page Not Found
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" asChild>
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button variant="minimal" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;