import { say } from 'cowsay'
import { randomSuperhero } from 'superheroes'

const skickaBtn = document.querySelector('button') as HTMLButtonElement
const welcomeText = document.querySelector('#welcomeText') as HTMLPreElement
const inputContent = document.querySelector('input') as HTMLInputElement

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
