const resultado = prompt("escolha uma alternativa:\na \nb \nc")

const numerico = parseFloat(resultado)

switch(numerico){
    case 1:
        alert(`O resultado é 'a'`)
        break
    case 2:
        alert(`O resultado é 'b'`)
        break
    case 3:
        alert(`O resultado é 'c'`)
    default:
        alert('Finalizando...')
        break
}