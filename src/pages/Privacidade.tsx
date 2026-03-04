const Privacidade = () => {
  return (
    <>
      <section className="bg-navy-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-card">
            Política de Privacidade
          </h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-heading text-xl font-bold text-foreground">
            1. Informações Gerais
          </h2>
          <p>
            A presente Política de Privacidade contém informações sobre coleta,
            uso, armazenamento, tratamento e proteção dos dados pessoais dos
            usuários do site Maciel & Associados Advocacia, em conformidade com
            a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground">
            2. Dados Coletados
          </h2>
          <p>
            Coletamos dados pessoais fornecidos voluntariamente pelo usuário
            através do formulário de contato: nome, e-mail, telefone e mensagem.
            Também coletamos dados de navegação como cookies e endereço IP para
            melhorar a experiência do usuário.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground">
            3. Finalidade do Tratamento
          </h2>
          <p>
            Os dados são utilizados exclusivamente para: responder às
            solicitações de contato, agendar consultas, enviar informações
            jurídicas relevantes e melhorar nossos serviços.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground">
            4. Compartilhamento de Dados
          </h2>
          <p>
            Seus dados pessoais não serão compartilhados com terceiros, exceto
            quando necessário para cumprimento de obrigação legal ou por
            determinação judicial.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground">
            5. Seus Direitos
          </h2>
          <p>
            Você tem o direito de solicitar acesso, correção, anonimização,
            bloqueio ou eliminação dos seus dados pessoais. Para exercer seus
            direitos, entre em contato pelo e-mail
            contato@macieladvocacia.com.br.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground">
            6. Segurança
          </h2>
          <p>
            Adotamos medidas técnicas e organizacionais adequadas para proteger
            seus dados pessoais contra acesso não autorizado, alteração,
            divulgação ou destruição.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground">
            7. Alterações
          </h2>
          <p>
            Esta política pode ser atualizada a qualquer momento. Recomendamos
            que consulte esta página periodicamente.
          </p>

          <p className="text-sm">Última atualização: Março de 2026.</p>
        </div>
      </section>
    </>
  );
};

export default Privacidade;
