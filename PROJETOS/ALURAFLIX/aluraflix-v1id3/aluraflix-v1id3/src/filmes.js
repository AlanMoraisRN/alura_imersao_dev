let listaFilmes = ["https://br.web.img3.acsta.net/pictures/15/06/08/16/37/297638.jpg", "https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg"];
listaFilmes.push ("https://image.posterlounge.pt/images/l/1893840.jpg");
listaFilmes.push ("https://br.web.img3.acsta.net/pictures/19/05/07/20/54/2901026.jpg");
listaFilmes.push ("https://projetolumi.files.wordpress.com/2019/01/0001-titanic.jpg");

for (let i = 0; i < listaFilmes.length; i++){
    document.write ("<img src=" + listaFilmes[i] + ">");
}