let opcoes = ""
let base = ""
let altura = ""
let lado = ""
let baseMaior = ""
let baseMenor = ""
let raio = ""

function triangulo(base, altura){
    let areaT = (base * altura)/2
    return areaT
}

function retangulo(base, altura){
    let areaR = (base * altura)
    return areaR
}

function quadrado(lado){
    let areaQ = Math.pow(lado, 2)
    return areaQ
}

function trapezio(baseMaior, baseMenor, altura){
    let areaTra = ((baseMaior + baseMenor) * altura)/2
    return areaTra
}

function circulo(raio, pi = 3.14){
    let areaC = pi * Math.pow(raio, 2)
    return areaC
}

do{

    opcoes = parseFloat(prompt(`Escolha o cálculo que você deseja fazer:\n 1. Área do triângulo\n 2. Área do retangulo\n 3. Área do quadrado\n 4. Área do trapézio\n 5. Área do círculo\n 6. Sair`))
    
    switch(opcoes){
        case 1: 
            base = parseFloat(prompt("O valor da base é: "))
            altura = parseFloat(prompt("O valor da altura é: "))
            alert(`A área do triângulo de base ${base} e altura ${altura} é ${triangulo(base, altura)}`)
            break

        case 2:
            base = parseFloat(prompt("O valor da base é: "))
            altura = parseFloat(prompt("O valor da altura é: "))
            alert(`A área do retângulo de base ${base} e altura ${altura} é ${retangulo(base, altura)}`)
            break

        case 3:
            lado = parseFloat(prompt("Qual o lado do quadrado?"))
            alert(`A área do quadrado de lado ${lado} é igual a ${quadrado(lado)}`)
            break

        case 4:
            baseMaior = parseFloat(prompt("O valor da base maior é: "))
            baseMenor = parseFloat(prompt("O valor da base menor é: "))
            altura = parseFloat(prompt("O valor da altura é: "))
            alert(`A área do trapézio de bases ${baseMaior} e ${baseMenor} é igual a ${trapezio(baseMaior, baseMenor, altura)}`)
            break

        case 5:
            raio = parseFloat(prompt("O valor do raio é: "))
            alert(`A área do círculo de raio ${raio} é igual a ${circulo(raio)}`)
            break

        case 6:
            alert("Encerrando...")
            break

        default:
            alert("Tente outra opção!")
            break

    }

}while(opcoes != 6)
