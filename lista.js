function addItem(){
    const inputItem = document.querySelector('[data-form-input]')
    const valorItem = inputItem.value

    const listaDeItems = document.querySelector('[data-task]')

    novaLabel = document.createElement('label')
    novaLabel.innerText = valorItem
    
    novoItem = document.createElement('li')

    // novoItem.appendChild(criarBotaoConcluir())
    novoItem.appendChild(novaLabel)
    // novoItem.appendChild(criarBotaoDelete())

    listaDeItems.appendChild(novoItem)

    inputItem.value = ""
}
