let amigos = [];
let sorteados = [];

function gravarNomeDosAmigos() {
    let input = document.querySelector('#amigo');
    let lista = document.querySelector('#listaAmigos');

    if (!input.value.trim()) {
        return alert('Digite um nome válido!');
    }

    amigos.push(input.value); // Adiciona o nome à lista de amigos
    let novoItem = document.createElement('li');
    novoItem.textContent = input.value;
    lista.appendChild(novoItem); // Adiciona dinamicamente à lista

    input.value = ''; // Limpa o campo de entrada
    input.focus();
}

function formatarNumeroOrdinalExtenso(numero) {
    const ordinais = ["primeiro", "segundo", "terceiro", "quarto", "quinto", "sexto", "sétimo", "oitavo", "nono", "décimo"];
    return ordinais[numero - 1] || `${numero}º`; // Se ultrapassar 10, usa "11º", "12º", etc.
}

function sortearAmigo() {
    if (amigos.length === 0) {
        return alert('Adicione pelo menos um nome antes de sortear!');
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos.splice(indiceSorteado, 1)[0]; // Remove o sorteado da lista
    sorteados.push(sorteado); // Adiciona o sorteado à lista de sorteados

    mostrarSequenciaFinal();
}

function mostrarSequenciaFinal() {
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = sorteados.map((nome, index) => {
        let ordemExtenso = formatarNumeroOrdinalExtenso(index + 1);
        return `O ${ordemExtenso} nome sorteado foi: <strong style="color: red;">${nome}</strong>`;
    }).join('<br>');
}

function novoSorteio() {
    amigos = [];
    sorteados = [];
    document.querySelector('#listaAmigos').innerHTML = ''; // Limpa a lista na tela
    document.querySelector('#resultado').innerHTML = ''; // Limpa o resultado do sorteio
    document.querySelector('#amigo').value = ''; // Limpa o campo de entrada
    document.querySelector('#amigo').focus(); // Foca novamente no input
    alert("Novo jogo iniciado! Adicione novos amigos.");
}
