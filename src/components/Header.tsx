import { useState, useEffect } from "react";
import Button from "./common/button";

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
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
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
              CONTATO
            </Button>

          <button className="md:hidden text-foreground p-2 hover:text-neon transition-colors"
          onClick={()=> setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/> }
          </button>
          </div>
        </div>
      </div>
    </header>
  );
}
