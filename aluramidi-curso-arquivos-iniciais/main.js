function TocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = TocaSomPom;



// function iteraList(list){
//     console.log(list[0]);   
//     for (i in list){
//         list[i].onclick = TocaSomPom.play;
//     }
// }

// iteraList(listaDeTeclas)