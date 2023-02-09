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
            resgataTarefa.forEach(function(item){
                if(paidoBotao.id == item.id) {
                    var itemRemovido = resgataTarefa.splice(item.id);
                    localStorage.lista = JSON.stringify(resgataTarefa);
                    paidoBotao.remove();
                }
            })
            
        })
    });
}

