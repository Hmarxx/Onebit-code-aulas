        let n1 = parseFloat(prompt("Digite um número:"))
        let n2 = parseFloat(prompt("Digite outro número:"))

        let adicao = n1 + n2;
        let subtracao = n1- n2;
        let multiplicacao = n1 * n2;
        let divisao = n1/n2;

        document.write(`O cálculo da soma é este: ${n1} + ${n2} = ${adicao}. <br>`)
        document.write(`O cálculo da subtração é este: ${n1} - ${n2} = ${subtracao}. <br>`)
        document.write(`O cálculo da multiplicação é este: ${n1} x ${n2} = ${multiplicacao}. <br>`)
        document.write(`O cálculo da divisão é este: ${n1} : ${n2} = ${divisao}. <br>`)