// Carrega o salmo do dia
async function carregarSalmo() {
  try {
    const resposta = await fetch("salmos.js");
    const dados = await resposta.text();

    // Conteúdo chega como texto; usamos eval para transformar em variável JS
    eval(dados);

    const hoje = new Date();
    const diaDoAno = Math.floor(
      (hoje - new Date(hoje.getFullFullYear(), 0, 0)) / 86400000
    );

    const salmoHoje = salmos[diaDoAno - 1];

    document.getElementById("salmo-container").innerHTML = `
      <h2>Salmo do dia (${diaDoAno})</h2>
      <p>${salmoHoje}</p>
    `;
  } catch (erro) {
    document.getElementById("salmo-container").innerHTML =
      "Erro ao carregar salmo.";
  }
}

carregarSalmo();
