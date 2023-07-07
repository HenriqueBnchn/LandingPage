

const root = document.querySelector(':root')


const btn_switch_on = document.querySelector(".on")
const btn_switch_off = document.querySelector(".off")

const header = document.querySelector(".header")
const hero = document.querySelector(".hero_div")

const sobremim_option = document.querySelector('#sobremim_option')
const habilidades_option = document.querySelector('#habilidades_option')
const hobbies_option = document.querySelector('#hobbies_option')
const ativo = "text_active"

const social_icons = document.querySelectorAll('.social svg')


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


sobremim_option.addEventListener('click', () => {
  sobremim_option.classList.add(ativo)
  habilidades_option.classList.remove(ativo)
  hobbies_option.classList.remove(ativo)

  scrollTo(0, 900)
})

habilidades_option.addEventListener('click', () => {
  sobremim_option.classList.remove(ativo)
  habilidades_option.classList.add(ativo)
  hobbies_option.classList.remove(ativo)
  scrollTo(0, 1750)
})

hobbies_option.addEventListener('click', () => {
  sobremim_option.classList.remove(ativo)
  habilidades_option.classList.remove(ativo)
  hobbies_option.classList.add(ativo)
})

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", function () {
  header.classList.toggle("fixed", window.scrollY > 100)
  hero.classList.toggle("margintop", window.scrollY > 100)
})


window.addEventListener("scroll", reveal);
