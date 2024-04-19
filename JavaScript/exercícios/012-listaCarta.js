const cartas = ["c1", "c2", "c3", "c4"]

for(let i = 0; i<=3;){
let escolha = parseFloat(prompt(`Olá! Estas são as cartas disponíveis:
    ${cartas}
Escolha uma opção:
    1. Adicionar uma carta
    2. Escolher uma carta
    3. Sair`))

if(escolha === 1){
    let qual = prompt("Qual carta você deseja adicionar?")
    cartas.unshift(qual)
    alert(`Agora as cartas disponíveis são: ${cartas}`)
} else if(escolha === 2){
    alert(`Você escolheu a carta: ${cartas[0]}`)
} else{
    break
}
}