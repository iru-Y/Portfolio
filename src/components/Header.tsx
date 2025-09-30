import { useState, useEffect } from "react";
import Button from "./common/button";
import { X, Menu } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-neon rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-xl">Y</span>
            </div>
            <span className="ml-3 text-foreground font-semibold text-xl">
              Yuri
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <a
                className="text-muted-foreground hover:text-neon transition-colors duration-300 relative group text-sm font-medium"
                key={item.name}
                href={item.href}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex ">
            <Button className="bg-neon text-background hover:bg-neon/90 font-medium px-6 py-2">
              <a
                href="https://wa.me/5599991542276?text=Ol%C3%A1%20Yuri%2C%20vi%20seu%20portf%C3%B3lio!"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contato
              </a>
            </Button>
          </div>
          <button
            className="md:hidden text-foreground p-2 hover:text-neon transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-4 right-4 bg-card/95 backdrop-blur-md border border-border rounded-lg shadow-xl mt-2">
              <nav className="flex flex-col p-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-neon transition-colors duration-300 py-3 text-center border-b border-border/50 last:border-b-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="bg-neon text-background hover:bg-neon/90 font-medium mt-4 w-full">
                  Contato
                </Button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
