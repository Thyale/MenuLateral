var nomelogo = window.document.querySelector("h1.logotext")
var home = window.document.querySelector("p.home")
var projeto = window.document.querySelector("p.projeto")
var dash = window.document.querySelector("p.dash")
var tarefas = window.document.querySelector("p.tarefas")
var config = window.document.querySelector("p.config")
var divperfil = window.document.querySelector("div.divperfil")
var geral = window.document.querySelector("div.geralBarraLateral")
var logoimg = window.document.querySelector("img.imglogo")
var imgperfil = window.document.querySelector("img.imgperfil")

var setaabrir = window.document.querySelector("span#abrir")
var setafechar = window.document.querySelector("span#fechar")

function fechar() {
  setaabrir.style.display = "flex"
  setafechar.style.display = "none"

  nomelogo.style.display = "none"

  home.style.display = "none"
  projeto.style.display = "none"
  dash.style.display = "none"
  tarefas.style.display = "none"
  config.style.display = "none"
  divperfil.style.display = "none"

  geral.style.width = "35px"

  logoimg.style.width = "35px"
  imgperfil.style.width = "35px"
}

function abrir() {
  setaabrir.style.display = "none"
  setafechar.style.display = "block"

  nomelogo.style.display = "flex"

  home.style.display = "flex"
  projeto.style.display = "flex"
  dash.style.display = "flex"
  tarefas.style.display = "flex"
  config.style.display = "flex"
  divperfil.style.display = "block"

  geral.style.width = "200px"

  logoimg.style.width = "50px"
  imgperfil.style.width = "50px"
}
