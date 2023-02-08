var ativaFormulario = document.querySelector("#botao-adicionar-tarefa");
var formulario = document.querySelector("#form-tarefa");

ativaFormulario.addEventListener('click', function() {
    formulario.style.display = 'flex'
    this.style.display = 'none';
});