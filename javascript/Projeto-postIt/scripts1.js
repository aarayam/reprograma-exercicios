// criando componentes com JavaScript puro

//criar conta
const linkCriarUmaConta = document.createElement('a')
linkCriarUmaConta.className = 'link'
linkCriarUmaConta.href = '/conta'
linkCriarUmaConta.appendChild(document.createTextNode('Criar uma conta'))

const divisaoProjeto = document.getElementById('projeto')
divisaoProjeto.appendChild(linkCriarUmaConta)

//login
const fazerLogin = document.createElement('a')
fazerLogin.className = 'link'
fazerLogin.href = '/login'
fazerLogin.appendChild(document.createTextNode('Fazer login'))

divisaoProjeto.appendChild(fazerLogin)

//formulario
const formulario = document.createElement('form')
formulario.appendChild(linkCriarUmaConta)
formulario.appendChild(fazerLogin)

divisaoProjeto.appendChild(formulario)