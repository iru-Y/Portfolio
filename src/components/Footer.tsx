import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" size={42} color="#78ffb7" />,
      href: "#",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" size={42} color="#78ffb7" />,
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram className="w-5 h-5" size={42} color="#78ffb7" />,
      href: "#",
      label: "Instagram",
    },
    {
      icon: <FaMailBulk className="w-5 h-5" size={42} color="#78ffb7" />,
      href: "#",
      label: "Email",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-darker-surface border-t border-border">
      <div className="py-12 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-neon rounded-lg flex items-center justify-center mr-3">
                  <span className="text-background font-bold text-xl">Y</span>
                </div>
                <span className="text-foreground font-bold text-2xl">
                  Yuri Matthewus
                </span>
              </div>

              <p className="text-muted-foreground mb-6 max-w-md">
                Desenvolvedor apaixonado por criar experiências digitais que
                fazem a diferença. Vamos construir algo incrível juntos.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-dark-surface border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-neon hover:border-neon/30 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {["Home", "Sobre", "Serviços", "Portfólio", "Contato"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-muted-foreground hover:text-neon transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {[
                  "Desenvolvimento Web",
                  "Desenvolvimento Backend",
                  "Desenvolvimento Mobile",
                  "Arquitetura de Software",
                  "Consulting",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-muted-foreground hover:text-neon transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2025 Yuri Matthewus. Todos os direitos reservados. Feito com ❤️ usando React &
              Tailwind CSS.
            </p>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-neon rounded-full flex items-center justify-center text-background hover:bg-neon/90 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
