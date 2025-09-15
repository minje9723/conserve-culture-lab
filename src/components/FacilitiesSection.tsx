import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Eye, Settings, Calendar } from "lucide-react";
import xrfImage from "@/assets/xrf-equipment.jpg";
import semImage from "@/assets/sem-equipment.jpg";

interface Equipment {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  specifications: string[];
  applications: string[];
  availability: "available" | "in-use" | "maintenance";
}

const FacilitiesSection = () => {
  const equipment: Equipment[] = [
    {
      id: 1,
      name: "Portable X-ray Fluorescence Spectrometer",
      category: "Analytical Equipment",
      image: xrfImage,
      description: "High-resolution portable XRF system for non-destructive elemental analysis of artworks and artifacts.",
      specifications: [
        "Detection range: Mg to U",
        "Resolution: <150 eV FWHM",
        "Analysis time: 1-60 seconds",
        "Weight: 1.5 kg"
      ],
      applications: [
        "Pigment identification",
        "Metal composition analysis",
        "Provenance studies",
        "Authentication verification"
      ],
      availability: "available"
    },
    {
      id: 2,
      name: "Scanning Electron Microscope",
      category: "Imaging Equipment",
      image: semImage,
      description: "High-resolution SEM with EDS capabilities for detailed morphological and compositional analysis.",
      specifications: [
        "Resolution: 1.0 nm at 15 kV",
        "Magnification: 10x to 500,000x",
        "Acceleration voltage: 0.5-30 kV",
        "EDS detector: Silicon drift detector"
      ],
      applications: [
        "Microstructure analysis",
        "Surface morphology",
        "Elemental mapping",
        "Deterioration assessment"
      ],
      availability: "in-use"
    },
    {
      id: 3,
      name: "Fourier Transform Infrared Spectrometer",
      category: "Analytical Equipment",
      image: xrfImage, // Using placeholder
      description: "Advanced FTIR system with ATR and microscopy attachments for molecular identification.",
      specifications: [
        "Spectral range: 4000-400 cm⁻¹",
        "Resolution: 0.25 cm⁻¹",
        "ATR crystal: Diamond",
        "Microscopy: 15x objective"
      ],
      applications: [
        "Organic material identification",
        "Binding medium analysis",
        "Degradation product analysis",
        "Conservation treatment monitoring"
      ],
      availability: "available"
    },
    {
      id: 4,
      name: "3D Digital Scanner",
      category: "Documentation Equipment",
      image: semImage, // Using placeholder
      description: "High-precision structured light scanner for detailed 3D documentation of artifacts.",
      specifications: [
        "Accuracy: up to 0.05 mm",
        "Resolution: 0.1 mm",
        "Scan volume: 100x80x80 mm",
        "Color capture: 24-bit RGB"
      ],
      applications: [
        "Digital archiving",
        "Condition documentation",
        "Virtual restoration",
        "Research visualization"
      ],
      availability: "maintenance"
    }
  ];

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "available": return "bg-green-100 text-green-800 border-green-200";
      case "in-use": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "maintenance": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getAvailabilityIcon = (availability: string) => {
    switch (availability) {
      case "available": return <Zap className="w-4 h-4" />;
      case "in-use": return <Eye className="w-4 h-4" />;
      case "maintenance": return <Settings className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  return (
    <section id="facilities" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            연구 시설 및 장비
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            보존과학 및 문화유산 분석의 첨단 연구를 지원하는 
            최첨단 장비와 시설을 보유하고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {equipment.map((item) => (
            <Card 
              key={item.id} 
              className="overflow-hidden shadow-csl-card hover:shadow-csl-hover transition-all duration-300 border-0"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline" className="border-primary/20 text-primary">
                    {item.category}
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className={`${getAvailabilityColor(item.availability)} flex items-center gap-1`}
                  >
                    {getAvailabilityIcon(item.availability)}
                    {item.availability.charAt(0).toUpperCase() + item.availability.slice(1).replace('-', ' ')}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-primary leading-tight">
                  {item.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Specifications */}
                <div>
                  <h4 className="font-semibold text-primary mb-3">Technical Specifications</h4>
                  <div className="space-y-1">
                    {item.specifications.map((spec, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div>
                  <h4 className="font-semibold text-primary mb-3">Primary Applications</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.applications.map((app, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors text-xs"
                      >
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  disabled={item.availability !== "available"}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.availability === "available" ? "Request Booking" : "Currently Unavailable"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;