document.getElementById("botaoenviar").addEventListener("click", validaformulario)

function validaformulario(){
  if (document.getElementById("nome").value !="" && document.getElementById("email").value !=""){
    alert("Prontinho! Você receberá as novidades por e-mail.")
  }else{
    alert("Por favor preencha os campos Nome e E-mail")
  }
}
