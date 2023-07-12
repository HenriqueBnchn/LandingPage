

const root = document.querySelector(':root')
const body = document.querySelector('body')

const btn_switch_on = document.querySelector(".on")
const btn_switch_off = document.querySelector(".off")

const header = document.querySelector(".header")
const hero = document.querySelector(".hero_div")

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

const social_icons = document.querySelectorAll('.social svg')


////////////////////////////////////////////// trocar cor geral //////////////////////////////////////////

btn_switch_on.addEventListener('click', () => {
  root.classList.remove('light')
  btn_switch_on.style.display = 'none'
  btn_switch_off.style.display = 'block'

  social_icons.forEach(icon => {
    icon.setAttribute('fill', '#fff')
  })
})

btn_switch_off.addEventListener('click', () => {
  root.classList.add('light')
  btn_switch_off.style.display = 'none'
  btn_switch_on.style.display = 'block'
  social_icons.forEach(icon => {
    icon.setAttribute('fill', '#000')
  })
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
