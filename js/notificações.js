var dataDaNotificação = [];
var dataAtual = new Date();
dataDaNotificação = JSON.parse(localStorage.getItem('lista'));

if(window.Notification && Notification.permission !== 'denied') {
    let n = new Notification('To-Do Tarefas', {
        body: 'Olá Usuário',
        icon: '../icones/tarefas.png'
    })
}