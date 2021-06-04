// Unidade 1 / Aula 1 / Topico 5
// Mapa do Brasil 1

function toggleLegenda(item) {
    var texto = document.getElementById(item)

    if (texto.style.opacity == 0) {
        texto.style.opacity = '1'
    } else {
        texto.style.opacity = '0'
    }
}