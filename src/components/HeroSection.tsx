import { ArrowRight, Download, MessageCircle } from "lucide-react";
import Badge from "./common/badge";
import Button from "./common/button";
import { StatsGrid } from "./common/statsGrid";

export default function HeroSection() {

    const stats = [
    { value: "5", label: "Clientes Satisfeitos" },
    { value: "5", label: "Projetos Concluídos" },
    { value: "4", label: "Anos de Experiência" },
    { value: "3", label: "Linguagens de programação" },
  ];

  return (
    <section id="home" className="min-h-screen  overflow-hidden py-25">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-darker-surface to-background"></div>
      <div className="absolute top-20 right-10 w-32 h-32 border border-neon/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 border border-neon/20 rotate-45 animate-pulse"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge className="bg-neon/10 text-neon border-neon/20 mb-6 px-4 py-2">
              Olá, eu sou YURI MATTHEWUS
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Backend e fullstack
              <span className="block text-neon"> DEVELOPER</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Tenho 3 anos de experiência com Java, apps mobile com Flutter e
              frontend com React.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="bg-neon text-background hover:bg-neon/90 font-medium px-8 py-3 rounded-full">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>

              <Button
                variant="outline"
                className="border-neon text-neon hover:bg-neon hover:text-background px-8 py-3 rounded-full"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Vamos Conversar
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-neon/20 rounded-full blur-3xl scale-110"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-neon/30">
                <img
                  src="./assets/img/me1.png"
                  alt="Yuri Matthewus - Backend e fullstack developer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -top-6 -right-6 w-12 h-12 border-2 border-neon rounded-lg rotate-45 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 border border-neon/40 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

        <StatsGrid items={stats} className="mx-4 pt-12 md:pt-0"></StatsGrid>
         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about"><ArrowRight className="w-16 h-16 text-neon rotate-90" /></a>
      </div>
    </section>
  );
}
