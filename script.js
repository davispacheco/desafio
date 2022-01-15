const botao = document.querySelector('button');
const condicao = {1: document.querySelector('#status1'), 2: document.querySelector('#status2'), 3: document.querySelector('#status3')};
const especie = {1: document.querySelector('#especie1'), 2: document.querySelector('#especie2'), 3: document.querySelector('#especie3')};
const imagem = {1: document.querySelector('#imagem1'), 2: document.querySelector('#imagem2'), 3: document.querySelector('#imagem3')};
const nomeDoPersonagem = {1: document.querySelector('#nome1'), 2: document.querySelector('#nome2'), 3: document.querySelector('#nome3')};

traduzirCondicao = (data) => {
    if(data.status == 'unknown'){
        return 'Não sabemos.';
    }else if(data.status == 'Alive'){
        return 'Sim.';
    }else {
        return 'Não, está morto.';
    }
}

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
};

pegarTresPersonagens = () => {
    (async function () {
        for(var cont=0; cont<3; cont++) {
            await pegarPersonagem(cont);
        }
    }())
}
