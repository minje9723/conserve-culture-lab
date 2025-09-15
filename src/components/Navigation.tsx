import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  isScrolled: boolean;
}

const Navigation = ({ isScrolled }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "홈" },
    { href: "#team", label: "연구진" },
    { href: "#projects", label: "연구 프로젝트" },
    { href: "#achievements", label: "연구 성과" },
    { href: "#facilities", label: "연구 시설" },
    { href: "#gallery", label: "갤러리" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => scrollToSection(item.href)}
            className={`transition-colors duration-300 font-medium hover:scale-105 ${
              isScrolled 
                ? 'text-primary hover:text-secondary' 
                : 'text-white hover:text-accent'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile Navigation Button */}
      <Button
        variant="ghost"
        size="icon"
        className={`md:hidden transition-colors ${
          isScrolled 
            ? 'text-primary hover:bg-primary/10' 
            : 'text-white hover:bg-white/20'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-primary/10 md:hidden shadow-csl-card">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-6 py-3 text-primary hover:bg-primary/5 transition-colors duration-300 text-left font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;