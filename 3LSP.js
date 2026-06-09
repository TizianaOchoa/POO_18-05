"use strict";
class Forma {
}
class Rectangulo extends Forma {
    ancho;
    alto;
    constructor(ancho, alto) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }
    calcularArea() {
        return this.ancho * this.alto;
    }
}
class Cuadrado extends Forma {
    lado;
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado ** 2;
    }
}
function calcularAreaTotal(formas) {
    return formas.reduce((total, forma) => total + forma.calcularArea(), 0);
}
// Uso
const formas = [
    new Rectangulo(5, 4),
    new Cuadrado(3)
];
const areaTotal = calcularAreaTotal(formas);
console.log(`Área total: ${areaTotal}`);
