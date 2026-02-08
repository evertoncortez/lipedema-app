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
        O lipedema não possui uma única causa isolada. Ele resulta da combinação de fatores
        genéticos, hormonais e inflamatórios.
      </p>

      <ul>
        <li>
          <strong>Predisposição genética:</strong> histórico familiar é muito comum,
          indicando influência hereditária.
        </li>
        <li>
          <strong>Alterações hormonais:</strong> início ou piora dos sintomas costuma ocorrer
          em fases como puberdade, gravidez, uso de anticoncepcionais ou menopausa.
        </li>
        <li>
          <strong>Inflamação crônica:</strong> o tecido adiposo do lipedema apresenta um
          estado inflamatório persistente, que contribui para dor e sensibilidade.
        </li>
        <li>
          <strong>Comprometimento vascular e linfático:</strong> favorece inchaço,
          retenção de líquidos e sensação de peso nas pernas.
        </li>
        <li>
          <strong>Sedentarismo e ganho de peso:</strong> não causam o lipedema,
          mas podem agravar significativamente os sintomas.
        </li>
      </ul>
    `,

    naoFazer: `
      <h2>🚫 O que NÃO fazer no Lipedema</h2>

      <p>
        Alguns hábitos e abordagens comuns podem piorar os sintomas do lipedema
        e atrasar o controle da condição.
      </p>

      <ul>
        <li>
          <strong>Não insistir em dietas extremamente restritivas:</strong>
          o lipedema não é causado por falta de disciplina alimentar e dietas
          radicais aumentam inflamação e frustração.
        </li>
        <li>
          <strong>Não praticar exercícios de alto impacto sem orientação:</strong>
          atividades como saltos excessivos e corrida intensa podem aumentar dor
          e inflamação.
        </li>
        <li>
          <strong>Não ignorar dor e inchaço:</strong>
          sentir dor constante não é normal e deve ser avaliado.
        </li>
        <li>
          <strong>Não comparar seu corpo com padrões irreais:</strong>
          o lipedema é uma condição médica, não uma falha estética.
        </li>
        <li>
          <strong>Não adiar o acompanhamento profissional:</strong>
          quanto antes o tratamento começa, melhor o controle da progressão.
        </li>
      </ul>
    `,

    alimentacao: `
  <h2>🥗 Alimentação no Lipedema</h2>

  <p>
    A alimentação não cura o lipedema, mas exerce um papel fundamental no
    <strong>controle da inflamação, da dor, do inchaço e da progressão da condição</strong>.
  </p>

  <p>
    O foco deve ser uma alimentação <strong>anti-inflamatória, equilibrada e sustentável</strong>,
    respeitando a individualidade de cada pessoa.
  </p>

  <hr>

  <h3>🥑 Gorduras</h3>

  <p><strong>O que AJUDA:</strong></p>
  <ul>
    <li>Azeite de oliva extra-virgem</li>
    <li>Abacate</li>
    <li>Castanhas, nozes e amêndoas</li>
    <li>Sementes de chia e linhaça</li>
    <li>Peixes ricos em ômega-3 (salmão, sardinha, atum)</li>
  </ul>

  <p><strong>O que PIORA:</strong></p>
  <ul>
    <li>Gorduras trans</li>
    <li>Frituras</li>
    <li>Margarina</li>
    <li>Fast food</li>
    <li>Alimentos ultraprocessados ricos em gordura industrial</li>
  </ul>

  <hr>

  <h3>🍚 Carboidratos</h3>

  <p><strong>O que AJUDA:</strong></p>
  <ul>
    <li>Arroz integral</li>
    <li>Batata-doce</li>
    <li>Mandioca</li>
    <li>Aveia</li>
    <li>Quinoa</li>
  </ul>

  <p><strong>O que PIORA:</strong></p>
  <ul>
    <li>Açúcar refinado</li>
    <li>Pães brancos</li>
    <li>Massas refinadas</li>
    <li>Doces industrializados</li>
    <li>Refrigerantes e sucos artificiais</li>
  </ul>

  <hr>

  <h3>🍗 Proteínas</h3>

  <p><strong>O que AJUDA:</strong></p>
  <ul>
    <li>Frango</li>
    <li>Peixes</li>
    <li>Ovos</li>
    <li>Carnes magras</li>
    <li>Leguminosas (feijão, lentilha, grão-de-bico)</li>
  </ul>

  <p><strong>O que PIORA:</strong></p>
  <ul>
    <li>Carnes ultraprocessadas (salsicha, presunto, linguiça)</li>
    <li>Excesso de carne vermelha</li>
    <li>Embutidos ricos em sódio</li>
  </ul>

  <hr>

  <h3>🥦 Vegetais e Legumes</h3>

  <p><strong>O que AJUDA:</strong></p>
  <ul>
    <li>Vegetais verdes escuros (brócolis, couve, espinafre)</li>
    <li>Abobrinha</li>
    <li>Cenoura</li>
    <li>Beterraba</li>
    <li>Abóbora</li>
  </ul>

  <p>
    Vegetais são ricos em fibras e compostos anti-inflamatórios,
    essenciais para o controle do lipedema.
  </p>

  <hr>

  <h3>🍓 Frutas</h3>

  <p><strong>O que AJUDA:</strong></p>
  <ul>
    <li>Frutas vermelhas (morango, mirtilo, amora)</li>
    <li>Maçã</li>
    <li>Pera</li>
    <li>Abacate</li>
    <li>Kiwi</li>
  </ul>

  <p><strong>Consumir com moderação:</strong></p>
  <ul>
    <li>Banana</li>
    <li>Manga</li>
    <li>Uva</li>
  </ul>

  <hr>

  <h3>🧂 Sal, açúcar e ultraprocessados</h3>

  <p><strong>Evitar ao máximo:</strong></p>
  <ul>
    <li>Excesso de sal (favorece retenção de líquidos)</li>
    <li>Açúcar refinado</li>
    <li>Alimentos ultraprocessados</li>
    <li>Temperos prontos e caldos industrializados</li>
  </ul>

  <hr>

  <h3>💧 Hidratação</h3>

  <p>
    A ingestão adequada de água auxilia na circulação,
    no funcionamento do sistema linfático e no controle do inchaço.
  </p>

  <p>
    Chás naturais com ação anti-inflamatória, como gengibre,
    cúrcuma e cavalinha, podem ser aliados.
  </p>

  <hr>

  <p>
    ⚠️ <strong>Importante:</strong> a alimentação deve ser sempre
    individualizada e, sempre que possível, orientada por um
    nutricionista com conhecimento em lipedema.
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

