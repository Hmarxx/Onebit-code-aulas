let dinheiro = 0;
let acoes = 0;
let adicionar = 0;
let subtrair = 0;

dinheiro = parseFloat(prompt(`Quanto dinheiro você tem disponível?`))

do {
    
    acoes = parseFloat(prompt(`Você possui R$${dinheiro}. \n O que deseja fazer? \n 1- adicionar \n 2- Subtrair dinheiro \n 3- Sair`))

    switch(acoes){
        case 1:
            adicionar = parseFloat(prompt(`Quanto quer adicionar?`))
            dinheiro += adicionar
            break
        
        case 2:
            subtrair = parseFloat(prompt(`Quanto quer subtrair?`))
            dinheiro -= subtrair
            break
        
        case 3:
            break;
        
        }

}while(acoes < 3)