import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, Users, Lightbulb } from "lucide-react";
import cslLogo from "@/assets/csl-logo.png";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-csl-hero">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent rounded-full blur-xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-secondary rounded-full blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-accent rounded-full blur-lg"></div>
      </div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-csl-overlay backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={cslLogo}
                alt="Conservation Science Lab Logo"
                className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
              />
              <div className="absolute -inset-4 bg-csl-logo opacity-20 blur-3xl rounded-full"></div>
            </div>
          </div>

          {/* Title with Gradient */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">
              Conservation Science Lab
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 leading-relaxed text-white/90">
            문화유산 보존을 위한 과학적 연구, 혁신, 그리고 협력을 통해<br />
            지속가능성과 문화적 가치를 추구합니다
          </p>
          
          {/* Key Features - Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="group bg-csl-glass backdrop-blur-md border border-csl-glass-border rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="bg-primary/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/30 transition-colors">
                <Microscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Scientific Research</h3>
              <p className="text-sm text-white/80">첨단 분석 기법을 통한 과학적 연구</p>
            </div>
            <div className="group bg-csl-glass backdrop-blur-md border border-csl-glass-border rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="bg-secondary/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-secondary/30 transition-colors">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Innovation</h3>
              <p className="text-sm text-white/80">최첨단 방법론과 혁신적 접근</p>
            </div>
            <div className="group bg-csl-glass backdrop-blur-md border border-csl-glass-border rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="bg-accent/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-accent/30 transition-colors">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Collaboration</h3>
              <p className="text-sm text-white/80">학제간 협력과 파트너십</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 shadow-csl-card transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg"
              onClick={() => scrollToSection("#team")}
            >
              연구진 소개
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/40 text-white bg-transparent hover:bg-white/10 backdrop-blur-md px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("#projects")}
            >
              연구 프로젝트
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;