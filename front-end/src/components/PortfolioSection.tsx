import { FaLink } from "react-icons/fa";
import Badge from "./common/badge";
import { Card, CardContent } from "./common/card";

export default function PortfolioSection() {

  const projects = [
  {
    title: "Easy Cell - Gerenciador de Ordens de Serviço",
    category: "Mobile & Backend",
    description: "Aplicativo Flutter com API REST em Java/Spring Boot para gerenciar ordens de serviço de assistência técnica, com login seguro, cálculo de lucro mensal e geração de PDFs automatizada.",
    image: "assets/img/easy-os.png",
    tags: ["Flutter", "Spring Boot", "PostgreSQL", "PDFBox", "Cloudinary"]
  },
  {
    title: "Drafter Master - Plataforma de E-Sports",
    category: "Fullstack / Cross-platform",
    description: "Plataforma para simulação de drafts do Mobile Legends, com Flutter web/desktop/mobile, login JWT, integração com Google Ads e scraper em Node.js para coleta de dados de personagens.",
    image: "assets/img/draft-master.png",
    tags: ["Flutter", "Node.js", "JWT", "Scraper", "Cross-platform"]
  },
  {
    title: "Agnus Dei - Backend de Gestão",
    category: "Backend",
    description: "Backend em Java/Spring Boot para gerenciamento de dados e automação de rede de 20 lojas, com endpoints CRUD, PDF automatizado e integração com Cloudinary, usando modelo KANBAN.",
    image: "assets/img/agnus.png",
    tags: ["Spring Boot", "JWT", "PDFBox", "Cloudinary", "OpenAPI"]
  },
  {
    title: "Zoé Express - Plataforma de Entregas",
    category: "Backend",
    description: "Desenvolvimento da API REST em Java/Spring Boot para plataforma de entregas, com cálculo de distância, precificação automática, geração de código de rastreio e monitoramento em tempo real.",
    image: "assets/img/zoe.png",
    tags: ["Spring Boot", "PostgreSQL", "Spring Security", "JUnit", "Hibernate"]
  },
  {
    title: "EasyBarcode - Leitor de código de barras",
    category: "Frontdnd",
    description: "Desenvolvimento do leitor de código de barras feito em Angular, ele lê os códigos de barras e envia para o computador via api feita em Java para digitação automática ou salvar os códigos em um CSV",
    image: "assets/img/barcode.png",
    tags: ["Spring Boot", "PostgreSQL", "Spring Security", "Angular", "Javascript"]
  }
];

  return (
    <section id="portfolio" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-neon/10 text-neon border-neon/20 mb-6 px-4 py-2">
            Projetos que realizei
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            MEUS PROJETOS
            <span className="block text-neon">
              E TODOS OS CLIENTES QUE JÁ ATENDI
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Aqui estão alguns dos meus projetos recentes que demonstram minhas
            habilidades em desenvolvimento backend, desenvolvimento frontend e
            criação de aplicativos móveis.
          </p>
        </div>

        <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">
                Meus projetos em <span className="text-neon">destaque</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <Card key={index}
                  className="bg-card/50 backdrop-blur-sm border-border hover:border-neon/30 transition-all duration-300 group overflow-hidden"
                  >
                    <div className="relative overflow-hidden">
                      <img src={project.image} alt={project.title} 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {/* <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <button className="w-12 h-12 bg-neon rounded-full flex items-center justify-center text-background hover:bg-neon/90 transition-colors">
                         <FaLink></FaLink>
                        </button>
                      </div> */}
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="border-neon/20 text-neon text-xs">
                          {project.category}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-semibold mb-3 group-hover:text-neon transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                         <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-neon/10 text-neon text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                    </CardContent>

                  </Card>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
}
