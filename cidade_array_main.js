const readlineSync = require('readline-sync')
const Cidade = require('./cidade_class')

console.log("==================")
console.log("  Dados da Cidade e da Populacao")

let nome = readlineSync.question('Digite o nome da Cidade : ')
let estado = readlineSync.question('Digite o estado da Cidade : ')
let numPopulacao = Number(readlineSync.question('Digite a populacao da Cidade : '))
let numHomens = Number(readlineSync.question('Digite o numero de homens da Cidade : '))
let numMulheres = Number(readlineSync.question('Digite o numero de mulheres da Cidade : '))

const cidade1 = new Cidade(nome, estado, numPopulacao, numHomens, numMulheres)

let homensPercentual = cidade1.porcentualHomens()
let mulheresPercentual = cidade1.porcentualMulheres()

console.log("===============")
console.log(" Resultado sobre os dados da Cidade")
console.log("===============")
console.log(`O percentual de mulheres é ${mulheresPercentual.toFixed(2)}% de ${numPopulacao} habitantes `)
console.log(`O percentual de homens é ${homensPercentual.toFixed(2)}% de ${numPopulacao} habitantes `)

homensPercentual.stylecolor = 'green'
mulheresPercentual.style = 'yellow'


