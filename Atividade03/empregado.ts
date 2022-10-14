export class Empregado{
    _salario: number = 500;

    public calcularSalario(): number{
        return this._salario    
    }
}

export class Diarista extends Empregado{

    public override calcularSalario(): number{
        const salarioCalculado = this.calcularSalario() / 30
        
        return salarioCalculado
    }
}

export class Horista extends Empregado{

    public override calcularSalario(): number{
        const salarioCalculado = this.calcularSalario() / 24
        
        return salarioCalculado
    }
}

const main = () => {
    const empregado = new Empregado()
    const diarista = new Diarista()
    const horista = new Horista()

    console.log(empregado.calcularSalario())
    console.log(diarista.calcularSalario())
    console.log(horista.calcularSalario())
}

main()