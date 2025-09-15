import { useEffect, useState } from "react";
import Navigation from "./Navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-primary/95 backdrop-blur-md shadow-csl-card" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-csl-gradient rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">CSL</span>
            </div>
            <div className="text-primary-foreground">
              <h1 className="font-bold text-lg">Conservation Science Lab</h1>
              <p className="text-xs opacity-80">Cultural Heritage Preservation</p>
            </div>
          </div>

          {/* Navigation */}
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;