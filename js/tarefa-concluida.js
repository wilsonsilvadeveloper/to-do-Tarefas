var tarefasFinalizadas = []
function procuraInput() {
    var tarefa = document.querySelector('.tarefas');
    var input = tarefa.querySelectorAll('#confirmacao');
    validaInput(input);
}

function validaInput(input) {
    tarefasFinalizadas = JSON.parse(localStorage.getItem('lista'));

    tarefasFinalizadas.forEach(function(finalizada) {
        input.forEach(function(elemento){
            if(elemento.checked) {
                var paiDoElemento = elemento.parentNode;
                paiDoElemento.classList.add('concluido');
                finalizada.concluido = true;
                localStorage.lista = JSON.stringify(tarefasFinalizadas);
            }
            
            else if(elemento.checked == false){
                var elementoPai = elemento.parentNode;
                elementoPai.classList.remove('concluido');
                finalizada.concluido = false;
                localStorage.lista = JSON.stringify(tarefasFinalizadas);
            }

        });

        
        
    })
    
    
}