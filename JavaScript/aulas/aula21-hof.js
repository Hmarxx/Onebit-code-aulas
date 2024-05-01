const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

  // Função: MAP
  // "personagem" é um objeto criado que vai receber todos os nomes do objeto "nomes"

// const nomes = personagens.map(personagem => personagem.nome)
// console.table(nomes)

  // Função: FILTER
  // seleciona objetos de acordo com seu critério de true ou false, no caso selecionamos quem tinha a raça Orc e devolvemos um novo array

// const racas = personagens.filter(function (personagem){
//    return personagem.raca === "Orc"
// })

// console.table(racas)

// Função: REDUCE

/* const nivelTotal = personagens.reduce(function (valorAcumulado, personagem){
    return valorAcumulado + personagem.nivel
}, 0)
console.log(nivelTotal) */

/* const racas = personagens.reduce(function(valorAcumulado, personagem){
    if(valorAcumulado[personagem.raca]){
        valorAcumulado[personagem.raca].push(personagem)
    } else {
        valorAcumulado[personagem.raca] = [personagem]
    }
    return valorAcumulado
}, {}) */

//console.log(racas)

const ordem = personagens.sort(function(a, b){
    return a.nivel - b.nivel
})

console.log(ordem)



