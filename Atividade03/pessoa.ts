class Pessoa {
    private _nome: string
    private _sobrenome: string

    constructor(nome: string, sobrenome: string) {
        this._nome = nome,
        this._sobrenome = sobrenome
    }

    get nome(): string {
        return this._nome
    }

    get sobrenome(): string {
        return this._sobrenome
    }

    get nomeCompleto(): string {
        return `${this._nome} ${this._sobrenome}`
    }
}

class Funcionario extends Pessoa {
    private _matricula: string
    private _salario: number

    constructor(matricula: string, salario: number, _nome: string, _sobrenome: string) {
        super(_nome, _sobrenome)
        this._matricula = matricula,
        this._salario = salario
    }

    get matricula() {
        return this._matricula
    }

    get salario() {
        return this._salario
    }

    public primeiraParcela(): number {
        return this._salario * 0.6
    }

    public segundaParcela(): number {
        return this._salario * 0.4
    }
}

class Professor extends Funcionario {
    private _titulacao: string

    constructor(titulacao: string, _matricula: string, _salario: number, _nome: string, _sobrenome: string) {
        super(_matricula, _salario, _nome, _sobrenome)
        this._titulacao = titulacao
    }

    get titulacao(): string {
        return this._titulacao
    }

    public override primeiraParcela(): number {
        return this.salario
    }

    public override segundaParcela(): number {
        return 0
    }
}

const main = () => {
    const pessoa: Pessoa = new Pessoa('Pedro', 'Baruch')
    console.log(`Nome + Sobrenome: ${pessoa.nome, pessoa.sobrenome}`)
    console.log(`Nome completo: ${pessoa.nomeCompleto}`)

    const funcionario: Funcionario = new Funcionario('12', 1000, 'Pedro', 'Baruch')
    console.log(`\nInformações funcionário\nNome: ${funcionario.nomeCompleto}\nMatricula: ${funcionario.matricula}\nSalário: R$${funcionario.salario} \nPrimeira parcela - R$${funcionario.primeiraParcela()}\nSegunda Parcela - R$${funcionario.segundaParcela()}`)

    const professor: Professor = new Professor('Matemática','12', 1000, 'Pedro', 'Baruch')
    console.log(`\nInformações professor\nNome: ${professor.nomeCompleto}\nMatricula: ${professor.matricula}\nTitulação: ${professor.titulacao}\nSalário: R$${professor.salario} \nPrimeira parcela - R$${professor.primeiraParcela()}\nSegunda Parcela - R$${professor.segundaParcela()}`)
}

main()