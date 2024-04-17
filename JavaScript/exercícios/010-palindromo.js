let palavra = prompt(`Digite uma palavra: `)

let palavraContrario = ""

for(let i = palavra.length-1; i>=0; i--){
    palavraContrario += palavra[i]
}
if(palavraContrario === palavra){
    alert("É palíndromo!")
} else {
    alert(`Essa é a palavra ao contrário: ${palavraContrario}`)
}
  