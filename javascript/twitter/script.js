//JQUERY *funcionalidades* -  AULA 16.10

// let $ = document.querySelector(".xuxu")
// ou 
// $(".xuxu") 

// let xuxu = document.getElementById("xuxu");
// let xaxa = $("#xuxu").val();                            //val() busca o valor(value)  
// console.log(xaxa);


//no JS normal: 
//  btnSubmit.addEventListener.("click", function(e){
//   e.preventDefault();
// });


//no JQUERY:
let btnSubmit = $("#btn-submit");

$("#btn-submit").click(function(e){ //criar botao
  e.preventDefault();
  $("#xuxu").val(); //pegar valor do text area
});

function insereTweet(){
  let divInserir = document.querySelector(".tuites");
  divInserir.innerHTML = ` 
  <p id="pezinho">${$("#xuxu").val()} </p>
`   
//inner.HTMl: tudo o que colocar entre as tags <div class="tuites"></div>
}
