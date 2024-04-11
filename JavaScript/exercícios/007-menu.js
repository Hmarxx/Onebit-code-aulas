let esfirras = 0;
do{ 
    esfirras = parseFloat(prompt(`Escolha seu sabor de esfirra: \n 1- carne \n 2- frango \n 3- calabresa \n 4- queijo \n 5- Encerrar`))
    
    if(esfirras === 1){
       alert(`Você escolheu esfirra de carne`)
    } else if(esfirras === 2){
        alert(`Você escolheu esfirra de frango`)
     } else if(esfirras === 3){
        alert(`Você escolheu esfirra de calabresa`)
     }
     else if(esfirras === 4){
        alert(`Você escolheu esfirra de queijo`)
     } else {
        alert("Menu encerrado!")
     }

} while(esfirras < 5)


