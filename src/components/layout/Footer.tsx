import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center">
                <span className="font-heading text-gold font-bold text-lg">
                  S
                </span>
              </div>
              <div>
                <span className="font-heading text-lg font-bold">
                  Maciel & Associados
                </span>
                <span className="block text-xs text-gold tracking-[0.2em] uppercase">
                  Advocacia
                </span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Compromisso com a excelência jurídica e a defesa dos direitos dos
              nossos clientes há mais de 20 anos.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-gold font-semibold mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Início", path: "/" },
                { label: "Sobre Nós", path: "/sobre" },
                { label: "Áreas de Atuação", path: "/areas" },
                { label: "Advogados", path: "/advogados" },
                { label: "Blog", path: "/blog" },
                { label: "Contato", path: "/contato" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-gold font-semibold mb-4">
              Áreas de Atuação
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Direito Civil</li>
              <li>Direito Trabalhista</li>
              <li>Direito Previdenciário</li>
              <li>Direito Empresarial</li>
              <li>Direito de Família</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-gold font-semibold mb-4">
              Contato
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                Av. Paulista, 1000, Sala 501
                <br />
                São Paulo - SP, 01310-100
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                contato@Macieladvocacia.com.br
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-light/30 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>
            © {new Date().getFullYear()} Maciel & Associados Advocacia. Todos os
            direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link
              to="/privacidade"
              className="hover:text-gold transition-colors"
            >
              Política de Privacidade
            </Link>
            <span>OAB/SP nº 12345</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
