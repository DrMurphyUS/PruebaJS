// Definimos la pregunta y las opciones de respuesta
const question = "¿Cuál es la capital de Perú?";
const correctAnswer = "Lima"; // Respuesta correcta
const options = ["Arequipa", "Lima", "Puno", "Chucuy", "Junín"]; // Opciones de respuesta

// Función para mezclar las opciones en un orden aleatorio
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // Generamos un número aleatorio
        [array[i], array[j]] = [array[j], array[i]]; // Intercambiamos dos elementos en la lista
    }
}

// Mezclamos las opciones antes de mostrarlas
shuffle(options);

// Obtenemos el div donde pondremos las opciones
const optionsDiv = document.getElementById("options");

// Recorremos cada opción y la convertimos en un botón
options.forEach(option => {
    const button = document.createElement("button"); // Creamos un botón para la opción
    button.textContent = option; // Asignamos el texto del botón
    button.classList.add("option"); // Le agregamos la clase CSS

    // Evento que se ejecuta cuando el usuario hace clic en un botón
    button.addEventListener("click", function () {
        const result = document.getElementById("result"); // Obtenemos el párrafo donde mostramos la respuesta

        // Si la opción elegida es la correcta
        if (option === correctAnswer) {
            result.textContent = "¡Correcto! ✅"; // Mostramos el mensaje de éxito
            result.className = "correct"; // Aplicamos la clase CSS de éxito
        } else {
            result.textContent = "Incorrecto ❌"; // Mostramos el mensaje de error
            result.className = "incorrect"; // Aplicamos la clase CSS de error
        }
    });

    // Agregamos el botón al div de opciones
    optionsDiv.appendChild(button);
});
