const teclas = document.querySelectorAll("input[type='button']");
const painel = document.querySelector("input[type='tel']");

for (let i = 0; i<teclas.length; i++){
  let valores = teclas[i].value;
  console.log(valores);
  teclas[i].onclick = function () {
  painel.value = teclas[i].value;
  };
}

const listaDeTeclas = document.querySelectorAll('input[type=button]');

for (let indice = 0; indice < listaDeTeclas.length; indice++) {
  const tecla = listaDeTeclas[indice];

  tecla.onkeydown = function (evento) {
    if(evento.code === "Enter" || evento.code === "Space") {
    tecla.classList.add('ativa');
    }
  }
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}