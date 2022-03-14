function adicionarFilme(){
    let campoFilmeFavorito = document.getElementById("filme").value;

    if (campoFilmeFavorito.endsWith(".jpg") || campoFilmeFavorito.endsWith(".png")){
        listarFilmes(campoFilmeFavorito);
    }else{
        console.error("Endereço Inválido!");
    }
    
    document.getElementById("filme").value = "";
}

function listarFilmes(campoFilmeFavorito){
    let elementoFilmeFavorito = "<img src=".concat(campoFilmeFavorito).concat(">");
    let elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}

