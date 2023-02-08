var tabela;
function atualizaTarefas(tarefa) {
    tabela = tarefa;
    buscaTarefa(tabela);
    return tarefa;
}

function buscaTarefa(tarefa) {
    var botaoDeletarTarefa = tarefa.querySelectorAll('#botao-deletar-tarefa');
    //console.log(botaoDeletarTarefa);

    botaoDeletarTarefa.forEach(function(botao){
        botao.addEventListener('click', function() {
            var paidoBotao = botao.parentNode;
            paidoBotao.remove();
        })
    });
}
