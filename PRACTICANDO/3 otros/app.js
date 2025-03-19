document.getElementById("botoncito").addEventListener("click",function()
{
    let nombre = document.getElementById("rellenon").value;
    let lista = document.getElementById("listaNombres");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    lista.appendChild(nuevoElemento);
}
)

document.getElementById("sortear").addEventListener("click",function()
{
    let nombres = document.querySelectorAll("#listaNombres li");
    if (nombres.length>0){
        let indiceAleatorio = Math.floor(Math.random()*nombres.length);
        let nombreGanador = nombres[indiceAleatorio].textContent;
        document.getElementById("resultado").textContent="El ganador es: " + nombreGanador;
    }
}
)