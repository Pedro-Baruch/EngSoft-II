import { application } from "express"
import { Banco } from "./banco"
import { AplicacaoError, ContaExistenteError, ContaInexistenteError, PoupancaInvalidaError, SaldoInsuficienteError, ValorInvalidoError } from "./banco_error"
import { Conta } from "./conta"
import { Poupanca } from "./poupanca"
const prompt = require('prompt-sync')()


function main(){
    const banco : Banco = new Banco()
    
    let opcao : string = ''

    do{ 
        console.log('Opções da aplicação\n1 - Inserir\n2 - Consultar\n3 - Alterar\n4 - Excluir\n5 - Depositar\n6 - Sacar\n7 - Transferir\n8 - Render Juros\n9 - Sair da aplicação')
        try {
            let caseOpcao : string = prompt('Opção: ')
            switch (caseOpcao){
                case '1':                    
                    console.log('Tipo de conta:\n1 - Conta poupança\n2 - Conta básica')
                    let opcaoInserir : string = prompt('Opção: ')
                    switch (opcaoInserir){
                        case '1':
                            let numeroPoupanca : string = prompt('Número: ')
                            let valorPoupanca : number = prompt('Valor: ')
                            let jurosPoupanca : number = prompt('Juros: ')
                            
                            banco.inserir(new Poupanca(numeroPoupanca, valorPoupanca, jurosPoupanca))
                            console.log('Conta adicionada: ',banco.consultar(numeroPoupanca))
                            break
                        case '2':
                            let numeroBasico : string = prompt('Número: ')
                            let valorBasico : number = prompt('Valor: ')
                            
                            banco.inserir(new Conta(numeroBasico, valorBasico))
                            console.log('Conta adicionada: ',banco.consultar(numeroBasico))
                            break
                    }
                    break
                case '2':
                    let opcaoConsultar : string = prompt('Insira o número da conta: ')
                    console.log('Conta buscada',banco.consultar(opcaoConsultar))
                    break
                case '3':
                    let numeroAlterar : string = prompt('Insira o número da conta: ')
                    banco.alterar(banco.consultar(numeroAlterar))
                    console.log('Conta atualizada',banco.consultar(numeroAlterar))
                    break
                case '4':
                    let opcaoExcluir : string = prompt('Insira o número da conta: ')
                    banco.excluir(opcaoExcluir)
                    console.log('Conta Excluida com sucesso!')
                    break
                case '5':
                    let numeroDepositar : string = prompt('Insira o número da conta: ')
                    let valorDepositar : number = prompt('Insira o valor que deseja depositar: ')
                    banco.depositar(numeroDepositar,valorDepositar)
                    console.log('Conta atualizada: ',banco.consultar(numeroDepositar))
                    break
                case '6':
                    let numeroSacar : string = prompt('Insira o número da conta: ')
                    let valorSacar : number = prompt('Insira o valor que deseja sacar: ')
                    banco.sacar(numeroSacar,valorSacar)
                    console.log('Conta atualizada: ',banco.consultar(numeroSacar))
                    break  
                case '7':
                    let numeroDebito : string = prompt('Insira o número da conta debito: ')
                    let numeroCredito : string = prompt('Insira o número da conta crédito: ')
                    let valorTransfeir : number = prompt('Insira o valor que deseja transferir: ')
                    banco.transferir(numeroDebito,numeroCredito,valorTransfeir)
                    console.log('Conta credito: ',banco.consultar(numeroCredito),'\nConta debito: ',banco.consultar(numeroDebito))
                    break 
                case '8':
                    let numeroJuros : string = prompt('Insira o número da conta poupança: ')
                    banco.renderJuros(numeroJuros)
                    console.log('Conta atualizada',banco.consultar(numeroJuros))
                    break 
                case '9':
                    opcao = caseOpcao
                    break
                default:
                    opcao = '9'
            }
        } catch (error) {
            if(error instanceof AplicacaoError){
                console.log( error.message)
            }else if(error instanceof SaldoInsuficienteError){
                console.log(error.message)
            }else if(error instanceof ContaInexistenteError){
                console.log(error.name)
            }else if(error instanceof ValorInvalidoError){
                console.log(error.message)
            }else if(error instanceof PoupancaInvalidaError){
                console.log(error.message)
            }else if(error instanceof ContaExistenteError){
                console.log(error.message)
            }else if(error instanceof Error){
                console.log('Erro de sistema. Contate o administrador.')
            }
        }finally {
            console.log('Operação finalizada. Digite 9 para sair.')
        }
    }while (opcao != '9')

    console.log('Aplicação encerrada!!!')
}

main()