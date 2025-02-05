//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const amigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function exibirMensagemInicial(){
    exibirTextoNaTela('#titulo', 'Amigo Secreto');
    exibirTextoNaTela('#subtitulo', 'Digite o nome dos seus amigos');   
}

exibirMensagemInicial();

function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();
    if (nome) {
        amigos.push(nome);
        atualizarLista();
        nomeInput.value = '';
    }
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    exibirTextoNaTela('#resultado', `O amigo secreto sorteado é: ${sorteado}`);
}

document.addEventListener('DOMContentLoaded', function() {
    exibirMensagemInicial();
});
