import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, Users, Lightbulb } from "lucide-react";
import heroImage from "@/assets/hero-lab.jpg";
import cslLogo from "@/assets/csl-logo.png";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Logo Integration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-csl-hero"></div>
        
        {/* Logo Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 opacity-20">
            <img
              src={cslLogo}
              alt="CSL Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute bottom-20 left-10 w-64 h-64 opacity-15 rotate-12">
            <img
              src={cslLogo}
              alt="CSL Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-csl-logo-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          {/* Logo and Title */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 mb-6 drop-shadow-lg">
              <img
                src={cslLogo}
                alt="Conservation Science Lab Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-csl-logo-gradient bg-clip-text text-transparent">
              Conservation Science Lab
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            Advancing cultural heritage preservation through scientific research, 
            innovation, and collaboration. Dedicated to sustainability and cultural value.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <Microscope className="w-12 h-12 mb-4 text-accent" />
              <h3 className="text-lg font-semibold mb-2">Scientific Research</h3>
              <p className="text-sm opacity-80">Advanced analytical techniques</p>
            </div>
            <div className="flex flex-col items-center">
              <Lightbulb className="w-12 h-12 mb-4 text-accent" />
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-sm opacity-80">Cutting-edge methodologies</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 mb-4 text-accent" />
              <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
              <p className="text-sm opacity-80">Interdisciplinary partnerships</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-csl-card transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection("#team")}
            >
              Meet Our Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
              onClick={() => scrollToSection("#projects")}
            >
              View Research
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;