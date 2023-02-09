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
        data: dataTarefa
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

imprimiTarefa()

