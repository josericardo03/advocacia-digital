import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Início", path: "/" },
  { label: "Sobre Nós", path: "/sobre" },
  { label: "Áreas de Atuação", path: "/areas" },
  { label: "Advogados", path: "/advogados" },
  { label: "Blog", path: "/blog" },
  { label: "Contato", path: "/contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-navy-light/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center">
              <span className="font-heading text-gold font-bold text-lg">S</span>
            </div>
            <div>
              <span className="font-heading text-xl font-bold text-primary-foreground tracking-wide">
                Silva & Associados
              </span>
              <span className="block text-xs text-gold tracking-[0.2em] uppercase">Advocacia</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  location.pathname === item.path
                    ? "text-gold"
                    : "text-primary-foreground/80 hover:text-gold"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              <Button variant="outline" size="sm" className="border-gold text-gold hover:bg-gold hover:text-primary font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </a>
          </nav>

          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-navy-light/30">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.path
                    ? "text-gold bg-navy-light/20"
                    : "text-primary-foreground/80 hover:text-gold"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button variant="outline" size="sm" className="w-full border-gold text-gold hover:bg-gold hover:text-primary font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                Fale pelo WhatsApp
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
