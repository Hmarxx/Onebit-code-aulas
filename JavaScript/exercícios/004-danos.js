let atacante = prompt("Digite o nome do personagem que ataca:")
let poderAtaque = parseFloat(prompt("Qual seu poder de ataque?"))

let defensor = prompt("Digite o nome do defensor:")
let escudo = confirm("Tem escudo?")
let pontosVida = parseFloat(prompt("Quantos pontos de vida ele tem?"))
let poderDefesa = parseFloat(prompt("Qual seu poder de defesa?"))

let dano;

if(poderAtaque>poderDefesa && escudo == false){
    dano = poderAtaque - poderDefesa
} else if (poderAtaque>poderDefesa && escudo == true){
    dano = (poderAtaque - poderDefesa)/2
} else if(poderAtaque<=poderDefesa){
    dano = 0
}

let resto = pontosVida - dano;

console.log(`O dano causado por ${atacante} foi de ${dano}. Dos pontos de vida de ${defensor} agora restam ${resto}.`)
