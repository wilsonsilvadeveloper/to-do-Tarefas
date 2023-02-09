var listas = []

function salvaTarefa(nomeTarefa, dataTarefa) {

    if(localStorage.lista) {
        listas = JSON.parse(localStorage.getItem('lista'));
    } else {
        localStorage.lista = JSON.stringify(listas);
    }


    var newTarefa = {
        id:0,
        nome: nomeTarefa,
        data: dataTarefa,
        concluido: false, 
    }

    var ResgataId = listas.length;
    newTarefa.id = ResgataId++;

    listas.push(newTarefa);
    localStorage.lista = JSON.stringify(listas);
    location.reload();

}

function imprimiTarefa() {
    if(localStorage.lista) {
        listas = JSON.parse(localStorage.getItem('lista'));

        listas.forEach(element => {
            var id = element.id;
            console.log(id);
            mostraTarefaNaTela(element.nome, element.data, id);
        });
    }
}

function validaChecked() {
    console.log('executando valida checked');
    var tarefa = document.querySelector('.tarefas');
    var input = tarefa.querySelectorAll('#confirmacao');
    listas = JSON.parse(localStorage.getItem('lista'));

    listas.forEach(function(item) {
        input.forEach(function(entrada) {
            if(item.concluido == true) {
                entrada.checked = true;
                var DivLista = entrada.parentNode;
                DivLista.classList.add('concluido');
            }
        })
    })

    console.log('executado');
}


imprimiTarefa();
validaChecked();

