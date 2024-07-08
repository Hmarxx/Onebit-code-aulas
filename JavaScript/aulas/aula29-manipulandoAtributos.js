const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function(){
    input.value = "Olá, mundo!"
    console.log(input.value)
    console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener('click', function(){
    input.type = input.type !== 'date' ? 'date' : 'text'
})

document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = 'Digite algo...'
})

document.getElementById('disable').addEventListener('click', function(){
    input.setAttribute('disable', !input.disable)
})

document.getElementById('data').addEventListener('click', function(){
    const data = input.dataset.somethingElse
    console.log("O valor do atributo data-something-else é: " + data)
    input.dataset.somethingElse = 'Algum outro valor'
    console.log("O valor do atributo data-something-else é: " + input.dataset.somethingElse)
})
