import { FaMailBulk, FaMap, FaPhone } from "react-icons/fa";
import Badge from "./common/badge";
import { Card, CardContent } from "./common/card";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: (
        <FaMailBulk className="w-5 h-5 text-neon" size={42} color="#78ffb7" />
      ),
      label: "Email",
      value: "yuri_matteus@hotmail.com",
      href: "mailto:yuri_matteus@hotmail.com",
    },
    {
      icon: <FaPhone className="w-5 h-5 text-neon" size={42} color="#78ffb7" />,
      label: "Telefone",
      value: "+55 (99)99154-2276",
      href: "tel:+5599991542276",
    },
    {
      icon: <FaMap className="w-5 h-5 text-neon" size={42} color="#78ffb7" />,
      label: "Localização",
      value: "Brasil",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-neon/10 text-neon border-neon/20 mb-6 px-4 py-2">
            Entre em Contato
          </Badge>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ENTRE EM CONTATO <span className="text-neon">HOJE</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Aqui estão meus contantos, pode me chamar diretamente no Whatsapp ou
            no Linkedin que responderei o mais rápido possível. Vamos marcar uma
            call?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8">Vamos trabalhar juntos!</h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Apaixonado por desenvolvimento e novas tecnologias, estou pronto
              para transformar ideias em soluções. Fale comigo!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border hover:border-neon/30 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-neon/10 rounded-full flex items-center justify-center mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        <a
                          href={info.href}
                          className="text-foreground hover:text-neon transition-colors font-medium"
                        >
                          {info.value}
                        </a>    
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
              

        </div>
      </div>
    </section>
  );
}
