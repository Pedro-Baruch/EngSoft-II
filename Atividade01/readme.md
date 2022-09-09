## Respostas

### Questão 01
    Os três tipos mais comuns são:
        Desconsiderar a operação
        Exibir uma mensagem de erro
        Retornar código de erro
    
### Questão 02
    O método de desconsiderar operação faz com que não se saiba se operação foi ou não executada;
    Com o método de mensagem de erro é necessário que a interface de texto seja utilizada, 
    dessa forma, se for utilizada uma interface gráfica a mensagem seria ignorada;
    Ao usar o método de código de retorno é necessário testar o valor de retorno para saber o que houve, 
    caso o método retorne valores é preciso definir valores especificos para representar erros, 
    o que nem sempre é possivel fazendo que os retornos de erro se confundam com o retorno da 
    função, e também que pode fazer com que haja uma mudança no tipo de retorno do método;

### Questão 03 e 04
    A conta não tem saldo suficiente então é retornado um erro do tipo exceção, da classe 
	Error do typescript, mostrando uma mensagem de Saldo insuficiente, causando uma interrupção no sistema.

    Teste feito no código no arquivo index.ts nas funções testeSacar() e testeTransferir().

### Questão 05
    Ocorreu o lançamento da exceção, e foi exibido o erro quando o o valor foi mais que o saldo, fazendo com que o programa fosse interrompido.

    Teste feito no código no arquivo index.ts na função main().