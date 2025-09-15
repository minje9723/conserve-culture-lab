import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import heroImage from "@/assets/hero-lab.jpg";
import fieldworkImage from "@/assets/fieldwork-gallery.jpg";
import xrfImage from "@/assets/xrf-equipment.jpg";
import semImage from "@/assets/sem-equipment.jpg";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
  date: string;
}

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const images: GalleryImage[] = [
    {
      id: 1,
      src: heroImage,
      title: "Main Laboratory",
      description: "State-of-the-art conservation science laboratory with advanced analytical equipment",
      category: "Lab Environment",
      date: "2024"
    },
    {
      id: 2,
      src: fieldworkImage,
      title: "Heritage Site Documentation",
      description: "Team conducting on-site analysis and documentation at historical monument",
      category: "Fieldwork",
      date: "2024"
    },
    {
      id: 3,
      src: xrfImage,
      title: "XRF Analysis Session",
      description: "Portable X-ray fluorescence analysis of historical pigments",
      category: "Research Activities",
      date: "2024"
    },
    {
      id: 4,
      src: semImage,
      title: "Electron Microscopy",
      description: "High-resolution scanning electron microscope in operation",
      category: "Lab Environment",
      date: "2024"
    },
    {
      id: 5,
      src: heroImage,
      title: "Team Collaboration",
      description: "Interdisciplinary research meeting and project planning session",
      category: "Events",
      date: "2024"
    },
    {
      id: 6,
      src: fieldworkImage,
      title: "Archaeological Site Work",
      description: "Digital documentation and analysis at archaeological excavation",
      category: "Fieldwork",
      date: "2023"
    }
  ];

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "Lab Environment", label: "Lab Environment" },
    { id: "Fieldwork", label: "Fieldwork" },
    { id: "Research Activities", label: "Research Activities" },
    { id: "Events", label: "Events" }
  ];

  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(image => image.category === activeCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-csl-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            갤러리
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            연구 활동, 실험실 환경, 현장조사 및 협력 행사의 
            시각적 기록을 담고 있습니다.
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

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <Card 
              key={image.id} 
              className="overflow-hidden shadow-csl-card hover:shadow-csl-hover transition-all duration-300 transform hover:scale-[1.02] border-0 cursor-pointer group"
              onClick={() => openLightbox(image)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-black/50 text-white border-0">
                    {image.date}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <Badge variant="outline" className="border-primary/20 text-primary mb-3">
                    {image.category}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {image.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {image.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-5xl max-h-full">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={() => navigateImage('prev')}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={() => navigateImage('next')}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-6 rounded-b-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
                    <p className="text-gray-300">{selectedImage.description}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                      {selectedImage.category}
                    </Badge>
                    <span className="text-sm text-gray-400">{selectedImage.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;