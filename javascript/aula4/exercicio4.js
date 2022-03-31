let warpCount = 0
let chosenOption = ''

let spaceShip = prompt('Digite o  nome da Nave')

chosenOption = prompt('Deseja entrar em dobra espacial?\n1- Sim \n2- Não')

while (chosenOption == '1') {
  warpCount += 1
  chosenOption = prompt('Deseja realizar a próxima dobra?\n1-Sim\n2-Não')
}

alert('Nave: ' + spaceShip + '\nQuantidade de dobras: ' + warpCount)
