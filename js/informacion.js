// login.js

let mapa = new Map();
let id = 0;

// Usuario de ejemplo
addUser("user", "pass");

function addUser(username, password) {
    let user = { nombre: username, contraseña: password };
    mapa.set(id++, user);
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita el envío predeterminado del formulario

    // Obtener valores introducidos por el usuario
    let usuarioInput = document.getElementById("usuario").value.trim();
    let contrasenaInput = document.getElementById("contraseña").value.trim();

    console.log("Usuario ingresado:", usuarioInput);
    console.log("Contraseña ingresada:", contrasenaInput);
    // Limpiar mensajes de error anteriores
    document.getElementById("NombreUsuarioError").textContent = "";
    document.getElementById("contraseñaError").textContent = "";

    let usuarioEncontrado = false;

    for (let user of mapa.values()) {
        if (user.nombre === usuarioInput) {
            usuarioEncontrado = true;
            if (user.contraseña === contrasenaInput) {
                // Credenciales correctas, redirige a index.html
                window.location.href = "main.html";
                return;
            } else {
                document.getElementById("contraseñaError").innerHTML = "<span style='color:red;'>Contraseña incorrecta.</span>";
                return;
            }
        }
    }

    if (!usuarioEncontrado) {
        document.getElementById("NombreUsuarioError").innerHTML = "<span style='color:red;'>Usuario incorrecto o no registrado.</span>";
    }
});
