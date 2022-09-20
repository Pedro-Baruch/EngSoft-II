import { SaldoInsuficienteError, ValorInvalidoError } from "./banco_error";

export class Conta {
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
	
	private validarValor(valor: number) {
		if(valor <= 0){
			throw new ValorInvalidoError('Valor inválido.')
		}
	}

	sacar(valor: number): void {
		this.validarValor(valor)
		
		if(this._saldo < valor){
			throw new SaldoInsuficienteError ('Saldo insuficiente.')
		}
		
		this._saldo = this._saldo - valor;
	}

	depositar(valor: number): void {
		this.validarValor(valor)
		this._saldo += valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.validarValor(valor)
		this.sacar(valor);
		contaDestino.depositar(valor);
	}
}