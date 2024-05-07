
let listaDeVagas = []

for (let i = 0; i < 3; i++) {
    let vagas = {
        nome: i,
        descricao: i,
        dataLimite: i,
        nomeCandidatos: i
    }
    listaDeVagas.push(vagas)    
}


console.log(listaDeVagas)