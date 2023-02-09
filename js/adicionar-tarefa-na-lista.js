var listaTarefas = document.querySelector('.tarefas');
var resgataIdDiv = []
function criaTagDiv(id) {
    var tagDiv = document.createElement('div');
    tagDiv.setAttribute('id', ""+id+"")
    tagDiv.classList.add('tarefa');
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

function criaTagP2(data) {
    var tagP = document.createElement('p');
    tagP.classList.add('data-tarefa');
    tagP.textContent = data;
    return tagP;
}

function criaTagInput() {
    var tagInput = document.createElement('input');
    tagInput.type = 'checkbox';
    tagInput.setAttribute("id", "confirmacao");
    tagInput.onclick = procuraInput;
    return tagInput;
}

function mostraTarefaNaTela(NomeT, dataT, idDiv) {
    var tagDiv = criaTagDiv(idDiv);

    var tagP = criaTagP(NomeT);
    var tagBotao = criaTagBotao();
    var tagPdata = criaTagP2(dataT);
    var tagInput = criaTagInput();

    tagDiv.appendChild(tagP);
    tagDiv.appendChild(tagBotao);
    tagDiv.appendChild(tagPdata);
    tagDiv.appendChild(tagInput);

    listaTarefas.appendChild(tagDiv);

    atualizaTarefas(listaTarefas);
    return tagDiv;
}

function adicionaTarefa(nome, data) {
    var nomeTarefa = nome;
    var dataTarefa = data;
    salvaTarefa(nomeTarefa, dataTarefa); // salva a tarefa atual no localstorage e chama indiretamente a função mostraTarefaNaTela();
}