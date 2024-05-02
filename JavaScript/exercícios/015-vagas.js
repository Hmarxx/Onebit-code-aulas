// MENU
let menu = ""

let quantidadeCandidatos = [5, 10]
let nomeCandidatos = []
let descrição = []
let dataLimite = []
let nomeVaga = ["eu", "vc"]
let vagasDisponiveis = {nomeVaga, dataLimite, descrição, nomeCandidatos, quantidadeCandidatos}


let listaDeVagas = ""
let numeroDeCandidatos = ""

do{
    menu = parseFloat(prompt(`SISTEMA DE VAGAS DE EMPREGO:\n 1- Listar vagas disponíveis\n 2- Criar uma nova vaga\n 3- Visualizar uma vaga\n 4-Inscrever um candidato em uma vaga\n 5- Excluir uma vaga\n 6- Sair`))

    // FUNCIONALIDADE DE CADA OPÇÃO
    switch(menu){
        // Listar vagas disponíveis
        case 1:
            listaDeVagas = vagasDisponiveis.nomeVaga.forEach((element, index, array) => {
                 console.log(`Vagas disponíveis:\n Nome da vaga: ${element}\n Índice: ${index+1}\n Lista: ${array}\n Quantidade de candidatos: ${vagasDisponiveis.quantidadeCandidatos[index]}`)
            });
            break

        // Criar nova vaga
        case 2:
            break
        
        // Visualizar uma vaga
        case 3:
            break
        
        // Inscrever um candidato em uma vaga
        case 4:
            break
        
        // Excluir uma vaga
        case 5:
            break

        // Sair
        case 6:
            alert("Encerrando...")
            break
        default:
            alert("Tente novamente!")
            break
    }
}while(menu !== 6 )