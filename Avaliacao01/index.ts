import { jaEmliminadoExcption } from "./erros"

interface Defensivel{
    estaEliminado(): boolean
    defenderAtaque(x: number): void
}

class Guerreiros implements Defensivel{
    _id: number
    _descricao: string
    _forca: number
    _vida: number

    constructor(id: number, descricao: string, forca: number, vida: number){
        this._id = id,
        this._descricao = descricao,
        this._forca = forca,
        this._vida = vida
    }

    estaEliminado(): boolean {
        if(this._vida <= 0){
            return true
        }else{
            return false
        }
    }

    defenderAtaque(valorAtaque: number): void {
        this._vida = this._vida - valorAtaque
    }

    atacar(defensivel: Defensivel){
        if(defensivel.estaEliminado() == true){
            throw new jaEmliminadoExcption("Guerreiro já eliminado!!!")
        }
        
        defensivel.defenderAtaque(this._forca)
    }
} 

class BasesMilitares implements BasesMilitares{
    _id: number
    _localizacaoX: number
    _localizacaoY: number
    _pecentual_danos: number

    constructor(id: number, localizacaoX: number, localizacaoY: number, percentualDanos: number){        
        this._id = id,
        this._localizacaoX = localizacaoX,
        this._localizacaoY = localizacaoY,
        this._pecentual_danos = 0
    }

    estaEliminado(): boolean {
        if(this._pecentual_danos >= 90){
            return true
        }else{
            return false
        }        
    }

    defenderAtaque(valorAtaque: number): void {
        this._pecentual_danos = this._pecentual_danos + valorAtaque
    }
}

class CenarioDeBatalha{
    
    avaliar(defensivel01: Defensivel[], defensivel02: Defensivel[]){
        
        let tropasVivas01: number = 0
        let tropasVivas02: number = 0

        for(let i: number = 0; i < defensivel01.length; i++){
            if(defensivel01[i].estaEliminado() == false){
                tropasVivas01 += 1
            }
        }

        for(let i: number = 0; i < defensivel02.length; i++){
            if(defensivel01[i].estaEliminado() == false){
                tropasVivas02 += 1
            }
        }

        if(tropasVivas01 > tropasVivas02){
            return "Player 01 ganhou"
        }else if(tropasVivas02 > tropasVivas01){
            return "Player 02 ganhou"
        }else{
            return "Empate"
        }
    }
}

const main = () => {

    // Player 01
    let player01: Defensivel[] = []

    const Soldado01: Guerreiros = new Guerreiros(1,"Barbaro",5,20)
    const Soldado02: Guerreiros = new Guerreiros(2,"Barbaro",5,20)
    const Soldado03: Guerreiros = new Guerreiros(3,"Barbaro",5,20)

    const baseMilitarNorte: BasesMilitares = new BasesMilitares(1,30,40,0)

    player01.push(Soldado01,
        Soldado02,
        Soldado03,
        baseMilitarNorte)

    // Player 02
    let player02: Defensivel[] = []

    const Sniper01: Guerreiros = new Guerreiros(4,"Sniper",7,20)
    const Sniper02: Guerreiros = new Guerreiros(5,"Sniper",7,20)
    const Sniper03: Guerreiros = new Guerreiros(6,"Sniper",7,20)

    const baseMilitarSul: BasesMilitares = new BasesMilitares(7,30,40,0)

    player02.push(Sniper01,
            Sniper02,
            Sniper03,
            baseMilitarSul)

    const cenario: CenarioDeBatalha = new CenarioDeBatalha()

    try {
        // turno player 02
        Sniper01.atacar(Soldado01)
        Sniper02.atacar(baseMilitarNorte)
        Sniper03.atacar(Soldado03)

        // turno player 01
        Soldado01.atacar(Sniper03)
        Soldado02.atacar(baseMilitarSul)
        Soldado03.atacar(baseMilitarSul)

        // turno player 02
        Sniper01.atacar(Soldado01)
        Sniper02.atacar(baseMilitarNorte)
        Sniper03.atacar(Soldado03)

        // turno player 01
        Soldado01.atacar(Sniper03)
        Soldado02.atacar(baseMilitarSul)
        Soldado03.atacar(baseMilitarSul)

        // turno player 02
        Sniper01.atacar(Soldado01)
        Sniper02.atacar(baseMilitarNorte)
        Sniper03.atacar(Soldado03)

        // turno player 01
        Soldado01.atacar(Sniper03)
        Soldado02.atacar(baseMilitarSul)
        Soldado03.atacar(baseMilitarSul)

        // turno player 02
        Sniper01.atacar(Soldado01)
        Sniper02.atacar(baseMilitarNorte)
        Sniper03.atacar(Soldado03)

        // turno player 01
        Soldado01.atacar(Sniper03)
        Soldado02.atacar(baseMilitarSul)
        Soldado03.atacar(baseMilitarSul)

    } catch (error) {
        if( error instanceof jaEmliminadoExcption){
            console.log(error.message)
        }
    }

    console.log(cenario.avaliar(player01,player02))

    console.log("Player01")
    console.table(player01)

    console.log("Player02")
    console.table(player02)
}

main()