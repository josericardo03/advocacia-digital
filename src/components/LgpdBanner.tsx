import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LgpdBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("lgpd_accepted");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("lgpd_accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary p-4 border-t border-gold/20 shadow-lg animate-fade-in-up">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-primary-foreground/80">
          Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
          <Link to="/privacidade" className="text-gold underline">Política de Privacidade</Link>.
        </p>
        <Button onClick={accept} size="sm" className="bg-gold text-primary hover:bg-gold-dark font-semibold shrink-0">
          Aceitar
        </Button>
      </div>
    </div>
  );
};

export default LgpdBanner;
