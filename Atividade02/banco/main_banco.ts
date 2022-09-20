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
                            break
                        case '2':
                            let numeroBasico : string = prompt('Número: ')
                            let valorBasico : number = prompt('Valor: ')
                            
                            banco.inserir(new Conta(numeroBasico, valorBasico))
                            break
                    }
                    break
                case '2':
                    let opcaoConsultar : string = prompt('Insira o número da conta: ')
                    console.log(banco.consultar(opcaoConsultar))
                    break
                case '3':
                    break
                case '4':
                    break
                case '5':
                    break
                case '6':
                    break  
                case '7':
                    break 
                case '8':
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