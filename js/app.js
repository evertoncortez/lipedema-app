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
        Essa gordura tem um comportamento diferente da gordura comum:
        ela <strong>não responde bem à dieta ou ao exercício físico tradicional</strong>,
        o que gera frustração, culpa e anos de tentativas sem resultados reais. E, ainda, pode causar dor, inchaço e sensibilidade ao toque.
      </p>

      <hr>

      <h3>⚠️ Principais sintomas</h3>

      <ul>
        <li>Dor ou sensibilidade ao toque</li>
        <li>Sensação constante de peso nas pernas</li>
        <li>Inchaço que piora ao longo do dia</li>
        <li>Facilidade para surgimento de hematomas</li>
        <li>Gordura com aspecto irregular ou nodular</li>
      </ul>

      <hr>

      <h3>🔍 Lipedema não é obesidade</h3>

      <p>
        Embora possa coexistir com sobrepeso ou obesidade,
        o lipedema <strong>não é causado por excesso de comida</strong>.
        Pessoas com lipedema costumam apresentar:
      </p>

      <ul>
        <li>Distribuição de gordura desproporcional</li>
        <li>Membros inferiores mais volumosos</li>
        <li>Tronco relativamente mais fino</li>
        <li>Dificuldade extrema para reduzir volume das pernas</li>
      </ul>

      <p>
        Isso explica por que muitas mulheres emagrecem o tronco,
        mas continuam com pernas volumosas.
      </p>
    `,

    causas: `
     <h2>🧬 Causas e fatores de agravamento</h2>

     <p>
       O lipedema <strong>não tem uma causa única</strong>.
       Ele surge a partir da combinação de fatores hormonais, genéticos
       e inflamatórios, que afetam a forma como o corpo armazena gordura
       e responde a estímulos externos.
     </p>

     <hr>

     <h3>🧠 Predisposição genética</h3>

     <p>
       Estudos mostram que muitas mulheres com lipedema possuem
       <strong>histórico familiar</strong> da condição.
       Isso significa que o corpo já nasce com uma tendência
       a desenvolver esse tipo específico de acúmulo de gordura.
     </p>

     <p>
       Por esse motivo, não se trata de falta de disciplina ou autocuidado,
       mas de uma característica biológica.
     </p>

     <hr>

     <h3>⚖️ Influência hormonal</h3>

     <p>
       O lipedema está fortemente relacionado às variações hormonais femininas.
       É comum que os primeiros sinais apareçam ou se intensifiquem em fases como:
     </p>

     <ul>
       <li>Puberdade</li>
       <li>Gravidez</li>
       <li>Pós-parto</li>
       <li>Uso de anticoncepcionais</li>
       <li>Menopausa</li>
       <li>Fatores de agravamento como obesidade</li>
     </ul>

     <p>
       Essas fases provocam alterações na forma como o corpo distribui gordura
       e regula processos inflamatórios.
     </p>

     <hr>

     <h3>🔥 Inflamação crônica do tecido adiposo</h3>

     <p>
       No lipedema, o tecido adiposo apresenta um estado de
       <strong>inflamação crônica</strong>.
       Isso contribui para:
     </p>

     <ul>
       <li>Dor frequente</li>
       <li>Aumento do volume</li>
       <li>Maior sensibilidade</li>
       <li>Dificuldade de resposta a dietas convencionais</li>
     </ul>

     <p>
       Essa inflamação também explica por que o inchaço e o desconforto
       tendem a piorar ao longo do dia.
     </p>

     <hr>

     <h3>🚫 Fatores que podem agravar o lipedema</h3>

     <p>
       Alguns hábitos e condições não causam o lipedema,
       mas <strong>podem intensificar seus sintomas</strong>:
     </p>

     <ul>
       <li>Sedentarismo prolongado</li>
       <li>Alimentação inflamatória</li>
       <li>Ganho de peso descontrolado</li>
       <li>Estresse crônico</li>
       <li>Privação de sono</li>
       <li>Tratamentos inadequados ou agressivos</li>
     </ul>

     <hr>

     <h3>💡 O que você pode controlar</h3>

     <p>
       Embora não seja possível eliminar totalmente o lipedema,
       existem fatores que <strong>podem ser manejados</strong>:
     </p>

     <ul>
       <li>Redução de processos inflamatórios</li>
       <li>Movimento físico adequado</li>
       <li>Alimentação consciente</li>
       <li>Cuidados com circulação e linfático</li>
     </ul>

     <p>
       O conhecimento permite escolhas mais inteligentes
       e estratégias mais eficazes para viver melhor com a condição.
     </p>

     <div class="aviso">
       <p>
         <strong>Importante:</strong> Cada corpo responde de forma diferente.
         O acompanhamento profissional é fundamental para definir
         a melhor abordagem para você.
       </p>
     </div>
     
     <h3>🧬 Por que o lipedema acontece?</h3>
     <p>
       Ainda não existe uma causa única definida, mas os estudos indicam
       uma combinação de fatores:
     </p>
     <ul>
       <li>Predisposição genética (histórico familiar)</li>
       <li>Alterações hormonais (puberdade, gravidez, menopausa)</li>
       <li>Inflamação crônica do tecido adiposo</li>
       <li>Alterações na microcirculação e sistema linfático</li>
     </ul>

     <div class="aviso">
      <p>
        <strong>Importante:</strong> Este guia tem caráter educativo.
        Ele não substitui avaliação médica ou acompanhamento profissional.
      </p>
     </div>
    `,

    naoFazer: `
      <h2>🚫 O que NÃO fazer</h2>

      <p>
        Quando se convive com o lipedema, alguns hábitos e abordagens
        podem <strong>piorar os sintomas</strong> ou gerar frustração desnecessária.
        Saber o que evitar é tão importante quanto saber o que fazer.
      </p>

      <hr>

      <h3>❌ Não se culpar</h3>

      <p>
        Um dos maiores erros é acreditar que o lipedema existe
        por falta de disciplina, força de vontade ou cuidado pessoal.
      </p>

      <p>
        O lipedema é uma <strong>condição médica real</strong>.
        Culpa e autocrítica excessiva apenas aumentam o estresse,
        que por si só já agrava processos inflamatórios.
      </p>

      <hr>

      <h3>❌ Não insistir em dietas extremamente restritivas</h3>

      <p>
        Dietas muito restritas ou ciclos constantes de emagrecimento
        e ganho de peso tendem a <strong>piorar o quadro inflamatório</strong>.
      </p>

      <p>
        Além disso, emagrecer rapidamente o tronco sem reduzir
        o volume dos membros pode gerar ainda mais frustração emocional.
      </p>

      <hr>

      <h3>❌ Não acreditar em promessas de “cura rápida”</h3>

      <p>
        Até o momento, <strong>não existe cura definitiva</strong> para o lipedema.
        Desconfie de métodos que prometem eliminar completamente
        a gordura em pouco tempo.
      </p>

      <p>
        Essas promessas geralmente levam a tratamentos caros,
        invasivos ou ineficazes.
      </p>

      <hr>

      <h3>❌ Não fazer exercícios de alto impacto sem orientação</h3>

      <p>
        Atividades de alto impacto, quando realizadas sem preparo,
        podem aumentar a dor, o inchaço e a sobrecarga articular.
      </p>

      <p>
        O movimento é essencial, mas precisa ser
        <strong>adequado à condição</strong>.
      </p>

      <hr>

      <h3>❌ Não ignorar a dor</h3>

      <p>
        Dor constante não é normal.
        Ignorar sinais do corpo pode levar à progressão do quadro
        e à perda de qualidade de vida.
      </p>

      <p>
        Sentir dor não é “fraqueza” — é um sinal de que algo precisa
        ser ajustado.
      </p>

      <hr>

      <h3>❌ Não se automedicar ou seguir orientações genéricas</h3>

      <p>
        Cada pessoa com lipedema apresenta sintomas e necessidades diferentes.
        Seguir tratamentos genéricos ou automedicação pode trazer riscos.
      </p>

      <p>
        O acompanhamento de profissionais capacitados faz parte
        do cuidado responsável.
      </p>

      <hr>

      <h3>💡 Cuidado é constância, não perfeição</h3>

      <p>
        Conviver com o lipedema exige informação, paciência
        e escolhas sustentáveis ao longo do tempo.
      </p>

      <p>
        Pequenas mudanças consistentes geram resultados reais
        e mais duradouros do que soluções extremas.
      </p>

      <div class="aviso">
        <p>
          <strong>Importante:</strong> Este conteúdo tem caráter educativo.
          Ele não substitui avaliação médica ou acompanhamento profissional.
        </p>
      </div>
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
    <div class="aviso">
      🔒 Conteúdo bônus futuro:
      suplementos indicados e cardápio anti-inflamatório.
    </div>
    `,

    atividade: `
      <h2>🏃‍♀️ Atividade Física no Lipedema</h2>

      <p>
        A atividade física é uma das ferramentas mais importantes no controle do lipedema.
        Embora não elimine a condição, ela ajuda a reduzir <strong>dor</strong>,
        <strong>inchaço</strong> e melhora a <strong>circulação</strong> e a
        <strong>qualidade de vida</strong>.
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
        Esses exercícios estimulam a circulação sanguínea e linfática,
        auxiliando na redução do inchaço e da sensação de peso nas pernas,
        sem sobrecarregar as articulações.
      </p>

      <h4>🏋️‍♀️ Musculação bem orientada</h4>
      <ul>
        <li>Agachamentos (carga leve a moderada)</li>
        <li>Leg press</li>
        <li>Cadeira extensora e flexora</li>
        <li>Exercícios para glúteos e membros superiores</li>
      </ul>
      <p>
        A musculatura atua como uma “bomba” que favorece o retorno venoso e linfático.
        O fortalecimento ajuda a dar suporte ao tecido adiposo afetado pelo lipedema.
      </p>

      <h4>🧘‍♀️ Mobilidade e consciência corporal</h4>
      <ul>
        <li>Pilates</li>
        <li>Yoga adaptada</li>
        <li>Alongamentos</li>
      </ul>
      <p>
        Melhoram mobilidade, postura, respiração e reduzem tensões,
        contribuindo para mais conforto no dia a dia.
      </p>

      <h4>💧 Exercícios na água (altamente recomendados)</h4>
      <ul>
        <li>Hidroginástica</li>
        <li>Caminhada dentro da água</li>
        <li>Natação leve</li>
      </ul>
      <p>
        A pressão da água atua como uma drenagem natural,
        ajudando a reduzir o edema e o impacto nas articulações.
      </p>

      <h3>❌ Exercícios que podem PIORAR</h3>

      <h4>🏃‍♀️ Alto impacto</h4>
      <ul>
        <li>Corrida intensa</li>
        <li>Saltos frequentes</li>
        <li>Treinos com impacto repetitivo</li>
        </ul>
      <p>
        O impacto excessivo pode aumentar dor, inflamação e desconforto
        nos membros afetados.
      </p>

      <h4>🥵 Treinos extremamente intensos</h4>
      <ul>
        <li>HIIT muito agressivo</li>
        <li>Treinos longos sem recuperação adequada</li>
      </ul>
      <p>
        O excesso de estímulo pode elevar processos inflamatórios
        e aumentar retenção de líquidos.
      </p>

      <h4>🏋️‍♀️ Cargas excessivas sem orientação</h4>
      <p>
        Sobrecargas mal orientadas podem gerar mais dor,
        edema e risco de lesões.
      </p>

      <h3>⚖️ O mais importante</h3>
      <p>
        O melhor exercício é aquele que <strong>não aumenta a dor</strong>,
        <strong>não piora o inchaço</strong> e pode ser mantido com constância.
        Intensidade não é prioridade — <strong>consistência é</strong>.
      </p>

      <div class="aviso">
        <p>
          🔒 <strong>Conteúdo futuro:</strong> este guia poderá incluir
          <em>exemplos de treinos organizados (A-B-C)</em>, pensados para
          fortalecer o corpo sem piorar os sintomas do lipedema.
        </p>
      </div>

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
      <button onclick="renderMenu()" style="background-color: transparent; color: #d81b60; width: auto; padding: 0; margin-bottom: 20px; font-weight: normal;">&larr; Voltar ao Menu</button>
      ${content[section]}
    </section>
  `;
  
  // Rola para o topo ao carregar novo conteúdo
  window.scrollTo(0,0);
}

// ================================
// INICIALIZAÇÃO
// ================================
renderHome();
