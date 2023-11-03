function TocaSom(idElemento){
    document.querySelector(idElemento).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i<listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i];
    const instrumentos = tecla.classList[1];
            
    //Template string
    let ids = `#som_${instrumentos}`

    //Funções anônimas no JS só podem ser utilizadas nesse contexto
    //Isto é, quando armazenamos dentro de uma variável
    tecla.onclick = function () {
            TocaSom(ids);
        };
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