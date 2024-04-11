const nome = prompt("Olá! Qual seu nome?")
const visitou = prompt("Você já visitou alguma cidade?")
let qntCidade = 0;
let cidade = [ ].join(', &nbsp');

if(visitou == "sim"){
    let cidade = [prompt("Qual cidade você visitou?")]
    qntCidade ++
    let outraCidade = confirm("Você visitou alguma outra cidade?")

        while(outraCidade == true){
            cidade.push(prompt("Qual?"))
            outraCidade = confirm("Visitou mais alguma?")
            qntCidade++
        }
        alert(`Você visitou ${qntCidade} cidades. Foram: ${cidade}`)
    } else {
        alert('Comece a visitar!!! :)')
    }
    


    

