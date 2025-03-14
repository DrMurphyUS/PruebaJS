// Hacemos que las palabras puedan ser arrastradas
document.querySelectorAll('.word').forEach(word => {
    word.addEventListener('dragstart', function (e) {
        // Guardamos el ID de la palabra que estamos arrastrando en una "mochila invisible"
        e.dataTransfer.setData('text', e.target.id);
    });
});

// Configuramos los espacios en blanco donde deben ir las palabras
document.querySelectorAll('.dropzone').forEach(zone => {
    // Permitir que se pueda soltar algo en este espacio
    zone.addEventListener('dragover', function (e) {
        e.preventDefault(); // Sin esto, no podríamos soltar la palabra
    });

    // Cuando soltamos la palabra en el espacio
    zone.addEventListener('drop', function (e) {
        e.preventDefault();
        
        // Sacamos de la "mochila invisible" el ID de la palabra arrastrada
        let wordId = e.dataTransfer.getData('text');
        
        // Buscamos la palabra en el documento con su ID
        let draggedElement = document.getElementById(wordId);

        // Verificamos si la palabra es la correcta comparando con "data-palabra-correcta"
        if (wordId === this.dataset.palabraCorrecta) {
            // Si es correcta ✅, la ponemos en su lugar y la zona se pone verde
            this.textContent = draggedElement.textContent;
            this.classList.add('correct');
            draggedElement.remove(); // Eliminamos la palabra de la lista de palabras disponibles
        } else {
            // Si es incorrecta ❌, se pone roja por 1 segundo y luego vuelve a la normalidad
            this.classList.add('incorrect');
            setTimeout(() => this.classList.remove('incorrect'), 1000);
        }
    });
});
