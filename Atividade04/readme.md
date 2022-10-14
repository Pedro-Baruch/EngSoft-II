# Respostas

### Q01

Não é possivel instanciar classes abstratas, a função delas é de idealizar uma forma genérica de um tipo. Só podem ser utilizadas no sistema se forem extendidas.

### Q02

É necessário que os métodos de ClasseAbstrata sejam implementados em ClasseAbstrata dessa forma:

        abstract class ClasseAbstrata {
            abstract imprimaAlgo(): void;
        }
            
        class ClasseConcreta extends ClasseAbstrata {
                imprimaAlgo(): void {
                    console.log('Hello World!!!')
            }
        }

### Q03

Essa classe deve permanecer abstrata.  
    
    abstract class ClasseA {
        abstract imprimaAlgo(): void;
    }

    abstract class ClasseB {}

### Q04

Classes instanciadas no index.ts, classes implementadas no figurasGeometricas.ts

    abstract class FiguraGeometrica{
        protected _tamanhoLado: number
        protected _altura: number

        constructor(tamanho: number, altura: number){
            this._tamanhoLado = tamanho
            this._altura = altura
        }

        abstract calcularArea(): number;
    }

    class Triangulo extends FiguraGeometrica {
        public calcularArea(): number{
            let area: number = (this._tamanhoLado * this._altura) / 2

            return area
        }
    }

    class Quadrado extends FiguraGeometrica {
        public calcularArea(): number{
            let area: number = Math.pow(this._tamanhoLado,2)

            return area
        }
    }

    class Retangulo extends FiguraGeometrica{
        public calcularArea(): number {
            let area: number = this._tamanhoLado * this._altura

            return area
        }
    }

### Q05



### Q06

Classes instanciadas no index.ts, classes implementadas no funcionario.ts

    export abstract class Funcionario {
        protected _salario: number

        constructor(salario: number){
            this._salario = salario
        }

        abstract getBonificacao(): number
    }

    export class Gerente extends Funcionario{
        getBonificacao(): number {
            return this._salario * 0.4
        }
    }

    export class Diretor extends Gerente{
        getBonificacao(): number {
            return this._salario * 0.6
        }
    }

    export class Presidente extends Funcionario{
        getBonificacao(): number {
            return this._salario * 1 + 1000
        }
    }