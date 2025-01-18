//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();

    if (nome === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    amigos.push(nome);
    atualizarListaAmigos();

    nomeInput.value = '';
    nomeInput.focus();
}
function atualizarListaAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';

  amigos.forEach((amigo) => {
      const li = document.createElement('li');
      li.textContent = amigo;
      listaAmigos.appendChild(li);
  });
}
function sortearAmigo() {
  if (amigos.length < 2) {
      alert('Você precisa de pelo menos 2 amigos para realizar o sorteio!');
      return;
  }

  const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
  const li = document.createElement('li');
  li.textContent = `O amigo secreto sorteado é: ${sorteado}`;
  resultado.appendChild(li);
}