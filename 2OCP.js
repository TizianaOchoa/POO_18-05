"use strict";
class Forma {
}
class Circulo extends Forma {
    radio;
    constructor(radio) {
        super();
        this.radio = radio;
    }
    calcularArea() {
        return 3.1416 * this.radio ** 2;
    }
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
class Triangulo extends Forma {
    base;
    altura;
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
class CalculadoraArea {
    calcularAreaTotal(formas) {
        return formas.reduce((total, forma) => total + forma.calcularArea(), 0);
    }
}
// Uso
const formas = [
    new Circulo(5),
    new Rectangulo(4, 6),
    new Triangulo(3, 8)
];
const calculadora = new CalculadoraArea();
const areaTotal = calculadora.calcularAreaTotal(formas);
console.log(`Área total: ${areaTotal}`);
