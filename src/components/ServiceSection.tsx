import Badge from "./common/badge";
import {
  FaMobileAlt,
  FaDocker,
  FaProjectDiagram,
  FaServer,
  FaUsers,
  FaReact,
} from "react-icons/fa";
import { Card, CardContent } from "./common/card";

export default function ServiceSection() {
  const services = [
    {
      icon: <FaServer size={42} color="#78ffb7" />,
      title: "Desenvolvimento Backend",
      description:
        "Crio APIs escaláveis e seguras com Java/Spring Boot e Node/Express, garantindo alta performance e integração confiável.",
    },
    {
      icon: <FaMobileAlt size={42} color="#78ffb7" />,
      title: "Desenvolvimento Mobile",
      description:
        "Desenvolvo aplicativos Flutter multiplataforma com arquitetura limpa, UX responsiva e suporte a sincronização offline.",
    },
    {
      icon: <FaDocker size={42} color="#78ffb7" />,
      title: "DevOps & Infraestrutura",
      description:
        "Configuro pipelines CI/CD, conteinerização com Docker e deploy em nuvem, otimizando tempo de entrega e confiabilidade.",
    },
    {
      icon: <FaProjectDiagram size={42} color="#78ffb7" />,
      title: "Arquitetura de Software",
      description:
        "Aplico princípios SOLID, Clean Architecture e TDD para garantir manutenibilidade, escalabilidade e redução de erros.",
    },
    {
      icon: <FaReact size={42} color="#78ffb7" />,
      title: "Desenvolvimento Web",
      description:
        "Construo aplicações web modernas e responsivas com React, priorizando performance, escalabilidade e excelente experiência do usuário.",
    },

    {
      icon: <FaUsers size={42} color="#78ffb7" />,
      title: "Metodologias Ágeis",
      description:
        "Trabalho com SCRUM e boas práticas de colaboração, garantindo entregas rápidas, comunicação clara e foco em resultados.",
    },
  ];

  return (
    <section id="#services" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-neon/10 text-neon border-neon/20 mb-6 px-4 py-2">
            O que eu faço de melhor
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            MEUS MELHORES <span className="text-neon">SERVIÇOS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ofereço soluções digitais em desenvolvimento de software, buscando
            criar experiências de qualidade enquanto inicio minha trajetória na
            área de programação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((services, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-neon/30 transition-all duration-300 group hover:shadow-lg hover:shadow-neon/10"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-neon/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neon/20">
                  {services.icon}
                </div>

                <h3 className="text-xl font-semibold mb-4 group-hover:text-neon transition-colors">
                  {services.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {services.description}
                </p>

                <div className="mt-6">
                  <button className="text-neon hover:text-neon/80 font-medium group flex items-center cursor-pointer">
                    Saiba mais
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
