const imput = document.getElementById("newsInputEmail");
const botao = document.querySelector(".news__button");
// const significa que o valor não será alterado
//ex.: pi = 3,14 -- const pq o valor do pi não muda

botao.addEventListener('click', function(event){    // uma ação ocorre quando 'clica' no botão
    event.preventDefault();
    const resposta = document.createElement("span");   // cria um elemneto <span> para inserir a mensagem
    const respostaMensagem = document.createTextNode("Email cadastrado com sucesso!");   // mensagem do <span>
    resposta.appendChild(respostaMensagem);

    // <span>Email cadastrado com sucesso</span>

    // const p = document.querySelector ("#paragrafoResposta");
    // p.textContent = 'Email cadastrado com sucesso.'    

    const newsForm = document.querySelector(".news__form");
    newsForm.insertBefore(resposta, imput.parentNode);
})

// 1. var para receber input + botao (input= o que vc coloca dentro do form)
// 2. adicionar o evento do botão. ex: onclick
// 2.1 criar uma ação para quando clicar no botao
// 3. para não recarregar a pág.: event.preventDefault();
// 4. criar elemento. ex.: <p> ou <span>
// 5. criar conteudo do elemento 
// 6. appendChild = para unir elemento + conteudo
// 7. insertBefore(resposta, imput) : inserir uma "resposta" antes do imput

   //input *o que vem antes do input é o elemento pai* parentnode