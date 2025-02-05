function moverAleatoriamente() {
    var seccion = document.getElementById('container');
    var moverBoton = document.getElementById('btn-no');

    const anchoSeccion = seccion.offsetWidth;
    const altoSeccion = seccion.offsetHeight;

    const anchoBoton = moverBoton.offsetWidth;
    const altoBoton = moverBoton.offsetHeight;

    const xAleatorio = Math.random() * (anchoSeccion - anchoBoton);
    const yAleatorio = Math.random() * (altoSeccion - altoBoton);

    moverBoton.style.left = `${xAleatorio}px`;
    moverBoton.style.top = `${yAleatorio}px`;
}