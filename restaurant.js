const hamburgerButton = document.querySelector('.js-hamburger-menu')
const textEllemente = document.querySelectorAll('.text-animation')
const cards = document.querySelectorAll('.js-card')

hamburgerButton.addEventListener('click', () => {
  document.querySelector('.links').classList.toggle('open')

  if(document.querySelector('.links').classList.contains('open')) {
     hamburgerButton.innerHTML = `<img alt="" src="Images/icons8-close (1).svg">`
   
  } else {
     hamburgerButton.innerHTML = `<img alt="" src="Images/icons8-menü-beige.svg"></img>`
  }
})

const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if(entry.isIntersecting) {
         entry.target.classList.add('sichtbar');
         observer.unobserve(entry.target)
      }
   })
})

 textEllemente.forEach((el,index) => {
   el.style.transitionDelay = `${index * 0.1}s`
  observer.observe(el)
})

const cardObserver = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if(entry.isIntersecting) {
         entry.target.classList.add('sichtbarCard');
         cardObserver.unobserve(entry.target)
      }
   })
})

 cards.forEach((el,index) => {
   el.style.transitionDelay = `${index * 0.1}s`
  cardObserver.observe(el)
})

const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const phoneInput = document.getElementById('phone')
const dateInput = document.getElementById('date')
const timeInput = document.getElementById('time')
const guestInput = document.getElementById('guest')
const form = document.querySelector('.form')

const inputs = document.querySelectorAll('input')


form.addEventListener('submit', (e) => {
   e.preventDefault()
   let valid = true


   if(nameInput.value.trim() === ''){
      nameInput.classList.add('false')
      valid = false
   } else{
      nameInput.classList.remove('false')
   }

   if(emailInput.value.trim() === ''){
      emailInput.classList.add('false')
      valid = false
   } else{
      emailInput.classList.remove('false')
   }

   if(phoneInput.value.trim() === ''){
      phoneInput.classList.add('false')
      valid = false
   } else{
      phoneInput.classList.remove('false')
   }

   if(dateInput.value.trim() === ''){
      dateInput.classList.add('false')
      valid = false
   } else{
      dateInput.classList.remove('false')
   }

   if(timeInput.value.trim() === ''){
      timeInput.classList.add('false')
      valid = false
   } else{
      timeInput.classList.remove('false')
   }

   if(guestInput.value.trim() === ''){
      guestInput.classList.add('false')
      valid = false
   } else{
      guestInput.classList.remove('false')
   }

   if(valid === true){
      form.submit()
   }
})

inputs.forEach((input) => {
   input.addEventListener('input', () => {
      if(input.value.trim() !== '') {
         input.classList.remove('false')
      }
   })
})

