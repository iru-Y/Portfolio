import { FaJava, FaLinux, FaReact } from "react-icons/fa";
import Badge from "./common/badge";
import Button from "./common/button";
import { FaFlutter } from "react-icons/fa6";
import { Card, CardContent } from "./common/card";
export default function AboutSection() {
  const programmingLanguages = [
    {
      icon: <FaJava size={32} color="#007396" />,
      name: "Java",
    },
    {
      icon: <FaFlutter size={32} color="#007396" />,
      name: "Flutter",
    },
    {
      icon: <FaLinux size={32} color="#007396" />,
      name: "Linux",
    },
    {
      icon: <FaReact size={32} color="#007396" />,
      name: "React",
    },
  ];

  return (
    <section id="about" className="">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="bg-neon/10 text-neon border-neon/20 mb-6 px-4 py-2">
              Sobre mim
            </Badge>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              MELHOR DESENVOLVEDOR
              <span className="block text-neon">FULLSTACK E MOBILE</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Desenvolvedor fullstack com 3 anos de experiência em projetos
              end-to-end, especializado em APIs escaláveis (Java/Spring bottom)
              e aplicativos móveis cross-platform (Flutter). Combino arquitetura
              limpa (SOLID, Clean Architecture) e práticas DevOps (Docker,
              CI/CD) para entregar soluções que reduzem erros em 30% e suportam
              100+ requisições/segundo.
            </p>

            <Button className="bg-neon text-background hover:bg-neon/90 font-medium px-8 py-3 rounded-full">
              Download CV
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-6">
          {programmingLanguages.map((programmingLanguage, index) => (
            <Card
              className="bg-card/50 backdrop-blur-sm border-border hover:border-neon/30 transition-all duration-300 group"
              key={index}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-neon/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-neon/20 transition-colors">
                  {programmingLanguage.icon}
                </div>
                <div className="text-3xl font-bold text-neon mb-2">{programmingLanguage.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
        
      </div>
    </section>
  );
}
