import { useState } from "react";
import { FaMailBulk, FaMap, FaPhone } from "react-icons/fa";
import Badge from "./common/badge";
import { Card, CardContent } from "./common/card";
import { Input } from "./common/input";
import Button from "./common/button";
import { Send } from "lucide-react";
import { Textarea } from "./common/textArea";
import { sendContactForm } from "../domain/api";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await sendContactForm(formData);
      setStatus("Mensagem enviada com sucesso!");
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" }); // limpa o form
    } catch (err) {
      setStatus("Erro ao enviar mensagem, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaMailBulk className="w-5 h-5 text-neon" />,
      label: "Email",
      value: "yuri_matteus@hotmail.com",
      href: "mailto:yuri_matteus@hotmail.com",
    },
    {
      icon: <FaPhone className="w-5 h-5 text-neon" />,
      label: "Telefone",
      value: "+55 (99)99154-2276",
      href: "tel:+5599991542276",
    },
    {
      icon: <FaMap className="w-5 h-5 text-neon" />,
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
            Aqui estão meus contatos, pode me chamar diretamente no Whatsapp ou
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
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border">
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

          <div>
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">
                  Me mande uma mensagem
                </h3>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nome</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Telefone</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+55 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Assunto</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Gostei do seu portfólio"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Mensagem</label>
                    <Textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Me fale mais sobre seus projetos..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-neon text-background hover:bg-neon/90 py-3"
                  >
                    {loading ? "Enviando..." : <><Send className="w-4 h-4 mr-2" /> Enviar Mensagem</>}
                  </Button>
                </form>

                {status && (
                  <p className="mt-4 text-center text-sm text-muted-foreground">
                    {status}
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
