let numero = parseFloat(prompt(`Digite um número: `))
let resultados = 0;

for(let fator = 0; fator <= 20; fator++){
    let conta = numero * fator
    console.log(conta)
    resultados += `, ${conta}`

}
console.log(resultados)