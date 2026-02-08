function goTo(sectionId) {
  // Pega todas as seções dentro do app
  const sections = document.querySelectorAll('#app > section');

  // Esconde todas
  sections.forEach(section => {
    section.classList.add('hidden');
  });

  // Mostra a seção desejada
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.remove('hidden');
  }
}
