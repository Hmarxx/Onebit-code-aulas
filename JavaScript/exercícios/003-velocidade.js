let carro1 = prompt("Digite o nome do primeiro carro: ")
let carro2 = prompt("Digite o nome do segundo carro: ")
let vel1 = parseFloat(prompt("Digite a velocidade do carro 1:"))
let vel2 = parseFloat(prompt("Digite a velocidade do carro 2:"))

if(vel1>vel2){
    console.log(`O ${carro1} é mais rápido que ${carro2}.`)
} else if(vel1<vel2){
    console.log(`O ${carro2} é mais rápido que ${carro1}.`)
} else if(vel1==vel2){
    console.log(`Os dois carros tem a mesma velocidade.`)
}