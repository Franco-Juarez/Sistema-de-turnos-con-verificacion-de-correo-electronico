//Sistema de turnos con verificación de correo electrónico

for (let i = 1; i <= 10; i++) {
    let nombreIngresado = prompt ("BIENVENIDO AL SISTEMA DE RESERVA DE TURNOS.\n Ingrese su nombre y apellido");
    alert ("Turno reservado con éxito");
    
    let askAgain = true;

    do {
        let userEmail = prompt("Ingrese su correo electrónico.");
        let userEmailConfirm = prompt("Confirme su correo electrónico.");
        if (userEmail === userEmailConfirm) {
            alert ("El turno " + i + " queda reservado a nombre de "+ nombreIngresado+ ". La información de la reserva fue enviada a "+userEmail);
            askAgain = false;
        } else {
            alert("Los correos no coinciden");
        }
    }   while (askAgain);
}



