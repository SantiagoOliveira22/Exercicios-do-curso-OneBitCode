let pilot = prompt('Qual seu nome, piloto?')

let velocity = 0

let newVelocity = prompt('Digite a velocidade que deseja acelerar a nave:')

let confirmVelocity = confirm(
  'Confirme se deseja iniciar com velocidade: ' + newVelocity + 'km/s'
)

if (confirmVelocity) {
  velocity = newVelocity
}

if (velocity <= 0) {
  alert('Nave está parada. Considere partir e aumentar a velocidade')
} else if (velocity < 40) {
  alert('Você está devagar, podemos aumentar mais')
} else if (velocity < 80) {
  alert('Parece uma boa velocidade para manter')
} else if (velocity < 100) {
  alert('Velocidade alta. Considere diminuir')
} else {
  alert('Velocidade perigosa. Controle automático forçado')
}

alert('Piloto: ' + pilot + '\nVelocidade: ' + velocity + 'km/s')
