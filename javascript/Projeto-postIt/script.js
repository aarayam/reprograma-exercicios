// criando componentes com react

/*const linkCriarUmaConta = React.createElement('a', {
  className: 'link', href: '/conta', children:'Criar uma conta'})*/
const linkCriarUmaConta = <a class="link" href="/conta">Criar uma conta</a>


/* const fazerLogin = React.createElement('a', {
  className: 'link', href: '/login', children:'Fazer login'})*/
const fazerLogin = <a class="link" href="/login">Fazer login</a>


/*const formularioLogin = React.createElement('form', {
  children: [linkCriarUmaConta, fazerLogin]})*/

const formularioLogin = (
  <form>
    {[linkCriarUmaConta, fazerLogin]}
  </form>
)
//pode colocar o <a> no form ou as const dentro de uma array

const divisaoProjeto = document.getElementById('projeto')

// render aceita dois parametro (elementReact, tagHTML)
ReactDOM.render(formularioLogin, divisaoProjeto)