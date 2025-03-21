
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-charcoal-dark dark-gradient p-4">
      <div className="text-center glass-card p-8 max-w-lg w-full">
        <h1 className="text-5xl font-cormorant text-gold mb-4">404</h1>
        <p className="text-xl text-cream/80 mb-6">The page you're looking for has been archived or doesn't exist.</p>
        <Button asChild className="btn-primary inline-flex items-center">
          <a href="/">
            <ArrowLeft size={18} className="mr-2" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
