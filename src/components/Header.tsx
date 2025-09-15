import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import cslLogo from "@/assets/csl-logo.png";

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
          ? "bg-white/90 backdrop-blur-md shadow-csl-card border-b border-primary/10" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={cslLogo} 
              alt="CSL Logo" 
              className="w-12 h-12 object-contain"
            />
            <div className={`transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
              <h1 className="font-bold text-lg">Conservation Science Lab</h1>
              <p className="text-xs opacity-80">문화유산 보존 과학 연구실</p>
            </div>
          </div>

          {/* Navigation */}
          <Navigation isScrolled={isScrolled} />
        </div>
      </div>
    </header>
  );
};

export default Header;