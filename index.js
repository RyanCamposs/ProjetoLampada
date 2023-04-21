const lampadaOn = document.getElementById('lampadaOn');
const lampadaOff = document.getElementById('lampadaOff');
const lampada = document.getElementById('lampada');

function ligar() {
    lampada.src = 'imagens/ligada.jpg';
}

function desligar() {
    lampada.src = 'imagens/desligada.jpg'
}

function quebrar() {
    lampada.src = 'imagens/quebrada.jpg'
}

lampada.addEventListener ('mouseover', ligar);
lampada.addEventListener ('mouseleave', desligar)
lampada.addEventListener ('dblclick', quebrar);