class Pessoa{
    private _nome: string
    private _sobrenome: string

    constructor(nome: string, sobrenome: string){
        this._nome = nome,
        this._sobrenome = sobrenome
    }

    get nome(){
        return this._nome
    }

    get sobrenome(){
        return this._sobrenome
    }

    get nomeCompleto(){
        return `${this._nome} ${this._sobrenome}`
    }
}