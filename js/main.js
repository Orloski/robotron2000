const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    
    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    }
    else{
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatistica(peca){
    estatistica.forEach(  (elemento) =>{
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

const listaDeCores = document.querySelectorAll(".cor");

for(let i = 0; i < listaDeCores.length; i++) {
    const cor = listaDeCores[i];
    const cores = cor.classList[1];
    console.log(cores)
    const robotron = document.querySelector(".robo");

    cor.onclick = function() {
        robotron.setAttribute(`src`,`cores_robos/${cores}/robotron.png`);
    }
}