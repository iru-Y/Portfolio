import Badge from "./common/badge";
import Button from "./common/button";

export default function AboutSection() {
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
              end-to-end, especializado em APIs escaláveis (Java/Spring bottom) e aplicativos móveis cross-platform (Flutter).
              Combino arquitetura limpa (SOLID, Clean Architecture) e práticas
              DevOps (Docker, CI/CD) para entregar soluções que reduzem erros em
              30% e suportam 100+ requisições/segundo.
            </p>

             <Button className="bg-neon text-background hover:bg-neon/90 font-medium px-8 py-3 rounded-full">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
