let amigos = [];

function adicionarAmigo(){
    let campoNome = document.querySelector('input');
    if (campoNome.value === ''){
        alert('Por favor, insira um nome.');
    }else{
        amigos.push(campoNome.value);
        limparCampo();
        atualizarlista();
    }

}


function limparCampo() {
    campoNome = document.querySelector('input');
    campoNome.value = '';
}
function atualizarlista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++){
        campoNome = amigos[i];
        let itemlista = document.createElement('li');
        itemlista.textContent = amigos[i];
        lista.appendChild(itemlista);
    }
}
function sortearAmigo() {
    if(amigos.length === 0){
        alert('Você precisa adicionar amigos para sortear');
    }
    let totalamigos = amigos.length;
    let indiceSorteado = Math.floor(Math.random() * totalamigos);
    let nomeSorteado = amigos[indiceSorteado];
    let elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `O nome sorteado é: ${nomeSorteado}`;
    
}
