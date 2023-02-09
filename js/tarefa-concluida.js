function procuraInput() {
    var tarefa = document.querySelector('.tarefas');
    var input = tarefa.querySelectorAll('#confirmacao');
    validaInput(input);
}

function validaInput(input) {
    input.forEach(function(elemento){
        if(elemento.checked) {
            var paiDoElemento = elemento.parentNode;
            paiDoElemento.classList.add('concluido');
        }
        
        else if(elemento.checked == false){
            var elementoPai = elemento.parentNode;
            elementoPai.classList.remove('concluido');
        }
    });
    
}