//formulario
// se uma informação for de valor unico usar o id #

const adicionarAluno = document.querySelector("#adicionar-aluno");

adicionarAluno.addEventListener('click', function(event) {
    event.preventDefault();

// buscando formulário    
    const formularioAluno = document.querySelector('#form-adiciona')

/*    const nomeAluno = formularioAluno.nome.value;
    const notaUmAluno = formularioAluno.notaum.value;
    const notaDoisAluno = formularioAluno.notadois.value;
    //console.log(nomeAluno); */

    const aluno = obterDadosDoFormulario(formularioAluno); //obter dados de todo o formulario
    const alunoTr = document.createElement("tr"); //tr = linha

// criando as 4 colunas
    const nomeAlunoTd = document.createElement("td"); //td = coluna
    const notaUmAlunoTd = document.createElement("td");
    const notaDoisAlunoTd = document.createElement("td");
    const mediaAlunoTd = document.createElement("td");

    nomeAlunoTd.textContent = aluno.nomeAluno;
    notaUmAlunoTd.textContent = aluno.notaUmAluno;
    notaDoisAlunoTd.textContent = aluno.notaDoisAluno;
    mediaAlunoTd.textContent = aluno.media;

// ligando a info da linha na tabela
    alunoTr.appendChild(nomeAlunoTd);
    alunoTr.appendChild(notaUmAlunoTd);
    alunoTr.appendChild(notaDoisAlunoTd);
    alunoTr.appendChild(mediaAlunoTd);

// adicionando nova linha na tabela
    const tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);

});

function obterDadosDoFormulario (formulario) {

    const objetoAluno = {
        nomeAluno: formulario.nome.value
        ,notaUmAluno: formulario.notaum.value
        ,notaDoisAluno: formulario.notadois.value
        ,media: calcularMedia(formulario.notaum.value, formulario.notadois.value)
    }

    /* objetoAluno
        notaUm
        notaDois
        media*/
    return objetoAluno;
}