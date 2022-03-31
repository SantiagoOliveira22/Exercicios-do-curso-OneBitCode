let name_old = prompt('Dígite seu nome, pessoa mais velha: ')
let age1 = prompt('Dígite sua idade: ')

let name_new = prompt('Dígite seu nome, pessoa mais nova: ')
let age2 = prompt('Dígite sua idade: ')

let calcDiferencaIdade = age1 - age2

alert(
  'Pessoa mais velha: ' +
    name_old +
    '\n Sua Idade: ' +
    age1 +
    '\n\nPessoa mais nova: ' +
    name_new +
    '\n Sua Idade: ' +
    age2 +
    '\n\nDiferença de idade entre ambas: ' +
    calcDiferencaIdade +
    '\nanos'
)
