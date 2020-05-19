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
   aluno.style.backgroundColor = "red";
// ou aluno.setAttribute("class", "abaixo-da-media"); 
// ou aluno.classList.add("abaixo-da-media"); 
}
}

/*const button = document.querySelector(".media__button");

button.addEventListener('click', function (event) {
    event.preventDefault();

    const name = document.querySelector(".media__table");
    const inputName = document.getElementById("mediaInputName");
    const inputNotaUm = document.getElementById("mediaInputNotaUm");
    const inputNotaDois = document.getElementById("mediaInputNotaDois");
    
    //criar linha    
    const linha = document.createElement("tr");

    //criar colunas
    const colunaNome = document.createElement("td");
    const colunaNomeTexto = document.createTextNode(inputName.value);
    colunaNome.appendChild(colunaNomeTexto);

    const colunaNotaUm = document.createElement("td");
    const colunaNotaUmTexto = document.createTextNode(inputNotaUm.value);
    colunaValor.appendChild(colunaNotaUmTexto);


    const colunaNotaDois = document.createElement("td");
    const colunaNotaDoisTexto = document.createTextNode(inputNotaDois.value);
    colunaData.appendChild(colunaNotaDoisTexto);

    linha.appendChild(colunaNome);
    linha.appendChild(colunaNotaUm);
    linha.appendChild(colunaNotaDois);

    tabela.appendChild(linha)
})  */
