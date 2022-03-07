const nota1 = 9.3;
const b1 = "1º BIMESTRE: ".concat(nota1);
const nota2 = 8.7;
const b2 = "2º BIMESTRE: ".concat(nota2);
const nota3 = 8.5;
const b3 = "3º BIMESTRE: ".concat(nota3);
const nota4 = 9.4;
const b4 = "4º BIMESTRE: ".concat(nota4);

console.log("NOTAS DE ALAN MORAIS..." + "\n", "\n", b1 + "\n", b2, "\n", b3, "\n", b4, "\n");

const media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("MÉDIA FINAL: " + media.toFixed(1), "\n");

let situacao = "STATUS DO ALUNO: ";

if (media >= 7) {
    console.log(situacao + "APROVADO!");
}else {
    if (media < 7 && media >= 5) {
        console.log(situacao + "EM RECUPERAÇÃO");
    }else {
        console.log (situacao + "REPROVADO");
    }
}