import { Link } from "react-router-dom";
import {
  ArrowRight,
  Scale,
  Shield,
  Users,
  Briefcase,
  Heart,
  Award,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const practiceAreas = [
  {
    icon: Scale,
    title: "Direito Civil",
    desc: "Contratos, responsabilidade civil, direito do consumidor e questões patrimoniais.",
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    desc: "Defesa dos direitos do trabalhador e assessoria empresarial trabalhista.",
  },
  {
    icon: Shield,
    title: "Direito Previdenciário",
    desc: "Aposentadorias, benefícios do INSS e revisões previdenciárias.",
  },
  {
    icon: Users,
    title: "Direito Empresarial",
    desc: "Constituição de empresas, contratos comerciais e compliance.",
  },
  {
    icon: Heart,
    title: "Direito de Família",
    desc: "Divórcios, guarda de filhos, pensão alimentícia e inventários.",
  },
];

const testimonials = [
  {
    name: "Maria Oliveira",
    text: "Excelentes profissionais. Resolveram meu caso trabalhista com muita competência e agilidade.",
    role: "Cliente desde 2019",
  },
  {
    name: "Carlos Santos",
    text: "Atendimento humanizado e resultado acima das expectativas. Recomendo a todos.",
    role: "Cliente desde 2021",
  },
  {
    name: "Ana Rodrigues",
    text: "Equipe extremamente dedicada. Me senti acolhida durante todo o processo.",
    role: "Cliente desde 2020",
  },
];

const stats = [
  { value: "20+", label: "Anos de experiência" },
  { value: "5.000+", label: "Casos resolvidos" },
  { value: "98%", label: "Clientes satisfeitos" },
  { value: "15", label: "Advogados especialistas" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Escritório de advocacia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl animate-fade-in-up">
            <p className="text-gold tracking-[0.3em] uppercase text-sm font-semibold mb-4">
              Maciel & Associados Advocacia
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-card leading-tight mb-6">
              Defendemos seus direitos com{" "}
              <span className="text-gold-gradient">excelência</span> e dedicação
            </h1>
            <p className="text-lg text-card/80 mb-8 max-w-lg leading-relaxed">
              Há mais de 20 anos oferecendo soluções jurídicas personalizadas
              para proteger o que é mais importante para você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contato">
                <Button
                  size="lg"
                  className="bg-gold text-primary hover:bg-gold-dark font-semibold text-base px-8"
                >
                  Agende uma Consulta
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-card/30 text-gold hover:bg-card/10 font-semibold text-base px-8"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Fale pelo WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-gold">
                  {s.value}
                </div>
                <p className="text-primary-foreground/70 text-sm mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-gold tracking-[0.2em] uppercase text-sm font-semibold mb-2">
              Nossas especialidades
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Áreas de Atuação
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <Link
                to="/areas"
                key={area.title}
                className="group bg-card rounded-lg p-8 border border-border hover:border-gold/40 hover:shadow-lg transition-all duration-300"
              >
                <area.icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.desc}
                </p>
              </Link>
            ))}
            <Link
              to="/areas"
              className="flex items-center justify-center bg-primary rounded-lg p-8 group hover:bg-navy-light transition-colors"
            >
              <div className="text-center">
                <Award className="w-10 h-10 text-gold mx-auto mb-3" />
                <span className="text-primary-foreground font-heading font-semibold text-lg">
                  Ver todas as áreas
                </span>
                <ArrowRight className="w-5 h-5 text-gold mx-auto mt-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-gold tracking-[0.2em] uppercase text-sm font-semibold mb-2">
              Depoimentos
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              O que dizem nossos clientes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-card rounded-lg p-8 border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-gold fill-gold"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-card mb-4">
            Precisa de orientação jurídica?
          </h2>
          <p className="text-card/70 mb-8 max-w-lg mx-auto">
            Entre em contato conosco e agende uma consulta. Nosso time está
            pronto para ajudá-lo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato">
              <Button
                size="lg"
                className="bg-gold text-primary hover:bg-gold-dark font-semibold px-8"
              >
                Agende uma Consulta
              </Button>
            </Link>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-card/30 text-gold hover:bg-card/10 font-semibold px-8"
              >
                <Phone className="mr-2 w-5 h-5" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
