// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Inicializa un arreglo vacío para almacenar los nombres
let listaAmigos = [];

// Función para agregar nombres al arreglo y mostrarlos en la lista
function agregarAmigo() {
    // Obtén el valor del input
    const inputNombre = document.getElementById("amigo").value.trim();

    // Verifica que no esté vacío
    if (inputNombre !== "") {
        // Agrega el nombre al arreglo
        listaAmigos.push(inputNombre);

        // Limpia el campo de texto
        document.getElementById("amigo").value = "";

        // Actualiza la lista en el HTML
        mostrarLista();
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}

// Función para mostrar la lista actualizada en el DOM
function mostrarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpia la lista anterior

    // Recorre los nombres y agrégalos como elementos <li>
    listaAmigos.forEach(nombre => {
        const item = document.createElement("li");
        item.textContent = nombre;
        listaElement.appendChild(item);
    });
}
function sortearAmigo() {
    // Validar que haya amigos en el arreglo
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear. Por favor, agrega nombres primero.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = listaAmigos[indiceAleatorio];

    // Mostrar el resultado en el elemento correspondiente
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}
