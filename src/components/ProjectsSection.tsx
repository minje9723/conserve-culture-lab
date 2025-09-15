import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  status: "ongoing" | "completed";
  duration: string;
  team: string[];
  keywords: string[];
  image?: string;
}

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Digital Documentation of Medieval Manuscripts",
      description: "Advanced imaging and spectroscopic analysis of illuminated manuscripts to understand historical pigments and deterioration patterns.",
      category: "Digital Heritage",
      status: "ongoing",
      duration: "2023-2025",
      team: ["Dr. Sarah Chen", "Emma Thompson"],
      keywords: ["Hyperspectral Imaging", "Pigment Analysis", "Medieval Art", "Digital Preservation"]
    },
    {
      id: 2,
      title: "Stone Conservation at Heritage Sites",
      description: "Investigation of weathering mechanisms and development of sustainable conservation treatments for historic stone architecture.",
      category: "Materials Science",
      status: "ongoing",
      duration: "2024-2026",
      team: ["Dr. Michael Rodriguez", "Dr. James Liu"],
      keywords: ["Stone Conservation", "Weathering", "Heritage Architecture", "Sustainable Treatment"]
    },
    {
      id: 3,
      title: "X-ray Analysis of Ancient Ceramics",
      description: "Comprehensive study of ceramic production techniques and trade patterns in ancient civilizations using non-destructive X-ray methods.",
      category: "Archaeological Science",
      status: "completed",
      duration: "2022-2023",
      team: ["Dr. James Liu", "Dr. Sarah Chen"],
      keywords: ["Ceramics", "X-ray Fluorescence", "Archaeological Analysis", "Ancient Technology"]
    },
    {
      id: 4,
      title: "Climate Change Impact on Museum Collections",
      description: "Assessment of environmental risks and development of adaptive conservation strategies for museum artifacts.",
      category: "Environmental Studies",
      status: "ongoing",
      duration: "2024-2027",
      team: ["Dr. Sarah Chen", "Emma Thompson", "Dr. Michael Rodriguez"],
      keywords: ["Climate Change", "Museum Collections", "Risk Assessment", "Preventive Conservation"]
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "Digital Heritage", label: "Digital Heritage" },
    { id: "Materials Science", label: "Materials Science" },
    { id: "Archaeological Science", label: "Archaeological Science" },
    { id: "Environmental Studies", label: "Environmental Studies" }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Research Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our interdisciplinary research projects advance the field of conservation science 
            through innovative methodologies and collaborative approaches.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-csl-card"
                  : "hover:bg-primary/10 hover:border-primary"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden shadow-csl-card hover:shadow-csl-hover transition-all duration-300 transform hover:scale-[1.02] border-0"
            >
              <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                <div className="flex items-start justify-between mb-3">
                  <Badge 
                    variant={project.status === "ongoing" ? "default" : "secondary"}
                    className={project.status === "ongoing" ? "bg-accent text-accent-foreground" : ""}
                  >
                    {project.status === "ongoing" ? "Ongoing" : "Completed"}
                  </Badge>
                  <Badge variant="outline" className="border-primary/20 text-primary">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-primary leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Project Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 mt-0.5" />
                    <span>{project.team.join(", ")}</span>
                  </div>
                </div>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.keywords.map((keyword, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors text-xs"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;