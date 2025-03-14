// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
    let nombre = document.getElementById('nombreAmigo').value;
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Validar que haya amigos disponibles
 }
    amigos.push(nombre);  // Agregar el nombre al array

    document.getElementById('nombreAmigo').value = "";  // Limpiar el campo de texto
                    
    mostrarAmigos();  // Mostrar los amigos actualizados
                    }
function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');  // Obtener la lista HTML
                lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");  // Crear un nuevo <li>
        item.textContent = amigos[i];  
                lista.appendChild(item);       
                }
        }
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;   }
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        document.getElementById('resultado').textContent = "El amigo sorteado es: " + amigoSorteado;
                        
        let  limpiar =  document.getElementById("listaAmigos");
        Lista.innerHTML ="";
} 