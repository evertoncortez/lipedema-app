function goTo(screen) {
  const app = document.getElementById('app');

  if (screen === 'menu') {
    app.innerHTML = `
      <section class="card">
        <h2>Menu</h2>
        <button onclick="show('lipedema')">O que é Lipedema</button>
        <button onclick="show('causas')">Causas</button>
        <button onclick="show('alimentacao')">Alimentação</button>
        <button onclick="show('atividade')">Atividade Física</button>
      </section>
    `;
  }
}

function show(section) {
  const content = {
    lipedema: `<h2>O que é Lipedema</h2><p>Condição crônica...</p>`,
    causas: `<h2>Causas</h2><p>Genética, hormônios...</p>`,
    alimentacao: `<h2>Alimentação</h2><p>Alimentos aliados...</p>`,
    atividade: `<h2>Atividade Física</h2><p>Exercícios indicados...</p>`
  };

  document.getElementById('app').innerHTML = `
    <section class="card">
      ${content[section]}
      <button onclick="goTo('menu')">Voltar</button>
    </section>
  `;
}
