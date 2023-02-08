var fomr = document.querySelector("#form-tarefa");

function novaTarefa() {
    var nome = fomr.nomeTarefa.value;
    var data = fomr.data.value

    if(nome == '') {
        alert('por favor adiciona o nome da Tarefa');
    } else {
        fomr.reset();
        adicionaTarefa(nome, data);
    }
}