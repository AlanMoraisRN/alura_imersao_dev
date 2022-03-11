const listaFilmes = ["Perdido em Marte", "Vingadores - Ultimato", "Homem Aranha - Longe de Casa"];
listaFilmes [3] = "Harry Potter e o Prizioneiro de Azkaban"; // ADD NA LISTA
listaFilmes.push("Alladin"); // ADD NA LISTA
listaFilmes.unshift("O Rei Leão"); // ADD NA LISTA

// document.write ("<p>" + listaFilmes[0] + "</p>");
// document.write ("<p>" + listaFilmes[1] + "</p>");
// document.write ("<p>" + listaFilmes[2] + "</p>");
// document.write ("<p>" + listaFilmes[3] + "</p>");
// document.write ("<p>" + listaFilmes[4] + "</p>");

for (let i = 0; i < listaFilmes.length; i++){
    document.write("<p>" + listaFilmes[i] + "</p>");
}