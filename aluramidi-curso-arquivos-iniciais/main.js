function TocaSom(idElemento){
    const elemento = document.querySelector(idElemento);

    if (idElemento && idElemento.localName === 'audio'){
        elemento.play();
    }

    else{
        console.log('Elemento não encontrado!');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i<listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i];
    const instrumentos = tecla.classList[1];
    
    const classesTeclas = tecla.classList;
    

    //Template string
    let ids = `#som_${instrumentos}`

    //Funções anônimas no JS só podem ser utilizadas nesse contexto
    //Isto é, quando armazenamos dentro de uma variável
    tecla.onclick = function () {
            TocaSom(ids);
        };
    
    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space"){
            classesTeclas.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        classesTeclas.remove('ativa');
    }
}



// let i = 0
// while (i < listaDeTeclas.length) {

//     const tecla = listaDeTeclas[i];
//     const instrumentos = tecla.classList[1];

//     //Template string
//     let ids = `#som_${instrumentos}`

//     //Funções anônimas no JS só podem ser utilizadas nesse contexto
//     //Isto é, quando armazenamos dentro de uma variável
//     tecla.onclick = function () {
//         TocaSom(ids);
//     };
//     i++;
// }