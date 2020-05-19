const alunos = document.querySelectorAll(".aluno");

for (var i = 0 ; i < alunos.length; i++) {
    const aluno = alunos[i];

    const notaUmAluno = aluno.querySelector(".info-notaum").textContent;
    const notaDoisAluno = aluno.querySelector(".info-notadois").textContent;
    const media =  aluno.querySelector(".info-media");

    media.textContent = calculaMedia(notaUmAluno, notaDoisAluno);

/*    if (media < 5){
        aluno.classList.add(".abaixo-da-media");

    }*/
}

const adicionarAluno = document.querySelector("#adicionar-aluno");

adicionarAluno.addEventListener ('click', function(event){
    event.preventDefault();

    const formulario = document.querySelector("#form-adiciona");
    const aluno = obterFormulario(formulario);

    const alunoTr = document.createElement("tr");
    const nomeTd = document.createElement("td");
    const notaUmTd = document.createElement("td");
    const notaDoisTd = document.createElement("td");
    const mediaTd = document.createElement("td");

    nomeTd.textContent = aluno.nome;
    notaUmTd.textContent = aluno.notaUm;
    notaDoisTd.textContent = aluno.notaDois;
    mediaTd.textContent = aluno.media;

    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(notaUmTd);
    alunoTr.appendChild(notaDoisTd);
    alunoTr.appendChild(mediaTd);

    const tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);

})

function obterFormulario(formulario) {
const aluno = {
    nome: formulario.nome.value
    ,notaUm: formulario.notaum.value
    ,notaDois: formulario.notadois.value
    ,media: calculaMedia(formulario.notaum.value, formulario.notadois.value)
}
return aluno;

}


function calculaMedia (notaUmAluno, notaDoisAluno){
    const calculo = (parseFloat(notaUmAluno) + parseFloat(notaDoisAluno))/2;
    const media = calculo.toFixed(2);
    return media;
}