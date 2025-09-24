import Badge from "./common/badge";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-neon/10 text-neon border-neon/20 mb-6 px-4 py-2">
            Projetos que realizei
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Meus projetos{" "}
            <span className="block text-neon">
              e todos os clientes que já atendi
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
            

        </div>
      </div>
    </section>
  );
}
