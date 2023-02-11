var listas = [];

function criaBanco() {
    if(localStorage.lista) {
        listas = JSON.parse(localStorage.getItem('lista'));
    } else {
        localStorage.lista = JSON.stringify(listas);
        console.log('banco de dados criado');
    }

}

criaBanco();
function salvaTarefa(nomeTarefa, dataTarefa) {

    var newTarefa = {
        id:0,
        nome: nomeTarefa,
        data: dataTarefa,
        concluido: false, 
    };

    var ResgataId = listas.length;
    newTarefa.id = ResgataId++;

    listas.push(newTarefa);
    localStorage.lista = JSON.stringify(listas);
    location.reload();

}

function imprimiTarefa() {
    if(localStorage.lista) {
        listas = JSON.parse(localStorage.getItem('lista'));

        listas.forEach(function(element) {
            var id = element.id;
            mostraTarefaNaTela(element.nome, element.data, id);
        });
    }
}

function validaChecked() {
    var tarefa = document.querySelector('.tarefas');
    var input = tarefa.querySelectorAll('#confirmacao');
    listas = JSON.parse(localStorage.getItem('lista'));

    listas.forEach(function(item) {
        input.forEach(function(entrada) {
            var DivLista = entrada.parentNode;
            if((item.concluido == true) && (item.id == DivLista.id)) {
                entrada.checked = true;
                DivLista.classList.add('concluido');
            }
        });
    });
}


imprimiTarefa();
validaChecked();

