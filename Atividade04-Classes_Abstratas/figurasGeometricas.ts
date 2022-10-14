// Q04
export abstract class FiguraGeometrica {
    protected _tamanhoLado: number
    protected _altura: number

    constructor(tamanho: number, altura: number) {
        this._tamanhoLado = tamanho
        this._altura = altura
    }

    abstract calcularArea(): number;
}

export class Triangulo extends FiguraGeometrica {

    public calcularArea(): number {
        let area: number = (this._tamanhoLado * this._altura) / 2

        return area
    }
}

export class Quadrado extends FiguraGeometrica {

    public calcularArea(): number {
        let area: number = Math.pow(this._tamanhoLado, 2)

        return area
    }
}

export class Retangulo extends FiguraGeometrica {

    public calcularArea(): number {
        let area: number = this._tamanhoLado * this._altura

        return area
    }
}