var listas = []

function salvaTarefa(nomeTarefa, dataTarefa) {

    var newTarefa = {
        nome: nomeTarefa,
        data: dataTarefa
    }

    if(localStorage.lista) {
        listas = JSON.parse(localStorage.getItem('lista'));
    } else {
        localStorage.lista = JSON.stringify(listas);
    }
    listas.push(newTarefa);
    localStorage.lista = JSON.stringify(listas);
    location.reload();

}

function imprimiTarefa() {
    if(localStorage.lista) {
        listas = JSON.parse(localStorage.getItem('lista'));

        listas.forEach(element => {
            mostraTarefaNaTela(element.nome, element.data);
        });
    }
}

imprimiTarefa()

