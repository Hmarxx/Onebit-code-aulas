const fila = []
let opcao = ""
do{

let pacientes = ""
let novoPaciente = ""
for(let i = 0; i < fila.length; i++){
    pacientes += (i + 1) + "º " + fila[i] + "\n"
}

opcao = parseFloat(
    prompt(
`Olá! Temos ${fila.length} pacientes na fila:
${pacientes}
O que você deseja fazer?
    1. Novo paciente
    2. Consultar paciente
    3. Sair`))

switch(opcao){
    case 1:
        novoPaciente = prompt("Qual o nome dele?")
        fila.push(novoPaciente)
        break
    case 2:
        alert(`O paciente consultado foi ${fila[0]}`)
        fila.shift()
        break
    case 3:
        alert("Encerrando...")
        break
    default:
        alert("Opção inválida!")
        break
}



} while(opcao<3)
