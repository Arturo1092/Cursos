// Seleccionar elementos del DOM
const titulo = document.getElementById("titulo");
const boton = document.getElementById("cambiartexto");
const entrada = document.getElementById("entradaTexto");
const botonActualizar = document.getElementById("actualizarTexto");
const botonLimpiar = document.getElementById("limpiarTexto");
const toggleThemeBtn = document.getElementById("toggleTheme");
const fechaHoraDiv = document.getElementById("fechaHora");

// Cambiar texto del título y color al presionar el botón "Cambiar Texto"
boton.addEventListener("click", () => {
    titulo.innerText = "Texto cambiado por javascript";
    titulo.style.color = "blue";
});

// Actualizar texto del título al presionar "Actualizar"
botonActualizar.addEventListener("click", () => {
    const contenedor = document.createElement("div"); // Crear un contenedor para los textos
    contenedor.style.marginTop = "20px"; // Separar el bloque de textos del resto

    const textoIngresado = entrada.value; // Obtener el texto ingresado
    const textos = Array(5).fill(textoIngresado); // Crear un array con el texto repetido 5 veces

    // Usar map para iterar y crear elementos <p>
    textos.map((texto, index) => {
        const parrafo = document.createElement("p");
        parrafo.innerText = texto;
        parrafo.style.margin = "5px 0"; // Separar los párrafos entre sí
        parrafo.style.color = "green"; // Color verde para el texto
        contenedor.appendChild(parrafo); // Agregar el párrafo al contenedor
    });

    // Reemplazar contenido previo si existe y agregar el nuevo contenedor
    const previo = document.querySelector("#contenedorTextos");
    if (previo) {
        previo.remove();
    }
    contenedor.id = "contenedorTextos";
    document.body.appendChild(contenedor); // Añadir el contenedor al final del body
});

// Limpiar los textos generados al presionar "Limpiar"
botonLimpiar.addEventListener("click", () => {
    const previo = document.querySelector("#contenedorTextos");
    if (previo) {
        previo.remove(); // Elimina el contenedor con los textos
    }
});

// Alternar entre los temas claro y oscuro
toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleThemeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Función para mostrar la fecha y la hora
function actualizarFechaHora() {
    const fecha = new Date();
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    
    const fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);
    const horaFormateada = fecha.toLocaleTimeString('es-ES', opcionesHora);
    
    fechaHoraDiv.innerText = `${fechaFormateada} - ${horaFormateada}`;
}

// Actualizar la fecha y la hora cada segundo
setInterval(actualizarFechaHora, 1000);

