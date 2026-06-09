abstract class Forma {
    abstract calcularArea(): number;
}

class Rectangulo extends Forma {
    constructor(
        private ancho: number,
        private alto: number
    ) {
        super();
    }

    calcularArea(): number {
        return this.ancho * this.alto;
    }
}

class Cuadrado extends Forma {
    constructor(private lado: number) {
        super();
    }

    calcularArea(): number {
        return this.lado ** 2;
    }
}

function calcularAreaTotal(formas: Forma[]): number {
    return formas.reduce(
        (total, forma) => total + forma.calcularArea(),
        0
    );
}

// Uso
const formas: Forma[] = [
    new Rectangulo(5, 4),
    new Cuadrado(3)
];

const areaTotal = calcularAreaTotal(formas);

console.log(`Área total: ${areaTotal}`);