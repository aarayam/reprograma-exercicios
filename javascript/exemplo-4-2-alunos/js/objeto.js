                                    // formulario - objeto aluno
const adicionarAluno = document.querySelector("#adicionar-aluno");

//botao
adicionarAluno.addEventListener('click', function(event) {
    event.preventDefault();

//formulario
    const formularioAluno = document.querySelector("#form-adiciona");
    const novoAluno = obterDadosDoFormulario(formularioAluno);

    const alunoTr = document.createElement("tr");

    const nomeAlunoTd = document.createElement("td");
    const notaUmAlunoTd = document.createElement("td");
    const notaDoisAlunoTd = document.createElement("td");
    const mediaAlunoTd = document.createElement("td");

    nomeAlunoTd.textContent - novoAluno.nomeAluno;
    notaUmAlunoTd.textContent = novoAluno.notaUmAluno;
    notaDoisAlunoTd.textContent = novoAluno.notaDoisAluno;
    mediaAlunoTd.textContent = novoAluno.media;

    //colocar colunas em linha
    alunoTr.appendChild(nomeAlunoTd);
    alunoTr.appendChild(notaUmAlunoTd);
    alunoTr.appendChild(notaDoisAlunoTd);
    alunoTr.appendChild(mediaAlunoTd);

    //colocar linha na tabela
    const tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);
});

function obterOsDadosDoFormulario(formulario) {
    const objetoAluno = {
        nomeAluno: formulario.nome.value
        ,notaUmAluno: formulario.notaum.value
        ,notaDoisAluno: formulario.notadois.value
        ,media: calcularMedia(formulario.notaum.value, formulario.notadois.value)
    }
    return objetoAluno;
}
