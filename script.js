function iniciarSesion() {
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    if (usuario === "" || password === "") {
        alert("Por favor completa todos los campos");
    } else {
        alert("Inicio de sesión correctoooooo");
    }
}