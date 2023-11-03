function TocaSom(idElemento){
    document.querySelector(idElemento).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


let i = 0
while (i < listaDeTeclas.length) {


    console.log(i);

    //Funções anônimas no JS só podem ser utilizadas nesse contexto
    //Isto é, quando armazenamos dentro de uma variável
    listaDeTeclas[i].onclick = function () {
        TocaSom('#som_tecla_pom');
    };
    i++;
}