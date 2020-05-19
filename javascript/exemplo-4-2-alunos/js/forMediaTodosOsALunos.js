const todosOsAlunos = document.querySelectorAll(".aluno");
//console.log(todosOsAlunos);

//const ana = "ana";
//const nat = "nat";
//const den = "den";

//const todasAsAlunas = ["ana", "nat", "den"]; <- array
//console.log(todasAsAlunas);

//for (let indice = 0; indice < todosOsAlunos.lenght; indice++) { ou:
for (let indice = 0; indice < todosOsAlunos.length; indice++) { 
//    console.log(todosOsAlunos[i]);
const aluno = todosOsAlunos[indice];

// buscando o valor da primeira nota do primeiro aluno
const tdPrimeiraNota = aluno.querySelector(".info-notaum");
const primeiraNota = tdPrimeiraNota.textContent; //pegar valor pelo conteudo do texto
//console.log(primeiraNota);

// buscando valor da segunda nota
const tdSegundaNota = aluno.querySelector(".info-notadois");
const segundaNota = tdSegundaNota.textContent;
//console.log(segundaNota);

// media calculada
const mediaFinal = aluno.querySelector(".info-media");
const mediaCalculada = (parseFloat(primeiraNota) + parseFloat(segundaNota)) /2;
mediaFinal.textContent = mediaCalculada.toFixed(2);


if (mediaCalculada < 5){
aluno.classList.add("abaixo-da-media");     
 // ou  aluno.style.backgroundColor = "red";
 // oualuno.setAttribute("class", "abaixo-da-media"); 
}
}

// nossa função irá precisar calcular a média
// receber dois valores (a + b) /2

function calcularMedia(primeiroValorRecebido, segundoValorRecebido) {
    let mediaCalculadaDentroDaFuncao = 
    (parseFloat(primeiroValorRecebido) 
    + parseFloat(segundoValorRecebido))/2;
    return mediaCalculadaDentroDaFuncao;
}
