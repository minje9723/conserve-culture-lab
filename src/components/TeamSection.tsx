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
      name: "김연구 교수",
      position: "연구실 디렉터",
      image: directorImage,
      expertise: ["문화유산과학", "재료분석", "X선 스펙트로스코피"],
      email: "kim.research@csl.edu",
      bio: "문화유산 보존 분야에서 15년 이상의 경험을 가진 선도적인 연구자입니다."
    },
    {
      name: "이분석 박사",
      position: "박사후연구원", 
      image: postdocImage,
      expertise: ["디지털 문서화", "3D 스캐닝", "이미징 기술"],
      email: "lee.analysis@csl.edu",
      bio: "고고학 및 예술 유산 문서화를 위한 첨단 이미징 기술 전문가입니다."
    },
    {
      name: "박보존 석사과정",
      position: "대학원 연구조교",
      image: directorImage, // Using placeholder
      expertise: ["현미경 분석", "시료 준비", "데이터 분석"],
      email: "park.conservation@csl.edu",
      bio: "역사적 재료의 미세 분석 및 열화 과정 연구에 집중하는 박사과정 학생입니다."
    },
    {
      name: "정과학 박사",
      position: "연구원",
      image: postdocImage, // Using placeholder
      expertise: ["화학분석", "스펙트로스코피", "보존처리"],
      email: "jung.science@csl.edu",
      bio: "미술품 및 유물 보존을 위한 분석 화학 응용 전문가입니다."
    }
  ];

  return (
    <section id="team" className="py-20 bg-csl-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            연구진 소개
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            학제간 팀은 보존과학, 재료분석, 문화유산 보존 분야의 전문성을 결합합니다.
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
                      <span className="text-sm">연락하기</span>
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