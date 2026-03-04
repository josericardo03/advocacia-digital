import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const articlesData: Record<string, { title: string; category: string; date: string; content: string }> = {
  "1": {
    title: "Seus direitos na rescisão trabalhista",
    category: "Direito Trabalhista",
    date: "15 Fev 2026",
    content: `A rescisão do contrato de trabalho sem justa causa garante ao trabalhador diversos direitos. Entre eles estão o aviso prévio (trabalhado ou indenizado), o saldo de salário, férias proporcionais acrescidas de 1/3, 13º salário proporcional, multa de 40% sobre o FGTS e o direito ao seguro-desemprego.\n\nÉ fundamental que o trabalhador confira todos os valores na hora da rescisão e, em caso de dúvida, procure orientação jurídica especializada. Nosso escritório possui ampla experiência em questões trabalhistas e está pronto para auxiliá-lo na defesa dos seus direitos.`,
  },
  "2": {
    title: "Como funciona o processo de aposentadoria por idade",
    category: "Direito Previdenciário",
    date: "10 Fev 2026",
    content: `A aposentadoria por idade é um dos benefícios mais buscados junto ao INSS. Após a Reforma da Previdência de 2019, a idade mínima passou a ser de 65 anos para homens e 62 anos para mulheres, com tempo mínimo de contribuição de 15 anos para mulheres e 20 anos para homens.\n\nO processo pode ser iniciado pela internet através do portal Meu INSS ou presencialmente em uma agência. É importante reunir toda a documentação necessária e, se possível, contar com a assessoria de um advogado previdenciário para garantir que todos os períodos de contribuição sejam corretamente computados.`,
  },
  "3": {
    title: "Guarda compartilhada: o que você precisa saber",
    category: "Direito de Família",
    date: "05 Fev 2026",
    content: `Desde 2014, a guarda compartilhada é a regra no direito brasileiro, devendo ser aplicada mesmo quando não há consenso entre os pais. Nessa modalidade, ambos os genitores participam ativamente das decisões sobre a vida dos filhos.\n\nA guarda compartilhada não significa necessariamente divisão igualitária do tempo de convivência, mas sim a participação conjunta nas decisões importantes sobre educação, saúde e bem-estar dos filhos. É essencial buscar orientação jurídica para entender seus direitos e deveres nesse contexto.`,
  },
  "4": {
    title: "Direitos do consumidor em compras online",
    category: "Direito Civil",
    date: "28 Jan 2026",
    content: `O Código de Defesa do Consumidor garante diversos direitos nas compras realizadas pela internet. O mais importante deles é o direito de arrependimento, que permite ao consumidor desistir da compra no prazo de 7 dias após o recebimento do produto, sem necessidade de justificativa.\n\nAlém disso, o consumidor tem direito à informação clara sobre o produto, prazo de entrega e política de troca. Em caso de produto com defeito, o fornecedor tem até 30 dias para resolver o problema.`,
  },
  "5": {
    title: "Assédio moral no trabalho: como identificar e agir",
    category: "Direito Trabalhista",
    date: "20 Jan 2026",
    content: `O assédio moral no trabalho se caracteriza por condutas abusivas e repetitivas que expõem o trabalhador a situações humilhantes. Pode se manifestar através de gritos, isolamento, sobrecarga de trabalho ou ameaças constantes.\n\nSe você está passando por essa situação, é importante documentar tudo: e-mails, mensagens, testemunhas. Procure o RH da empresa e, se necessário, busque orientação jurídica. O trabalhador assediado pode pleitear indenização por danos morais e, em casos graves, a rescisão indireta do contrato de trabalho.`,
  },
  "6": {
    title: "Planejamento sucessório: proteja seu patrimônio",
    category: "Direito de Família",
    date: "12 Jan 2026",
    content: `O planejamento sucessório é uma ferramenta jurídica que permite organizar a transmissão do patrimônio ainda em vida, evitando conflitos familiares e reduzindo custos com impostos e inventário.\n\nEntre as estratégias mais utilizadas estão a doação com reserva de usufruto, a constituição de holding familiar e o testamento. Cada caso requer uma análise individualizada para determinar a melhor estratégia. Consulte um advogado especializado para proteger o patrimônio da sua família.`,
  },
};

const BlogPost = () => {
  const { id } = useParams();
  const article = id ? articlesData[id] : null;

  if (!article) {
    return (
      <div className="py-40 text-center">
        <h1 className="font-heading text-2xl text-foreground">Artigo não encontrado</h1>
        <Link to="/blog" className="text-gold hover:underline mt-4 inline-block">Voltar ao blog</Link>
      </div>
    );
  }

  return (
    <>
      <section className="bg-navy-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-gold text-sm font-semibold">{article.category}</span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-card mt-2">{article.title}</h1>
          <p className="text-card/60 text-sm mt-2">{article.date}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center text-gold hover:underline text-sm mb-8">
            <ArrowLeft className="w-4 h-4 mr-1" /> Voltar ao blog
          </Link>
          <div className="prose max-w-none">
            {article.content.split("\n\n").map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
