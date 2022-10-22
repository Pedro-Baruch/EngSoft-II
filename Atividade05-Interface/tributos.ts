export class Conta {

    private _nome: string
    private _saldo: number

    constructor(nome: string, saldo: number) {
        this._nome = nome
        this._saldo = saldo
    }

    get Nome() {
        return this._nome
    }

    set Nome(nome: string) {
        this._nome = nome
    }

    get Saldo() {
        return this._saldo
    }

    set Saldo(saldo: number) {
        this._saldo = saldo
    }
}

interface Tributavel {

    calcularTributo(): number
}

class ContaCorrente extends Conta implements Tributavel {

    public calcularTributo(): number {
        return this.Saldo * 0.1
    }
}

class SeguroDeVida implements Tributavel {

    private _nome

    constructor(nome: string) {
        this._nome = nome
    }

    get Nome() {
        return this._nome
    }

    set Nome(nome: string) {
        this._nome = nome
    }

    public calcularTributo(): number {
        return 50
    }
}

class AuditoriaInterna {

    tributavelLista: Tributavel[] = []

    adicionar(tributavel: any): void {

        this.tributavelLista.push(tributavel)
    }

    ListaTributaveis() {
        return this.tributavelLista
    }

    calcularTributos(): number {
        let tributos: number = 0

        for (let i: number = 0; i < this.tributavelLista.length; i++) {
            tributos += this.ListaTributaveis()[i].calcularTributo()
        }

        return tributos
    }
}

function mainTributos() {

    const Conta01: ContaCorrente = new ContaCorrente("Pedro Baruch", 500)
    const Conta02: ContaCorrente = new ContaCorrente("Marcos Marcelo", 500)

    const seguro01: SeguroDeVida = new SeguroDeVida("Rafaela Castilho")
    const seguro02: SeguroDeVida = new SeguroDeVida("Alan Patrick")

    const auditoria: AuditoriaInterna = new AuditoriaInterna()

    auditoria.adicionar(Conta01)
    auditoria.adicionar(Conta02)
    auditoria.adicionar(seguro01)
    auditoria.adicionar(seguro02)

    console.log(auditoria.ListaTributaveis())
    console.log(auditoria.calcularTributos())
}

mainTributos()