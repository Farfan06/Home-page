//Drop Menu--------------------------------------------------------------------------------------------------
function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block'; 
}

function cerrarSesion() {
    alert('Has cerrado sesión');
    location.href = 'ingresa.html';
}

//Carrusel de imagenes--------------------------------------------------------------------------------------
let index = 0;

function mostrarImagen() {
    const imagenes = document.querySelectorAll('.carrusel-imagenes img');
    if (index >= imagenes.length) {
        index = 0;
    } else if (index < 0) {
        index = imagenes.length - 1;
    }
    const desplazamiento = -index * 100;
    document.querySelector('.carrusel-imagenes').style.transform = `translateX(${desplazamiento}%)`;
}

function cambiarImagen(direccion) {
    index += direccion;
    mostrarImagen();
}

setInterval(() => {
    index++;
    mostrarImagen();
}, 3000);
