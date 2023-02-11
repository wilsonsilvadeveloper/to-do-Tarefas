var tarefasFinalizadas = []
var i = 0;

function procuraInput() {
    tarefasFinalizadas = JSON.parse(localStorage.getItem('lista'));
    var tarefa = document.querySelector('.tarefas');
    var input = tarefa.querySelectorAll('#confirmacao');

    for(var indiceInput = 0; indiceInput < input.length; indiceInput++) {
        var idTarefa = tarefasFinalizadas[indiceInput].id;
        validaInput(input[indiceInput], idTarefa);
    }
}

function validaInput(input, idTarefa) {
    var paiDoElemento = input.parentNode;
    var idDoElementoPai = paiDoElemento.id;

    if(idTarefa == idDoElementoPai) {
        if(input.checked) {
            paiDoElemento.classList.add('concluido');
            tarefasFinalizadas[idTarefa].concluido = true;
            console.log(input);
        } else if(!input.checked) {
            paiDoElemento.classList.remove('concluido');
            tarefasFinalizadas[idTarefa].concluido = false;
        }
    }

    localStorage.lista = JSON.stringify(tarefasFinalizadas);
    
}