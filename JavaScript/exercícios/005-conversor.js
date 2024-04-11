const metros = parseFloat(prompt("Digite um valor em metros: "))
const conversor = parseFloat(prompt("Escolha qual para qual unidade você deseja transformar: \n1)milímetro(mm) \n2)centímetro(cm) \n3)decímetro(dm) \n4)decâmetro(dam) \n5)hectômetro(hm) \n6)Quilômetro(km)"))

switch (conversor){
    case 1:
        alert(`O valor em milímetros é ${metros*1000}mm`)
        break
        
    case 2:
        alert(`O valor em centímetros é ${metros*100}cm`)
        break

    case 3:
        alert(`O valor em decímetros é ${metros*10}dm`)
        break

    case 4:
        alert(`O valor em decâmetros é ${metros/10}dam`)
        break

    case 5:
        alert(`O valor em hectômetros é ${metros/100}hm`)
        break

    case 6:
        alert(`O valor em quilômetros é ${metros/1000}km`)
        break

    default:
        alert(`Opção inválida`)
        break

}
