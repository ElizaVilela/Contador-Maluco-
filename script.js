let contador = 0;
const btn = document.getElementById('btn');
const countSpan = document.getElementById('count');

btn.addEventListener('click', () => {
  contador++;
  countSpan.textContent = contador;

  if (contador % 10 === 0) {
    alert(`Parabéns! Você clicou ${contador} vezes! 🎉`);
  }
});
