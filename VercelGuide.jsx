import React from "react";

export default function VercelGuide() {
  return (
    <div className="max-w-3xl mx-auto p-6 prose">
      <h2>Guia rápido: Como colocar seu site no ar com a Vercel</h2>
      <p>Segue uma versão resumida e sem emojis para evitar problemas de parsing em alguns ambientes.</p>

      <ol>
        <li><strong>Criar conta:</strong> Acesse <a href="https://vercel.com">vercel.com</a> e crie conta com Google ou GitHub.</li>
        <li><strong>Preparar código:</strong> Tenha o código do site no computador e instale o Git (<a href="https://git-scm.com">git-scm.com</a>).</li>
        <li><strong>Subir para GitHub:</strong> Crie um repositório e envie seu código.</li>
        <li><strong>Conectar à Vercel:</strong> No painel da Vercel, clique em "New Project", conecte ao GitHub e escolha seu repositório.</li>
        <li><strong>Deploy:</strong> A Vercel detecta automaticamente o tipo de projeto (ex.: React/Next.js). Clique em "Deploy".</li>
        <li><strong>Acessar site:</strong> Use o link gerado (ex: <code>https://seusite.vercel.app</code>).</li>
        <li><strong>Domínio próprio (opcional):</strong> Em Settings &gt; Domains, adicione seu domínio.</li>
      </ol>

      <p><strong>Atualização automática:</strong> cada vez que você enviar mudanças para o GitHub, a Vercel publica automaticamente a nova versão do site.</p>

      <p>
        Se preferir que este conteúdo seja apenas texto (sem ser um componente React),
        diga-me e eu converto para texto simples. Também posso inserir instruções adicionais
        (ex.: configuração de DNS para domínio próprio, variáveis de ambiente ou integração com formulários).
      </p>
    </div>
  );
}
