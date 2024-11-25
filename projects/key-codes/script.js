const container = document.getElementById("keyContainer");
const mobileInput = document.getElementById("mobileInput");

// Función para generar el contenido dinámico
function generateHTML(key, code, keyCode) {
    return `
        <h4 class="animation">Key</h4>
        <div class="key-content animation">${key === " " ? "Space" : key}</div>

        <h4 class="animation">Code</h4>
        <div class="key-content animation">${code}</div>

        <h4 class="animation">Key Code</h4>
        <div class="key-content animation">${keyCode}</div>
    `;
}

// Inicializa con valores predeterminados
container.innerHTML = generateHTML("-", "-", "-");

// Detecta teclas en escritorio
window.addEventListener("keydown", (e) => {
    container.innerHTML = generateHTML(e.key, e.code, e.key.charCodeAt(0));
});

// Detecta teclas en móviles usando el campo de entrada
mobileInput.addEventListener("input", (e) => {
    const key = e.target.value.slice(-1); // Último carácter ingresado
    container.innerHTML = generateHTML(key, key, key.charCodeAt(0));
    e.target.value = ""; // Limpia el campo de entrada
});
