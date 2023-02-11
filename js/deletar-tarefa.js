var tabela;
function atualizaTarefas(tarefa) {
    tabela = tarefa;
    buscaTarefa(tabela);
    return tarefa;
}

function buscaTarefa(tarefa) {
    var botaoDeletarTarefa = tarefa.querySelectorAll('#botao-deletar-tarefa');
    var resgataTarefa = []
    resgataTarefa = JSON.parse(localStorage.getItem('lista'));
    
    botaoDeletarTarefa.forEach(function(botao){
        botao.addEventListener('click', function() {
        
            var paidoBotao = botao.parentNode;
            var itemParaRemover = resgataTarefa.filter(tarefa => tarefa.id != paidoBotao.id)
            var tarefasAtualizas = itemParaRemover;
            localStorage.lista = JSON.stringify(tarefasAtualizas);
            paidoBotao.remove();
            console.log(itemParaRemover);
            
        })
    });
}

