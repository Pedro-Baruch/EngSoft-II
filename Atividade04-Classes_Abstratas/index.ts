import { FiguraGeometrica, Quadrado, Retangulo, Triangulo } from "./figurasGeometricas"
import { Diretor, Funcionario, Gerente, Presidente } from "./funcionario"

const instanciarFiguras = () => {
    const quadrado: FiguraGeometrica = new Quadrado(4, 2)
    const triagulo: FiguraGeometrica = new Triangulo(3, 6)
    const retangulo: FiguraGeometrica = new Retangulo(2, 2)

    console.log(`Área do quadrado = ${quadrado.calcularArea()}\nÁrea do triângulo = ${triagulo.calcularArea()}\nÁrea do retângulo = ${retangulo.calcularArea()}\n`)
}

const instanciarFuncionario = () => {
    const gerente: Funcionario = new Gerente(1000)
    const diretor: Funcionario = new Diretor(1000)
    const presidente: Funcionario = new Presidente(1000)

    console.log(`Bonificação do gerente: R$ ${gerente.getBonificacao()}\nBonificação do diretor: R$ ${diretor.getBonificacao()}\nBonificação do presidente: R$ ${presidente.getBonificacao()}\n`)
}

instanciarFiguras()
instanciarFuncionario()