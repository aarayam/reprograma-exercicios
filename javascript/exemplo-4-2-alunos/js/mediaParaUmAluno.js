//buscando aluno pelo id
const aluno = document.querySelector("#primeiro-da-lista");
//console.log(aluno);

// buscando o valor da primeira nota do primeiro aluno
const tdPrimeiraNota = aluno.querySelector(".info-notaum");
const primeiraNota = tdPrimeiraNota.textContent; //pegar valor pelo conteudo do texto
console.log(primeiraNota);

// buscando valor da segunda nota
const tdSegundaNota = aluno.querySelector(".info-notadois");
const segundaNota = tdSegundaNota.textContent;
console.log(segundaNota);

// media calculada
const mediaFinal = aluno.querySelector(".info-media");
const mediaCalculada = (parseFloat(primeiraNota) //  parseFloat() analisa um argumento string e retorna um número de ponto flutuante.
    + parseFloat(segundaNota)) / 2;
mediaFinal.textContent = mediaCalculada;

