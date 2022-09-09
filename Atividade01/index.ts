class Conta {
	private _numero: String;
	private _saldo: number;

    constructor(numero: String, saldoInicial: number) {
		this._numero = numero;
		this._saldo = saldoInicial;
	}
	
	get numero(): String {
		return this._numero;
        
	}

	get saldo(): number {
		return this._saldo;
	}
	
	
	sacar(valor: number): void {
		if(this._saldo < valor){
			throw new Error ('Saldo insuficiente.')
		}

		this._saldo -= valor;
	}

	depositar(valor: number): void {
		this._saldo = this._saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		if(this._saldo < valor){
			throw new Error ('Saldo insuficiente.')
		}

		this._saldo -= valor
		contaDestino._saldo += valor
	}
}

class Banco {
	private _contas: Conta[] = [];
	
	inserir(conta: Conta): void {
        let contaConsultada = this.consultar(conta.numero);

        if (contaConsultada == null) {
		    this._contas.push(conta);
        }
	}

	consultar(numero: String): Conta {
		let contaConsultada!: Conta;
		for (let conta of this._contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				break;
			}
		}
		return contaConsultada;
	}

	private consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this._contas.length; i++) {
			if (this._contas[i].numero == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}

	alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.numero);
		if (indice != -1) {
			this._contas[indice] = conta;
		}
	}

	excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		
		if (indice != -1) {
			for (let i: number = indice; i < this._contas.length; i++) {
				this._contas[i] = this._contas[i+1];
			}

			this._contas.pop();
		} 
	}

	depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.depositar(valor);
		}
	}

    sacar(numero: String, valor: number): void {
        let contaConsultada = this.consultar(numero);

        if (contaConsultada != null) {
            contaConsultada.sacar(valor);
        }
    }

    transferir(numeroDebito: string, numeroCredito: string, valor: number){
        let contaCredito: Conta = this.consultar(numeroCredito);
        let contaDebito: Conta = this.consultar(numeroDebito);

        if (contaCredito != null && contaDebito != null) {
            contaDebito.transferir(contaCredito, valor);
        }
    }

    calcularQuantidadeContas(): number {
        return this._contas.length;
    }

    calcularTotalSaldos(): number {
        let totalSaldo: number = 0;
        for (let conta of this._contas) {
            totalSaldo += conta.saldo;
        }

        return totalSaldo;
    }

    calcularMediaSaldos() {
        return this.calcularTotalSaldos()/this.calcularQuantidadeContas();
    }

}

function sacar(){

	const conta01: Conta = new Conta('1',50)

	conta01.sacar(30)
	//A conta não tem saldo suficiente então é retornado um erro comunicando a falta de saldo da conta e a operação se encerra sem alteração no saldo

	console.log(`Sacar:\nconta 01: R$ ${conta01.saldo},00\n`)
}

sacar()

function transferir(){

	const conta01: Conta = new Conta('1',50)
	const conta02: Conta = new Conta('2',50)

	conta01.transferir(conta02,30)
	//A conta não tem saldo suficiente então é retornado um erro comunicando a falta de saldo da conta e a operação se encerra sem alteração no saldo

	console.log(`Transferir\nconta 01: R$ ${conta01.saldo},00\nconta 02: R$ ${conta02.saldo},00\n`)
}

transferir()

function main(){

	const banco: Banco = new Banco()

	banco.inserir(new Conta('1',100))
	banco.inserir(new Conta('2',110))
	banco.inserir(new Conta('3',120))
	banco.inserir(new Conta('4',130))
	banco.inserir(new Conta('5',140))

	console.log(banco.consultar('1'),banco.consultar('2'))
}

main()