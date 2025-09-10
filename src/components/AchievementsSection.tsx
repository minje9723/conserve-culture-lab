import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Award, Presentation, FileText, ExternalLink } from "lucide-react";

interface Achievement {
  id: number;
  title: string;
  type: "publication" | "award" | "presentation" | "patent";
  year: number;
  authors: string[];
  venue?: string;
  description: string;
  impact?: string;
}

const AchievementsSection = () => {
  const [activeType, setActiveType] = useState("all");

  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Non-destructive Analysis of Historical Pigments Using Portable XRF",
      type: "publication",
      year: 2024,
      authors: ["Chen, S.", "Rodriguez, M.", "Liu, J."],
      venue: "Journal of Cultural Heritage",
      description: "Comprehensive study on portable XRF applications for in-situ pigment analysis in medieval manuscripts.",
      impact: "Cited 45 times"
    },
    {
      id: 2,
      title: "Excellence in Heritage Science Research Award",
      type: "award",
      year: 2023,
      authors: ["Dr. Sarah Chen"],
      venue: "International Institute for Conservation",
      description: "Recognition for outstanding contributions to the advancement of conservation science methodologies."
    },
    {
      id: 3,
      title: "Digital Documentation Methods for Archaeological Sites",
      type: "presentation",
      year: 2024,
      authors: ["Rodriguez, M.", "Thompson, E."],
      venue: "International Conference on Cultural Heritage",
      description: "Keynote presentation on innovative 3D scanning and digital preservation techniques."
    },
    {
      id: 4,
      title: "Sustainable Stone Conservation Method",
      type: "patent",
      year: 2023,
      authors: ["Liu, J.", "Chen, S."],
      venue: "US Patent Office",
      description: "Novel bio-based consolidation treatment for weathered limestone in historic buildings."
    },
    {
      id: 5,
      title: "Machine Learning Applications in Artwork Authentication",
      type: "publication",
      year: 2023,
      authors: ["Thompson, E.", "Chen, S.", "Rodriguez, M."],
      venue: "Digital Applications in Archaeology",
      description: "Development of AI-based methods for detecting art forgeries using multispectral imaging data.",
      impact: "Cited 32 times"
    },
    {
      id: 6,
      title: "Young Researcher Award in Conservation Science",
      type: "award",
      year: 2024,
      authors: ["Emma Thompson"],
      venue: "European Association for Conservation",
      description: "Outstanding research achievement in the application of advanced imaging techniques."
    }
  ];

  const achievementTypes = [
    { id: "all", label: "All Achievements", icon: FileText },
    { id: "publication", label: "Publications", icon: BookOpen },
    { id: "award", label: "Awards", icon: Award },
    { id: "presentation", label: "Presentations", icon: Presentation },
    { id: "patent", label: "Patents", icon: FileText }
  ];

  const filteredAchievements = activeType === "all" 
    ? achievements 
    : achievements.filter(achievement => achievement.type === activeType);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "publication": return <BookOpen className="w-5 h-5" />;
      case "award": return <Award className="w-5 h-5" />;
      case "presentation": return <Presentation className="w-5 h-5" />;
      case "patent": return <FileText className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "publication": return "bg-primary/10 text-primary border-primary/20";
      case "award": return "bg-accent/10 text-accent-foreground border-accent/20";
      case "presentation": return "bg-secondary/10 text-secondary-foreground border-secondary/20";
      case "patent": return "bg-muted text-muted-foreground border-muted/20";
      default: return "bg-muted text-muted-foreground border-muted/20";
    }
  };

  return (
    <section id="achievements" className="py-20 bg-csl-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Research Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our research outputs demonstrate scientific excellence and meaningful contributions 
            to the field of conservation science and cultural heritage preservation.
          </p>
        </div>

        {/* Type Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {achievementTypes.map((type) => {
            const IconComponent = type.icon;
            return (
              <Button
                key={type.id}
                variant={activeType === type.id ? "default" : "outline"}
                onClick={() => setActiveType(type.id)}
                className={`transition-all duration-300 ${
                  activeType === type.id
                    ? "bg-primary text-primary-foreground shadow-csl-card"
                    : "hover:bg-primary/10 hover:border-primary"
                }`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {type.label}
              </Button>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredAchievements.map((achievement) => (
            <Card 
              key={achievement.id} 
              className="overflow-hidden shadow-csl-card hover:shadow-csl-hover transition-all duration-300 border-0"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="text-primary">
                      {getTypeIcon(achievement.type)}
                    </div>
                    <Badge 
                      variant="outline" 
                      className={getTypeColor(achievement.type)}
                    >
                      {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                    </Badge>
                  </div>
                  <Badge variant="secondary" className="bg-muted/50 text-muted-foreground">
                    {achievement.year}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-primary leading-tight">
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Authors:</span> {achievement.authors.join(", ")}
                  </p>
                  
                  {achievement.venue && (
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Venue:</span> {achievement.venue}
                    </p>
                  )}
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  {achievement.impact && (
                    <div className="flex items-center justify-between pt-2">
                      <Badge variant="outline" className="bg-accent/10 text-accent-foreground border-accent/20">
                        {achievement.impact}
                      </Badge>
                      <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;