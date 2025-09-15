import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, ExternalLink } from "lucide-react";
import directorImage from "@/assets/director-portrait.jpg";
import postdocImage from "@/assets/postdoc-portrait.jpg";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  expertise: string[];
  email: string;
  bio: string;
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Sarah Chen",
      position: "Director & Principal Investigator",
      image: directorImage,
      expertise: ["Heritage Science", "Materials Analysis", "X-ray Spectroscopy"],
      email: "sarah.chen@csl.edu",
      bio: "Leading researcher in conservation science with 15+ years of experience in cultural heritage preservation."
    },
    {
      name: "Dr. Michael Rodriguez",
      position: "Postdoctoral Research Fellow",
      image: postdocImage,
      expertise: ["Digital Documentation", "3D Scanning", "Imaging Techniques"],
      email: "m.rodriguez@csl.edu",
      bio: "Specialist in advanced imaging technologies for archaeological and artistic heritage documentation."
    },
    {
      name: "Emma Thompson",
      position: "Graduate Research Assistant",
      image: directorImage, // Using placeholder
      expertise: ["Microscopy", "Sample Preparation", "Data Analysis"],
      email: "e.thompson@csl.edu",
      bio: "PhD candidate focusing on microscopic analysis of historical materials and degradation processes."
    },
    {
      name: "Dr. James Liu",
      position: "Research Scientist",
      image: postdocImage, // Using placeholder
      expertise: ["Chemical Analysis", "Spectroscopy", "Conservation Treatment"],
      email: "j.liu@csl.edu",
      bio: "Expert in analytical chemistry applications for artwork and artifact conservation."
    }
  ];

  return (
    <section id="team" className="py-20 bg-csl-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Research Members
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our interdisciplinary team combines expertise in conservation science, 
            materials analysis, and cultural heritage preservation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="overflow-hidden shadow-csl-card hover:shadow-csl-hover transition-all duration-300 transform hover:scale-[1.02] border-0"
            >
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Contact */}
                  <div className="flex items-center justify-between">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      <span className="text-sm">Contact</span>
                    </a>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;