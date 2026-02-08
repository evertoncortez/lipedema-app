const app = document.getElementById('app');

function renderHome() {
  app.innerHTML = `
    <section class="card">
      <h2>Bem-vinda</h2>
      <p>Informação clara e acessível para quem convive com o lipedema.</p>
      <button onclick="renderMenu()">Entrar no Guia</button>
    </section>
  `;
}

function renderMenu() {
  app.innerHTML = `
    <section class="card">
      <h2>Menu</h2>
      <button onclick="renderContent('lipedema')">O que é Lipedema</button>
      <button onclick="renderContent('causas')">Causas</button>
      <button onclick="renderContent('alimentacao')">Alimentação</button>
      <button onclick="renderContent('atividade')">Atividade Física</button>
    </section>
  `;
}

function renderContent(section) {
  const content = {
    lipedema: `
      <h2>🩺 O que é Lipedema?</h2>
      <p>
        O <strong>lipedema</strong> é uma condição crônica que afeta principalmente mulheres
        e se caracteriza pelo acúmulo anormal de gordura, especialmente nas pernas, coxas,
        quadris e, em alguns casos, braços.
      </p>
      <p>
        Diferente da gordura comum, essa condição pode causar dor, inchaço,
        sensação de peso e facilidade para surgimento de hematomas.
      </p>
    `,
    causas: `
      <h2>🧬 Causas do Lipedema</h2>
      <ul>
        <li>Fatores genéticos</li>
        <li>Alterações hormonais</li>
        <li>Processos inflamatórios</li>
        <li>Alterações na circulação</li>
      </ul>
    `,
    alimentacao: `
      <h2>🥗 Alimentação</h2>
      <p>
        Uma alimentação anti-inflamatória pode ajudar no controle dos sintomas.
        Evitar ultraprocessados, açúcar em excesso e priorizar alimentos naturais
        é um passo importante.
      </p>
    `,
    atividade: `
      <h2>🏃‍♀️ Atividade Física</h2>
      <p>
        Exercícios de baixo impacto, como caminhada, musculação orientada,
        hidroginástica e pilates são geralmente os mais indicados.
      </p>
    `
  };

  app.innerHTML = `
    <section class="card">
      ${content[section]}
      <button onclick="renderMenu()">Voltar ao Menu</button>
    </section>
  `;
}

// Inicialização do app
renderHome();
