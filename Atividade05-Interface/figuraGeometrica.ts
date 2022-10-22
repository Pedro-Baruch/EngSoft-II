abstract class FiguraGeometrica {
    protected _tamanhoLado: number
    protected _altura: number
    protected _area: number = 0

    constructor(tamanho: number, altura: number) {
        this._tamanhoLado = tamanho
        this._altura = altura
    }

    abstract calcularArea(): number;
}

interface Comparavel {
    comparar(figura: FiguraGeometrica): number
}

class Triangulo extends FiguraGeometrica implements Comparavel {

    public calcularArea(): number {
        this._area = (this._tamanhoLado * this._altura) / 2

        return this._area
    }

    comparar(figura: FiguraGeometrica): number {
        if (figura.calcularArea() > this._area) {
            return -1
        } else if (figura.calcularArea() < this._area) {
            return 1
        } else {
            return 0
        }
    }
}

class Quadrado extends FiguraGeometrica implements Comparavel {

    public calcularArea(): number {
        this._area = Math.pow(this._tamanhoLado, 2)

        return this._area
    }

    comparar(figura: FiguraGeometrica): number {
        if (figura.calcularArea() > this._area) {
            return -1
        } else if (figura.calcularArea() < this._area) {
            return 1
        } else {
            return 0
        }
    }
}

class Retangulo extends FiguraGeometrica implements Comparavel {

    public calcularArea(): number {
        this._area = this._tamanhoLado * this._altura

        return this._area
    }

    comparar(figura: FiguraGeometrica): number {
        if (figura.calcularArea() > this._area) {
            return -1
        } else if (figura.calcularArea() < this._area) {
            return 1
        } else {
            return 0
        }
    }
}

function mainFigura() {

    const quadrado: Quadrado = new Quadrado(6, 6)
    const triangulo: Triangulo = new Triangulo(5, 10)
    const retangulo: Retangulo = new Retangulo(4, 9)

    quadrado.calcularArea()
    triangulo.calcularArea()
    retangulo.calcularArea()

    console.log("1 = figura maior que o parametro / -1 = figura menor que o parametro / 0 = iguais")
    console.log(`Quadrado compara com Triangulo: ${quadrado.comparar(triangulo)}\nQuadrado compara com Retangulo: ${quadrado.comparar(retangulo)}`)
    console.log(`Triangulo compara com Quadrado: ${triangulo.comparar(quadrado)}\nTriangulo compara com Retangulo: ${triangulo.comparar(retangulo)}`)
    console.log(`Retangulo compara com Triangulo: ${retangulo.comparar(triangulo)}\nRetangulo compara com Quadrado: ${retangulo.comparar(quadrado)}`)
}

mainFigura()