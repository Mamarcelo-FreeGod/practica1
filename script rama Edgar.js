let indice = 0; // contador para las fuentes
const fuentes = ["Arial, sans-serif", "Courier New, monospace", "Georgia, serif"];
function cambiarEstilo() {
    indice = (indice + 1) % fuentes.length; // rotar entre 0,1,2
    const nuevaFuente = fuentes[indice];

    document.getElementById("titulo").style.fontFamily = nuevaFuente;
    document.getElementById("parrafo").style.fontFamily = nuevaFuente;
}
