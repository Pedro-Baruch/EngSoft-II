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