function addPlayer(){
    const nome = document.getElementById('nome').value
    const posicao = document.getElementById('posicao').value
    const numero = document.getElementById('numero').value

    const confirmation = confirm(`Deseja adicionar ${nome} ao time?`)

    if(confirmation){
        const team = document.getElementById('team')
        const playerItem = document.createElement('li')
        playerItem.id = "player-" + numero
        playerItem.innerText = `${posicao} ${nome} (${numero})`
        team.appendChild(playerItem)
        document.getElementById('nome').value = ""
        document.getElementById('posicao').value = ""
        document.getElementById('numero').value = ""
    }
}

function removePlayer(){
    const number = document.getElementById('numberRemove').value
    const numberRemove = document.getElementById('player-' + number)

    const confirmation = confirm('Deseja remover o número ' + number + '?')
    if(confirmation){
        document.getElementById('team').removeChild(numberRemove)
        document.getElementById('numberRemove').value = ''
    }


}