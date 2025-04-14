const juegos = [
    {
      titulo: "Juego 1",
      preguntas: [
        { oracion: "El sol ___ en el cielo.", respuesta: "brilla" },
        { oracion: "La luna ___ de noche.", respuesta: "aparece" }
      ]
    },
    {
      titulo: "Juego 2",
      preguntas: [
        { oracion: "El agua ___ a 100 grados.", respuesta: "hierve" },
        { oracion: "La nieve es ___", respuesta: "blanca" }
      ]
    }
    // Puedes seguir agregando hasta tener tus 28 juegos
  ];
  
  let juegoActual = 0;
  
  document.getElementById("iniciarBtn").addEventListener("click", () => {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("juego").style.display = "block";
    cargarJuego();
  });
  
  document.getElementById("siguienteBtn").addEventListener("click", () => {
    juegoActual++;
    if (juegoActual < juegos.length) {
      cargarJuego();
    } else {
      alert("¡Terminaste todos los juegos!");
      location.reload();
    }
  });
  
  function cargarJuego() {
    const juego = juegos[juegoActual];
    document.getElementById("tituloJuego").innerText = juego.titulo;
    const contenedor = document.getElementById("preguntasContainer");
    contenedor.innerHTML = "";
  
    juego.preguntas.forEach((pregunta, index) => {
      const div = document.createElement("div");
      const input = document.createElement("input");
      input.placeholder = "Completa aquí";
      const feedback = document.createElement("span");
  
      input.addEventListener("change", () => {
        if (input.value.trim().toLowerCase() === pregunta.respuesta.toLowerCase()) {
          feedback.innerText = "✅ Correcto";
          feedback.className = "correcto";
        } else {
          feedback.innerText = "❌ Incorrecto";
          feedback.className = "incorrecto";
        }
      });
  
      div.innerHTML = `<strong>${pregunta.oracion.replace("___", "_____")}</strong><br>`;
      div.appendChild(input);
      div.appendChild(feedback);
      contenedor.appendChild(div);
    });
  }
  