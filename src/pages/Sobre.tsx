import { Target, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Missão",
    text: "Oferecer serviços jurídicos de excelência, com ética e transparência, buscando sempre a melhor solução para nossos clientes.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser referência em advocacia no Brasil, reconhecidos pela qualidade dos serviços e pelo compromisso com a justiça.",
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Ética, transparência, dedicação, respeito ao cliente e busca constante pela excelência profissional.",
  },
];

const Sobre = () => {
  return (
    <>
      <section className="bg-navy-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.2em] uppercase text-sm font-semibold mb-2">
            Conheça o escritório
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-card">
            Sobre Nós
          </h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Nossa História
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fundado em 2003, o escritório Maciel & Associados nasceu do
                compromisso de oferecer serviços jurídicos de alta qualidade com
                atendimento humanizado. Ao longo de mais de duas décadas,
                construímos uma trajetória sólida, pautada pela ética e pela
                busca constante de resultados positivos para nossos clientes.
              </p>
              <p>
                Com uma equipe multidisciplinar de advogados especializados,
                atuamos em diversas áreas do direito, sempre com foco na
                excelência e na inovação. Nossa abordagem combina conhecimento
                técnico profundo com sensibilidade para entender as necessidades
                individuais de cada cliente.
              </p>
              <p>
                Hoje, somos reconhecidos como um dos escritórios de referência
                em São Paulo, atendendo pessoas físicas e jurídicas com o mesmo
                padrão de dedicação e profissionalismo que nos trouxe até aqui.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-card rounded-lg p-8 border border-border text-center"
              >
                <v.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sobre;
