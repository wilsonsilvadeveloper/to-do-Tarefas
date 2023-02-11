function verificaTamanhoJanela() {
    var tamanho = document.documentElement.clientWidth;
    mudaLegenda(tamanho)
}

function mudaLegenda(tamanhoDaJanela) {
    var verificaTarefas = JSON.parse(localStorage.getItem('lista'));
    var LegendaNome = document.querySelector('#legenda-nome');
    var LegendaDeletar = document.querySelector('#legenda-deletar');
    var LegendaData = document.querySelector('#legenda-data');
    var LegendaConcluido = document.querySelector('#legenda-concluido');

    if(verificaTarefas.length > 0 ) {
        if(tamanhoDaJanela < 900) {
            LegendaNome.textContent = 'Nome';
            LegendaDeletar.textContent = 'Excluir';
            LegendaData.textContent = 'Conclusão';
        } else {
            LegendaNome.textContent = 'Nome da Tarefa';
            LegendaDeletar.textContent = 'Deletar Tarefa';
            LegendaData.textContent = 'Data de Conclusão';
        }
    }
    


}

setInterval(verificaTamanhoJanela, 500);