var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  let chute = parseInt(document.getElementById("valor").value);
  let elementoResultado = document.getElementById("resultado");
  var tentativas = 5;
  elementoResultado.innerHTML = "VOCÊ TEM 5 TENTATIVAS!";
  console.log(chute);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "PARABÉNS! VOCÊ ACERTOU O NÚMERO!";
    console.log("O NÚMERO ESTÁ CORRETO");
  } else if (chute < 0 || chute > 10) {
    elementoResultado.innerHTML = "VOCÊ DEVE DIGITAR UM NÚMERO DE 0 A 10";
    console.log("VOCÊ DEVE DIGITAR UM NÚMERO DE 0 A 10");
  } else {
    elementoResultado.innerHTML = "NÚMERO ERRADO, TENTE NOVAMENTE!";
    console.log("O NÚMERO ESTÁ ERRADO!");
  }
}