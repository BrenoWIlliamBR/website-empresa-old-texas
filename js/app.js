const secaoBoasVindas = document.querySelector('.boas-vindas');  
const pontosCarrossel = document.querySelectorAll('.ponto');

const imagensFundo = [
    'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
    'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
    'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
];

let indiceAtual = 0;

function mudarFundo(indice) {
    pontosCarrossel.forEach(ponto => ponto.classList.remove('ativo'));
    
    pontosCarrossel[indice].classList.add('ativo');
    
    secaoBoasVindas.style.background = imagensFundo[indice];
    secaoBoasVindas.style.backgroundPosition = 'center';
    secaoBoasVindas.style.backgroundSize = 'cover';
}

setInterval(() => {
    indiceAtual = (indiceAtual + 1) % imagensFundo.length;
    mudarFundo(indiceAtual);
}, 5000);

pontosCarrossel.forEach((ponto, indice) => {
    ponto.addEventListener('click', () => {
        indiceAtual = indice;
        mudarFundo(indiceAtual);
    });
});

const formularioReserva = document.getElementById('formulario-reserva');

if (formularioReserva) {
    formularioReserva.addEventListener('submit', (evento) => {
        evento.preventDefault();
        
        alert('Sua mesa foi reservada com sucesso. Aguardamos você no Old Texas!');
        
        formularioReserva.reset();
    });
}