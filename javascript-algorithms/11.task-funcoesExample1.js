/*
* Exemplo função sem retorno (Essa função é utilizada principalmente para executar ações que não precisam retornar valores, 
  como exibir informações na tela, alterar valores de variáveis globais ou realizar operações com efeitos colaterais.)
*/

function exibirNome(nome) {
  console.log('Olá, ' + nome + '!')
}
exibirNome('Lucas')


/*
* Exemplo função com retorno (função com retorno é aquela que executa uma determinada tarefa
   e retorna um valor para onde foi chamada.
   O valor retornado pode ser usado como entrada para outras funções,
   pode ser atribuído a uma variável ou pode ser exibido na tela.)
*/

function somaRetorno(a, b) {
  return (a + b)
}

let resultado = somaRetorno(5, 5)
console.log(resultado)