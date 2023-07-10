

const root = document.querySelector(':root')
const body = document.querySelector('body')

const btn_switch_on = document.querySelector(".on")
const btn_switch_off = document.querySelector(".off")

const header = document.querySelector(".header")
const hero = document.querySelector(".hero_div")

const sobremim_option = document.querySelector('#sobremim_option')
const sobre_mim_div = document.querySelector('.sobre_mim_div')

const habilidades_option = document.querySelector('#habilidades_option')
const habilidades_div = document.querySelector('.habilidades_div')


const hobbies_option = document.querySelector('#hobbies_option')
const hobbies_div = document.querySelector('.hobbies_div')
const hobbies_y = (hobbies_div.getBoundingClientRect().top - 100)


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
  let h = (sobre_mim_div.getBoundingClientRect().top - 50)
  window.scrollTo({top: h})
})

habilidades_option.addEventListener('click', () => {
  let h = (habilidades_div.getBoundingClientRect().top - 50)
  window.scrollTo({top: h})
})

hobbies_option.addEventListener('click', () => {
  let h = (hobbies_div.getBoundingClientRect().top - 50)
  window.scrollTo({top: h})
})

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
