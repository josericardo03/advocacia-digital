import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contato = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setForm({ name: "", email: "", phone: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <section className="bg-navy-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.2em] uppercase text-sm font-semibold mb-2">Fale conosco</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-card">Contato</h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Envie sua mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Nome *</label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Seu nome completo" className="bg-card" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">E-mail *</label>
                  <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="seu@email.com" className="bg-card" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Telefone</label>
                  <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(11) 99999-9999" className="bg-card" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Mensagem *</label>
                  <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Descreva brevemente sua necessidade jurídica..." rows={5} className="bg-card" />
                </div>
                <Button type="submit" disabled={loading} className="bg-gold text-primary hover:bg-gold-dark font-semibold w-full">
                  <Send className="w-4 h-4 mr-2" />
                  {loading ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Informações de Contato</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Endereço</p>
                      <p className="text-muted-foreground text-sm">Av. Paulista, 1000, Sala 501<br />São Paulo - SP, 01310-100</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Telefone / WhatsApp</p>
                      <p className="text-muted-foreground text-sm">(11) 99999-9999</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">E-mail</p>
                      <p className="text-muted-foreground text-sm">contato@silvaadvocacia.com.br</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Localização</h3>
                <div className="rounded-lg overflow-hidden border border-border">
                  <iframe
                    title="Localização do escritório"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1598247364!2d-46.65390868502196!3d-23.56399098468041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c0776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <a
                href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 text-card font-semibold mt-4">
                  <Phone className="w-4 h-4 mr-2" />
                  Fale pelo WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;
