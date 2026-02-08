// ================================
// Guia do Lipedema - app.js
// ================================

const app = document.getElementById('app');

// ================================
// HOME
// ================================
function renderHome() {
  app.innerHTML = `
    <section class="card">
      <h2>Bem-vinda</h2>
      <p>
        Informação clara, confiável e baseada em evidências
        para quem convive com o lipedema.
      </p>
      <button onclick="renderMenu()">Entrar no Guia</button>
    </section>
  `;
}

// ================================
// MENU
// ================================
function renderMenu() {
  app.innerHTML = `
    <section class="card">
      <h2>Menu</h2>
      <button onclick="renderContent('lipedema')">O que é Lipedema</button>
      <button onclick="renderContent('causas')">Causas e Fatores de Agravamento</button>
      <button onclick="renderContent('naoFazer')">O que NÃO fazer</button>
      <button onclick="renderContent('alimentacao')">Alimentação</button>
      <button onclick="renderContent('atividade')">Atividade Física</button>
    </section>
  `;
}

// ================================
// CONTEÚDOS
// ================================
function renderContent(section) {
  const content = {

    lipedema: `
      <h2>🩺 O que é Lipedema?</h2>
      <p>
        O <strong>lipedema</strong> é uma condição crônica, progressiva e inflamatória
        que afeta predominantemente mulheres.
      </p>
      <p>
        Caracteriza-se pelo acúmulo desproporcional de gordura,
        principalmente em pernas, coxas, quadris e, em alguns casos, braços.
      </p>
      <p>
        Diferente da obesidade comum, o lipedema não responde apenas à dieta
        ou ao exercício e pode causar dor, inchaço e sensibilidade ao toque.
      </p>
    `,

    causas: `
      <h2>🧬 Causas e Fatores de Agravamento</h2>
      <ul>
        <li><strong>Genética:</strong> histórico familiar é comum.</li>
        <li><strong>Hormônios:</strong> puberdade, gravidez e menopausa.</li>
        <li><strong>Inflamação crônica:</strong> piora dor e edema.</li>
        <li><strong>Comprometimento vascular e linfático.</strong></li>
        <li><strong>Sedentarismo e ganho de peso</strong> (agravam).</li>
      </ul>
    `,

    naoFazer: `
      <h2>🚫 O que NÃO fazer</h2>
      <ul>
        <li>Dietas extremamente restritivas ou da moda</li>
        <li>Treinos de alto impacto sem orientação</li>
        <li>Ignorar dor e inchaço persistentes</li>
        <li>Comparar-se com padrões irreais</li>
        <li>Adiar acompanhamento profissional</li>
      </ul>
    `,

    alimentacao: `
      <h2>🥗 Alimentação no Lipedema</h2>

      <p>
        A alimentação não cura o lipedema, mas é essencial
        para controlar inflamação, dor e retenção de líquidos.
      </p>

      <h3>❌ Alimentos que PIORAM</h3>

      <h4>🍞 Carboidratos refinados</h4>
      <ul>
        <li>Pão branco</li>
        <li>Bolos e biscoitos</li>
        <li>Açúcar</li>
      </ul>

      <h4>🧂 Ultraprocessados</h4>
      <ul>
        <li>Embutidos</li>
        <li>Fast food</li>
        <li>Temperos prontos</li>
      </ul>

      <h4>🛢️ Gorduras inflamatórias</h4>
      <ul>
        <li>Óleos refinados</li>
        <li>Frituras</li>
        <li>Gordura vegetal hidrogenada</li>
      </ul>

      <h3>✅ Alimentos que AJUDAM</h3>

      <h4>🥩 Proteínas de qualidade</h4>
      <ul>
        <li>Peixes</li>
        <li>Ovos</li>
        <li>Frango</li>
        <li>Leguminosas</li>
      </ul>

      <h4>🥑 Gorduras boas</h4>
      <ul>
        <li>Azeite de oliva</li>
        <li>Abacate</li>
        <li>Castanhas</li>
      </ul>

      <h4>🥦 Vegetais e frutas anti-inflamatórias</h4>
      <ul>
        <li>Folhas verdes</li>
        <li>Brócolis</li>
        <li>Frutas vermelhas</li>
        <li>Abacaxi</li>
      </ul>

      <div class="aviso">
        🔒 Conteúdo bônus futuro:
        suplementos indicados e cardápio anti-inflamatório.
      </div>
    `,

    atividade: `
      <h2>🏃‍♀️ Atividade Física no Lipedema</h2>

      <p>
        O exercício correto reduz dor, melhora a circulação
        e ajuda no controle do edema.
      </p>

      <h3>✅ Exercícios que AJUDAM</h3>

      <ul>
        <li>Caminhada</li>
        <li>Bicicleta ergométrica</li>
        <li>Natação</li>
        <li>Hidroginástica</li>
        <li>Musculação orientada</li>
      </ul>

      <p>
        Esses exercícios estimulam o retorno venoso e linfático
        sem gerar impacto excessivo.
      </p>

      <h3>❌ Exercícios que podem PIORAR</h3>
      <ul>
        <li>Corrida intensa</li>
        <li>Saltos frequentes</li>
        <li>HIIT agressivo</li>
        <li>Cargas excessivas sem orientação</li>
      </ul>

      <div class="aviso">
        🔒 Futuro bônus: Treinos A-B-C adaptados para lipedema.
      </div>
    `
  };

  // Proteção contra seção inexistente
  if (!content[section]) {
    renderMenu();
    return;
  }

  app.innerHTML = `
    <section class="card">
      ${content[section]}
      <button onclick="renderMenu()">Voltar ao Menu</button>
    </section>
  `;
}

// ================================
// INICIALIZAÇÃO
// ================================
renderHome();
