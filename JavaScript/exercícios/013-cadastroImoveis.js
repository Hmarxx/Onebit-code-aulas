
let imoveisCadastrados = []
let opcoes = ""
        

do{
    opcoes = parseFloat(
        prompt(`Cadastro de imóveis.
        Temos ${imoveisCadastrados.length} cadastrados.
        Escolha o que deseja fazer:
        1. Cadastrar um imóvel.
        2. Mostrar imóveis cadastrados.
        3. Sair.`))

        

        switch(opcoes){
            case 1:
                let salvarImovel = {
                nome: prompt("Qual o nome do proprietário do imóvel?"),
                quartos: prompt("Qual a quantidade de quartos?"),
                banheiros:prompt("Quantos banheiros tem?"),
                garagem: prompt("Possui garagem?")}

                

                const confirma = confirm(
                    `Deseja salvar as informações deste imóvel?\n-Proprietário: ${salvarImovel.nome} \n-Quartos: ${salvarImovel.quartos}\n-Banheiros: ${salvarImovel.banheiros} \n-Garagem: ${salvarImovel.garagem}`
                )

                if(confirma){
                    imoveisCadastrados.push(salvarImovel)
                    alert("Imóvel salvo com sucesso!")
                } else{
                    alert("Voltando ao menu!")
                }
                break

            case 2:
                for(let i = 0; i<imoveisCadastrados.length; i++){
                    alert(`Estes são os imóveis cadastrados:
                    -Imóvel: ${i+1}
                    -Proprietário: ${imoveisCadastrados[i].nome}
                    -Quartos: ${imoveisCadastrados[i].quartos}
                    -Banheiros: ${imoveisCadastrados[i].banheiros}
                    -Garagem: ${imoveisCadastrados[i].garagem}`)
                }
                break

            case 3:
                alert("Encerrando...")
                break

            default:
                alert("Tente um dos números das opções!")
                break
            
        }

}while(opcoes<3)