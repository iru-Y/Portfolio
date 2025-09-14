import Badge from "./common/badge";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen  overflow-hidden py-25"
    >
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
                Tenho 3 anos de experiência com Java, apps mobile com Flutter e frontend com Angular 15+.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
