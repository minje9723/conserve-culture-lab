import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import GallerySection from "@/components/GallerySection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TeamSection />
        <ProjectsSection />
        <AchievementsSection />
        <FacilitiesSection />
        <GallerySection />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-csl-gradient rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">CSL</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Conservation Science Lab</h3>
                  <p className="text-sm opacity-80">Cultural Heritage Preservation</p>
                </div>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                Advancing conservation science through research, innovation, and collaboration.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p>123 Research Drive</p>
                <p>University Campus</p>
                <p>Email: info@csl.edu</p>
                <p>Phone: (555) 123-4567</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p>Research Publications</p>
                <p>Equipment Booking</p>
                <p>Collaboration Opportunities</p>
                <p>Lab Safety Guidelines</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-80">
              © 2024 Conservation Science Lab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
