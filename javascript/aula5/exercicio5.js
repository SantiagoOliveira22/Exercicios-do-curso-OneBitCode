let spaceship = prompt('Digite o nome da Nave: ')
let carac = prompt('Digite o caracter que deseja substituir: ')
let newCarac = prompt('Digite por qual caracter deseja substituir: ')
let newSpaceship = ''

for (let i = 0; i < spaceship.length; i++) {
  if (spaceship[i] == carac) {
    newSpaceship += newCarac
  } else {
    newSpaceship += spaceship[i]
  }
}

alert('O novo nome da nave é ' + newSpaceship)
