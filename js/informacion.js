let mapa=new Map();

let  nombre= "user";
let  contraseña= "pass";
let id=0;

function addUser(username, password) {
    let user = {
        nombre: username,
        contraseña: password,
    };
    let userId = id++;
    mapa.set(userId, user);
}

addUser(nombre,contraseña);