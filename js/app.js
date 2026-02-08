const app = document.getElementById('app');

function renderHome() {
  app.innerHTML = `
    <section class="card">
      <h2>Bem-vinda</h2>
      <p>Informação clara, confiável e baseada em evidências para quem convive com o lipedema.</p>
      <button onclick="renderMenu()">Entrar no Guia</button>
    </section>
  `;
}

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

function renderContent(section) {
  const content = {

    lipedema: `
      <h2>🩺 O que é Lipedema?</h2>
      <p>
        O <strong>lipedema</strong> é uma condição crônica, progressiva e inflamatória que afeta
        predominantemente mulheres. Caracteriza-se pelo acúmulo desproporcional de gordura,
        principalmente em pernas, coxas, quadris e, em alguns casos, braços.
      </p>
      <p>
        Diferente da obesidade comum, o lipedema não responde de forma eficaz apenas à dieta
        ou exercício e pode causar <strong>dor, inchaço, sensação de peso e facilidade para hematomas</strong>.
      </p>
    `,

    causas: `
      <h2>🧬 Causas e Fatores de Agravamento do Lipedema</h2>
      <p>
        O lipedema resulta da combinação de fatores genéticos, hormonais,
        inflamatórios e circulatórios.
      </p>
      <ul>
        <li><strong>Predisposição genética</strong></li>
        <li><strong>Alterações hormonais</strong></li>
        <li><strong>Inflamação crônica</strong></li>
        <li><strong>Comprometimento vascular e linfático</strong></li>
        <li><strong>Sedentarismo e ganho de peso</strong> (agravam, mas não causam)</li>
      </ul>
    `,

    naoFazer: `
      <h2>🚫 O que NÃO fazer no Lipedema</h2>
      <ul>
        <li>Dietas extremamente restritivas</li>
        <li>Exercícios de alto impacto sem orientação</li>
        <li>Ignorar dor e inchaço</li>
        <li>Comparar-se com padrões irreais</li>
        <li>Adiar acompanhamento profissional</li>
      </ul>
    `,

    alimentacao: `
      <h2>🥗 Alimentação no Lipedema</h2>
      <p>
        A alimentação não cura o lipedema, mas ajuda no controle da inflamação,
        dor e retenção de líquidos.
      </p>
      <p>
        Priorize alimentos naturais e evite ultraprocessados.
      </p>
    `,

    atividade: `
      <h2>🏃‍♀️ Atividade Física no Lipedema</h2>

      <p>
        A prática regular de exercícios ajuda a reduzir dor, inchaço
        e melhora a circulação e a qualidade de vida.
      </p>

      <h3>✅ Exercícios que AJUDAM</h3>

      <h4>🚶‍♀️ Aeróbicos de baixo impacto</h4>
      <ul>
        <li>Caminhada</li>
        <li>Bicicleta ergométrica</li>
        <li>Elíptico</li>
        <li>Hidroginástica</li>
        <li>Natação</li>
      </ul>
      <p>
        Estimulam a circulação sanguínea e linfática sem sobrecarregar
        articulações e tecidos.
      </p>

      <h4>🏋️‍♀️ Musculação orientada</h4>
      <ul>
        <li>Agachamentos leves a moderados</li>
        <li>Leg press</li>
        <li>Cadeira extensora e flexora</li>
        <li>Exercícios para glúteos</li>
      </ul>
      <p>
        O fortalecimento muscular auxilia o retorno venoso e linfático,
        funcionando como uma “bomba natural”.
      </p>

      <h4>💧 Exercícios na água</h4>
      <p>
        A pressão da água ajuda na drenagem e reduz o impacto,
        sendo altamente recomendada.
      </p>

      <h3>❌ Exercícios que podem PIORAR</h3>
      <ul>
        <li>Corrida intensa</li>
        <li>Saltos frequentes</li>
        <li>HIIT muito agressivo</li>
        <li>Cargas excessivas sem orientação</li>
      </ul>

      <p>
        Impacto excessivo e treinos muito intensos podem aumentar
        inflamação, dor e retenção de líquidos.
      </p>

      <div class="aviso">
        <p>
          🔒 Conteúdo futuro: exemplos de treinos organizados (A-B-C)
          específicos para lipedema.
        </p>
      </div>
    `
  };

  app.innerHTML = `
    <section class="card">
      ${content[section]}
      <button onclick="renderMenu()">Voltar ao Menu</button>
    </section>
  `;
}

// Inicialização
renderHome();
