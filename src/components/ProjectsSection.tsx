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
      title: "중세 필사본의 디지털 문서화",
      description: "조명 필사본의 첨단 이미징 및 분광학적 분석을 통한 역사적 안료와 열화 패턴 연구",
      category: "디지털 문화유산",
      status: "ongoing",
      duration: "2023-2025",
      team: ["김연구 교수", "박보존 석사과정"],
      keywords: ["하이퍼스펙트럴 이미징", "안료 분석", "중세 미술", "디지털 보존"]
    },
    {
      id: 2,
      title: "문화유산 유적지 석재 보존",
      description: "역사적 석조 건축물의 풍화 메커니즘 조사 및 지속가능한 보존 처리법 개발",
      category: "재료과학",
      status: "ongoing",
      duration: "2024-2026", 
      team: ["이분석 박사", "정과학 박사"],
      keywords: ["석재 보존", "풍화", "문화유산 건축", "지속가능한 처리"]
    },
    {
      id: 3,
      title: "고대 도자기의 X선 분석",
      description: "비파괴 X선 방법을 이용한 고대 문명의 도자기 제작 기법 및 교역 패턴에 대한 종합적 연구",
      category: "고고과학",
      status: "completed",
      duration: "2022-2023",
      team: ["정과학 박사", "김연구 교수"],
      keywords: ["도자기", "X선 형광", "고고학적 분석", "고대 기술"]
    },
    {
      id: 4,
      title: "박물관 소장품에 대한 기후변화 영향",
      description: "박물관 유물에 대한 환경 위험 평가 및 적응적 보존 전략 개발",
      category: "환경연구",
      status: "ongoing",
      duration: "2024-2027",
      team: ["김연구 교수", "박보존 석사과정", "이분석 박사"],
      keywords: ["기후변화", "박물관 소장품", "위험 평가", "예방적 보존"]
    }
  ];

  const categories = [
    { id: "all", label: "전체 프로젝트" },
    { id: "디지털 문화유산", label: "디지털 문화유산" },
    { id: "재료과학", label: "재료과학" },
    { id: "고고과학", label: "고고과학" },
    { id: "환경연구", label: "환경연구" }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            연구 프로젝트
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            학제간 연구 프로젝트는 혁신적인 방법론과 협력적 접근을 통해
            보존과학 분야의 발전을 이끌어갑니다.
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
                    {project.status === "ongoing" ? "진행중" : "완료"}
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
                  자세히 보기
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