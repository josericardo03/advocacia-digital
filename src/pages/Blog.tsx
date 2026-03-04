import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = ["Todos", "Direito Civil", "Direito Trabalhista", "Direito Previdenciário", "Direito de Família"];

const articles = [
  { id: "1", title: "Seus direitos na rescisão trabalhista", excerpt: "Entenda quais são seus direitos ao ser demitido sem justa causa e como calcular suas verbas rescisórias.", category: "Direito Trabalhista", date: "15 Fev 2026" },
  { id: "2", title: "Como funciona o processo de aposentadoria por idade", excerpt: "Guia completo sobre os requisitos e documentos necessários para solicitar sua aposentadoria por idade junto ao INSS.", category: "Direito Previdenciário", date: "10 Fev 2026" },
  { id: "3", title: "Guarda compartilhada: o que você precisa saber", excerpt: "A guarda compartilhada é a regra no Brasil. Entenda como ela funciona e quais são os direitos de cada genitor.", category: "Direito de Família", date: "05 Fev 2026" },
  { id: "4", title: "Direitos do consumidor em compras online", excerpt: "Conheça seus direitos ao realizar compras pela internet e saiba como agir em caso de problemas com o produto.", category: "Direito Civil", date: "28 Jan 2026" },
  { id: "5", title: "Assédio moral no trabalho: como identificar e agir", excerpt: "Saiba identificar situações de assédio moral no ambiente de trabalho e quais medidas legais podem ser tomadas.", category: "Direito Trabalhista", date: "20 Jan 2026" },
  { id: "6", title: "Planejamento sucessório: proteja seu patrimônio", excerpt: "Descubra como o planejamento sucessório pode evitar conflitos familiares e proteger o patrimônio da sua família.", category: "Direito de Família", date: "12 Jan 2026" },
];

const Blog = () => {
  const [filter, setFilter] = useState("Todos");
  const filtered = filter === "Todos" ? articles : articles.filter((a) => a.category === filter);

  return (
    <>
      <section className="bg-navy-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.2em] uppercase text-sm font-semibold mb-2">Informação jurídica</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-card">Blog & Artigos</h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === c ? "bg-gold text-primary" : "bg-muted text-muted-foreground hover:bg-border"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {filtered.map((a) => (
              <Link
                to={`/blog/${a.id}`}
                key={a.id}
                className="group bg-card rounded-lg border border-border hover:border-gold/40 hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="p-6">
                  <span className="text-xs text-gold font-semibold">{a.category}</span>
                  <h3 className="font-heading text-lg font-semibold text-foreground mt-2 mb-2 group-hover:text-gold transition-colors">{a.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{a.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{a.date}</span>
                    <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
