const pacientes = ["mateus", "marcos", "lucas", "joão"]
let add = ""
let remove = ""


for(let i = 0; i<=3;){
    let opcao = parseFloat(prompt(`Esta é a fila de espera:
    1. ${pacientes[0]}
    2. ${pacientes[1]}
    3. ${pacientes[3]}
    4. ${pacientes[2]} \n
Escolha o que fazer:
    1. Novo paciente
    2. Consultar paciente
    3. Sair
`))

if(opcao === 1){
    add = prompt("Digite o nome do paciente")
    pacientes.push(add)
    alert(`Agora restam os pacientes ${pacientes}`)
    
    } else if (opcao === 2){
        remove = pacientes.shift()
        alert(`O paciente consultado foi: ${remove}`)
        
    } else {
        break
    }
}
    