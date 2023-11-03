const teclas = document.querySelectorAll("input[type='button']");
const painel = document.querySelector("input[type='tel']");

for (let i = 0; i<teclas.length; i++){
  let valores = teclas[i].value;
  console.log(valores);
  teclas[i].onclick = function () {
  painel.value = teclas[i].value;
  };
}