import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#team", label: "Research Members" },
    { href: "#projects", label: "Research Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#facilities", label: "Facilities" },
    { href: "#gallery", label: "Gallery" },
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
            className="text-primary-foreground hover:text-csl-text transition-colors duration-300 font-medium"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile Navigation Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-primary-foreground hover:bg-primary/20"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-primary border-t border-primary-foreground/20 md:hidden">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-6 py-3 text-primary-foreground hover:bg-primary-foreground/10 transition-colors duration-300 text-left font-medium"
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