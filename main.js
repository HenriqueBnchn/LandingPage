

const root = document.querySelector(':root')


const btn_switch_on = document.querySelector(".on")
const btn_switch_off = document.querySelector(".off")

const sobremim_option = document.querySelector('#sobremim_option')
const habilidades_option = document.querySelector('#habilidades_option')
const hobbies_option = document.querySelector('#hobbies_option')
const ativo = "text_active"

const social_icons = document.querySelectorAll('.social svg')


btn_switch_on.addEventListener('click', () => {
  root.style.setProperty('--luminance', 1);
  root.style.setProperty('--text-black', '100%');
  btn_switch_on.style.display = 'none'
  btn_switch_off.style.display = 'block'
  social_icons.forEach(icon => {
    icon.setAttribute('fill', '#fff')
  })
})

btn_switch_off.addEventListener('click', () => {
  root.style.setProperty('--luminance', 0);
  root.style.setProperty('--text-black', '1%');
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
})

habilidades_option.addEventListener('click', () => {
  sobremim_option.classList.remove(ativo)
  habilidades_option.classList.add(ativo)
  hobbies_option.classList.remove(ativo)
})

hobbies_option.addEventListener('click', () => {
  sobremim_option.classList.remove(ativo)
  habilidades_option.classList.remove(ativo)
  hobbies_option.classList.add(ativo)
})

// header_options.map(option => {
//   option.addEventListener('click', function(){
//     if(option.classList.contains('text_active')){
//       console.log('dsadasdas')
//     }
//   })
// })
