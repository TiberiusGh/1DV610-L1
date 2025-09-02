import { say } from 'cowsay'
import { randomSuperhero } from 'superheroes'

const skickaBtn = document.querySelector('button')
const welcomeText = document.querySelector('#welcomeText')
const inputContent = document.querySelector('input')

skickaBtn.addEventListener('click', () => {
  welcomeText.textContent = say({
    text:
      'Hello there ' +
      inputContent.value +
      '! \n' +
      'Your superhero name is: ' +
      randomSuperhero()
  })
  inputContent.value = ''
})
