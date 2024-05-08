const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    } , "")
    alert(vagasEmTexto)
}

function novaVaga(){
    const nome = prompt('Qual o nome da vaga?')
    const descricao = prompt('Anote uma pequena descrição da vaga.')
    const dataLimite = prompt('Qual a data limite?')

    const confirmacao = confirm(`Deseja criar uma vaga com estas informações?\n 1. Nome: ${nome}\n 2. Descrição: ${descricao}\n 3. Data limite: ${dataLimite}`)

    if(confirmacao){
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert('Vaga criada!')
    }
}

function exibirVaga(){
    const indice = prompt('Qual o índice da vaga que você deseja consultar?')
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "")
    alert(`A vaga contém essas informações.\n
    - Índice: ${indice}\n
    - Nome: ${vaga.nome}\n
    - Descrição: ${vaga.descricao}\n
    - Data limite: ${vaga.dataLimite}\n
    - Quantidade de candidatos: ${vaga.candidatos.length}\n
    - Nome dos candidatos: ${candidatosEmTexto}`)
}

function inscreverCandidato() {
    const candidato = prompt("Qual o nome do candidato?")
    const indice = prompt("Qual o índice da vaga que ele deseja se candidatar?")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
      )
    if(confirmacao){
        vaga.candidatos.push(candidato)
        alert(`Inscrição realizada`)
    }
}

function excluirVaga(){
    const indice = prompt(`Qual o índice da vaga que você deseja excluir?`)
    const vaga = vagas[indice]
    const confirmacao = confirm(`Deseja realmente excluir esta vaga?\n
    - Nome: ${vaga.nome}\n
    - Descrição: ${vaga.descricao}\n
    - Data limite: ${vaga.dataLimite}\n`)

    if(confirmacao){
        vagas.splice(indice, 1)
        alert('Vaga excluída!')
    }
}

function exibirMenu(){
    const opcao = parseFloat(prompt(`SISTEMA DE VAGAS DE EMPREGO:\n 1- Listar vagas disponíveis\n 2- Criar uma nova vaga\n 3- Visualizar uma vaga\n 4-Inscrever um candidato em uma vaga\n 5- Excluir uma vaga\n 6- Sair`))

    return opcao
}

function executar(){
    let opcao = ""

    do{
        opcao = exibirMenu()

        switch(opcao){
            case 1: listarVagas()
                break

            case 2: novaVaga()
                break

            case 3: exibirVaga()
                break

            case 4: inscreverCandidato()
                break

            case 5: excluirVaga()
                break

            case 6: alert('Encerrando')
                break

            default: alert('Tente outra opção.')
                break
        }

    }while(opcao != 6)
}

executar()