import { application } from "express"
import { Banco } from "./banco"
import { AplicacaoError, ContaInexistenteError, PoupancaInvalidaError, SaldoInsuficienteError, ValorInvalidoError } from "./banco_error"
import { Conta } from "./conta"
import { Poupanca } from "./poupanca"
const prompt = require('prompt-sync')()


function main(){
    const banco: Banco = new Banco()
    let opcao : string = ''

    do{ 
        console.log('Opções da aplicação\n1 - Inserir\n2 - Consultar\n3 - Alterar\n4 - Excluir\n5 - Depositar\n6 - Sacar\n7 - Transferir\n8 - Render Juros\n9 - Sair da aplicação')
        try {
            let caseOpcao: string = prompt('Opção: ')
            switch (caseOpcao){
                case '1':
                    break
                case '2':
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
                console.log(error.name, error.message)
            }
            if(error instanceof SaldoInsuficienteError){
                console.log(error.name, error.message)
            }
            if(error instanceof ContaInexistenteError){
                console.log(error.name, error.message)
            }
            if(error instanceof ValorInvalidoError){
                console.log(error.name, error.message)
            }
            if(error instanceof PoupancaInvalidaError){
                console.log(error.name, error.message)
            }
            if(error instanceof Error){
                console.log('Erro de sistema. Contate o administrador.')
            }
        }finally {
            console.log('Operação finalizada. Digite 9 para sair.')
        }
    }while (opcao != '9')

    console.log('Aplicação encerrada!!!')
}

main()