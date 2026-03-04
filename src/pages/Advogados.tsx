const lawyers = [
  {
    name: "Dr. Ricardo Silva",
    oab: "OAB/SP 12345",
    specialty: "Direito Civil e Empresarial",
    bio: "Sócio fundador com mais de 25 anos de experiência. Especialista em litígios complexos e consultoria empresarial. Formado pela USP com mestrado em Direito Comercial.",
    initials: "RS",
  },
  {
    name: "Dra. Fernanda Costa",
    oab: "OAB/SP 23456",
    specialty: "Direito Trabalhista",
    bio: "Especialista em direito do trabalho com foco em defesa do trabalhador. Mais de 15 anos de atuação em reclamações trabalhistas e negociações coletivas.",
    initials: "FC",
  },
  {
    name: "Dr. Marcos Almeida",
    oab: "OAB/SP 34567",
    specialty: "Direito Previdenciário",
    bio: "Referência em direito previdenciário, com ampla experiência em aposentadorias, benefícios do INSS e revisões. Pós-graduado pela PUC-SP.",
    initials: "MA",
  },
  {
    name: "Dra. Juliana Ferreira",
    oab: "OAB/SP 45678",
    specialty: "Direito de Família",
    bio: "Atua com sensibilidade em questões familiares. Especialista em mediação de conflitos, divórcios e planejamento sucessório.",
    initials: "JF",
  },
];

const Advogados = () => {
  return (
    <>
      <section className="bg-navy-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.2em] uppercase text-sm font-semibold mb-2">Nossa equipe</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-card">Advogados</h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {lawyers.map((l) => (
              <div key={l.name} className="bg-card rounded-lg p-8 border border-border hover:border-gold/40 transition-colors">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-4">
                  <span className="font-heading text-2xl font-bold text-gold">{l.initials}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">{l.name}</h3>
                <p className="text-gold text-sm font-semibold mb-1">{l.specialty}</p>
                <p className="text-xs text-muted-foreground mb-3">{l.oab}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Advogados;
