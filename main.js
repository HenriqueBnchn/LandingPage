

const root = document.querySelector(':root')

const btn_switch_on = document.querySelector(".on")
const btn_switch_off = document.querySelector(".off")

const home_option = document.querySelector('#home_option')
const hero_div = document.querySelector('.hero_div')

const sobremim_option = document.querySelector('#sobremim_option')
const sobre_mim_div = document.querySelector('.sobre_mim_div')
const sobremim_h = sobre_mim_div.getBoundingClientRect().top - 120

const habilidades_option = document.querySelector('#habilidades_option')
const habilidades_div = document.querySelector('.habilidades_div')
const habilidades_h = habilidades_div.getBoundingClientRect().top - 100

const hobbies_option = document.querySelector('#hobbies_option')
const hobbies_div = document.querySelector('.hobbies_div')
const hobbies_h = hobbies_div.getBoundingClientRect().top - 150

const contato_option = document.querySelector('#contato_option')
const contato_div = document.querySelector('.contato_div')
const contato_h = hobbies_div.getBoundingClientRect().top

////////////////////////////////////////////// trocar cor geral //////////////////////////////////////////

btn_switch_on.addEventListener('click', () => {
  root.classList.remove('light')
  btn_switch_on.style.display = 'none'
  btn_switch_off.style.display = 'block'
})

btn_switch_off.addEventListener('click', () => {
  root.classList.add('light')
  btn_switch_off.style.display = 'none'
  btn_switch_on.style.display = 'block'
})


////////////////////////////////////////////// opcoes rolar//////////////////////////////////////////
home_option.addEventListener('click', () => {
  window.scrollTo({top: 0})
})

sobremim_option.addEventListener('click', () => {
  window.scrollTo({top: sobremim_h})
})

habilidades_option.addEventListener('click', () => {
  window.scrollTo({top: habilidades_h})
})

hobbies_option.addEventListener('click', () => {
  window.scrollTo({top: hobbies_h})
})

contato_option.addEventListener('click', () => {
  window.scrollTo({top: 10000})
})

////////////////////////////////////////////// revelar texto //////////////////////////////////////////

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
