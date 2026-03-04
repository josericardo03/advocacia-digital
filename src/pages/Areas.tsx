import { Link } from "react-router-dom";
import { Scale, Briefcase, Shield, Users, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const areas = [
  {
    icon: Scale,
    title: "Direito Civil",
    desc: "Atuamos em questões de contratos, responsabilidade civil, direito do consumidor, indenizações e questões patrimoniais. Nossa equipe possui vasta experiência na resolução de conflitos civis, buscando sempre a melhor solução para nossos clientes.",
    topics: ["Contratos", "Responsabilidade Civil", "Direito do Consumidor", "Indenizações", "Questões Patrimoniais"],
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    desc: "Defendemos os direitos do trabalhador e prestamos assessoria jurídica empresarial na área trabalhista. Atuamos em reclamações trabalhistas, rescisões, acordos e negociações coletivas.",
    topics: ["Reclamações Trabalhistas", "Rescisões", "Acordos Coletivos", "Assédio Moral", "Horas Extras"],
  },
  {
    icon: Shield,
    title: "Direito Previdenciário",
    desc: "Auxiliamos nossos clientes na obtenção de aposentadorias, benefícios do INSS, revisões previdenciárias e recursos administrativos. Lutamos para garantir os direitos previdenciários de cada cidadão.",
    topics: ["Aposentadoria", "Auxílio-doença", "BPC/LOAS", "Pensão por Morte", "Revisão de Benefícios"],
  },
  {
    icon: Users,
    title: "Direito Empresarial",
    desc: "Assessoramos empresas de todos os portes em questões societárias, contratos comerciais, compliance e planejamento tributário. Oferecemos suporte jurídico completo para o crescimento sustentável do seu negócio.",
    topics: ["Constituição de Empresas", "Contratos Comerciais", "Compliance", "Fusões e Aquisições", "Recuperação Judicial"],
  },
  {
    icon: Heart,
    title: "Direito de Família",
    desc: "Tratamos com sensibilidade e profissionalismo as questões familiares, incluindo divórcios, guarda de filhos, pensão alimentícia, inventários e planejamento sucessório.",
    topics: ["Divórcio", "Guarda de Filhos", "Pensão Alimentícia", "Inventário", "União Estável"],
  },
];

const Areas = () => {
  return (
    <>
      <section className="bg-navy-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.2em] uppercase text-sm font-semibold mb-2">Nossas especialidades</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-card">Áreas de Atuação</h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-12">
          {areas.map((area, i) => (
            <div key={area.title} className={`flex flex-col lg:flex-row gap-8 items-start ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <div className="flex-1 bg-card rounded-lg p-8 border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <area.icon className="w-10 h-10 text-gold shrink-0" />
                  <h2 className="font-heading text-2xl font-bold text-foreground">{area.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{area.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {area.topics.map((t) => (
                    <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground">{t}</span>
                  ))}
                </div>
                <Link to="/contato">
                  <Button size="sm" className="bg-gold text-primary hover:bg-gold-dark font-semibold">
                    Consultar Especialista <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Areas;
