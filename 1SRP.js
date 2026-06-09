"use strict";
class Usuario {
    nombre;
    email;
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
    validarEmail() {
        return this.email.includes("@");
    }
}
class UsuarioRepositorio {
    guardar(usuario) {
        console.log(`Guardando ${usuario.nombre} en BD`);
    }
    cargar(id) {
        // Lógica para cargar usuario
        return null;
    }
}
class EmailService {
    enviarEmail(usuario, mensaje) {
        console.log(`Enviando email a ${usuario.email}: ${mensaje}`);
    }
}
// Uso
const usuario = new Usuario("Juan", "juan@email.com");
const repositorio = new UsuarioRepositorio();
const emailService = new EmailService();
repositorio.guardar(usuario);
emailService.enviarEmail(usuario, "¡Bienvenido!");
