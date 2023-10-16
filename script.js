console.log("Hoja de Vida Interactiva Cargada");
document.getElementById('addSkill').addEventListener('click', function() {
    let newSkill = prompt("Introduce una nueva habilidad:");
    if (newSkill) {
        let ul = document.getElementById('skillsList');
        let li = document.createElement('li');
        li.textContent = newSkill;
        ul.appendChild(li);
    }
});
function solicitarCorreo() {
    let correo = prompt('Por favor, ingrese su correo electrónico:');
    if (correo) {
        alert(`Gracias ${correo}, me pondré en contacto contigo pronto!`);
    } else {
        alert('No ingresaste un correo electrónico.');
    }
}

const certificaciones = ["Curso A", "Curso B", "Taller C", "Seminario D"];
function mostrarCertificaciones() {
    let ul = document.getElementById('listaCertificaciones'); 

    for (let i = 0; i < certificaciones.length; i++) {
        let li = document.createElement('li');
        li.textContent = certificaciones[i];
        ul.appendChild(li);
    }
}

window.onload = mostrarCertificaciones;