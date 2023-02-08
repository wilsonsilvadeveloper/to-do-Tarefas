var listaTarefas = document.querySelector('.tarefas');

function criaTagDiv() {
    var tagDiv = document.createElement('div');
    tagDiv.classList.add('tarefa');
    //console.log(tagDiv);
    return tagDiv;
}

function criaTagP(nome) {
    var tagP = document.createElement('p');
    tagP.classList.add('nome-tarefa');
    tagP.textContent = nome;
    return tagP;
}

function criaTagBotao() {
    var tagBotao = document.createElement('button');
    tagBotao.type = 'button';
    tagBotao.setAttribute("id", "botao-deletar-tarefa");
    tagBotao.textContent = 'X';
    //console.log(tagBotao);
    return tagBotao;
}

function criaTagInput() {
    var tagInput = document.createElement('input');
    tagInput.type = 'checkbox';
    tagInput.setAttribute("id", "confirmacao");
    tagInput.onclick = procuraInput;
    return tagInput;
}

function adicionaTarefa(nomeTarefa) {
    var tagDiv = criaTagDiv();
    var tagP = criaTagP(nomeTarefa);
    var tagBotao = criaTagBotao();
    var tagInput = criaTagInput();

    tagDiv.appendChild(tagP);
    tagDiv.appendChild(tagBotao);
    tagDiv.appendChild(tagInput);

    console.log(tagDiv);
    listaTarefas.appendChild(tagDiv);

    atualizaTarefas(listaTarefas);
}