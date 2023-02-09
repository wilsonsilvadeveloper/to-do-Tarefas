var tabela;
function atualizaTarefas(tarefa) {
    tabela = tarefa;
    buscaTarefa(tabela);
    return tarefa;
}

function buscaTarefa(tarefa) {
    var botaoDeletarTarefa = tarefa.querySelectorAll('#botao-deletar-tarefa');
    var idDivs = document.querySelectorAll('div');
    var resgataTarefa = []
    resgataTarefa = JSON.parse(localStorage.getItem('lista'));
    
    botaoDeletarTarefa.forEach(function(botao){
        botao.addEventListener('click', function() {
        
            var paidoBotao = botao.parentNode;
            console.log('id = ' + paidoBotao.id);

            resgataTarefa.forEach(function(item){
                if(paidoBotao.id == item.id) {
                    var itemRemovido = resgataTarefa.splice(item.id)
                    console.log('id = ' + item.id)
                    console.log(itemRemovido);
                    console.log(resgataTarefa);
                    localStorage.lista = JSON.stringify(resgataTarefa);
                    paidoBotao.remove();
                }
            })
            
        })
    });
}

