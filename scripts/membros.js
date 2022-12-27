//-----------   Card de Membros  --------------


var cardMember = document.querySelector('.card-members')
var nMember = document.querySelector('#NameMember')
var Name = document.querySelector('#name')
var idade = document.querySelector('#Idade')
var peso = document.querySelector('#Peso')
var insta = document.querySelector('.instagram')







function jhony() {
  cardMember.style.display = "block"


  nMember.innerHTML = "Jhony Marques"
  Name.innerHTML = "Jhony Marques"
  idade.innerHTML = "18"
  peso.innerHTML = "82kg"
  insta.href = "https://instagram.com/sr_jhonymarques_sw?igshid=Yzg5MTU1MDY="


  cardMember.style.backgroundImage = "url('images/jhony.png')"
}





function arthur() {
  nMember.innerHTML = "Arthur Vinícius"
  cardMember.style.backgroundImage = "url('images/arthur.png')"
  cardMember.style.display = "block"

  Name.innerHTML = "Arthur Vinícius"
  idade.innerHTML = "17"
  peso.innerHTML = "54kg"
  insta.href = "https://instagram.com/arthur_yugii?igshid=Yzg5MTU1MDY="
}





function davi() {
  nMember.innerHTML = "Davi João"
  cardMember.style.backgroundImage = "url('images/davi.png')"
  cardMember.style.display = "block"

  Name.innerHTML = "Davi João"
  idade.innerHTML = '17'
  peso.innerHTML = "70kg"
  insta.href = "https://instagram.com/davi_xthenia?igshid=Yzg5MTU1MDY="
}



function matheus() {
  nMember.innerHTML = "Matheus Gabriel"
  cardMember.style.backgroundImage = "url('images/matheus.png')"
  cardMember.style.display = "block"
  
  Name.innerHTML = "Matheus Gabriel"
  idade.innerHTML = '17'
  peso.innerHTML = "68kg"
  insta.href = "https://instagram.com/teteu_xthenia?igshid=Yzg5MTU1MDY="
}





function sair() {
  cardMember.style.display = "none"
}