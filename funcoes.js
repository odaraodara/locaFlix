const readline = require("readline-sync");
const { Filme, filmes } = require("./models/filme.js");

//GERADOR DA CHAVE IDENTIFICADORA DO OBJETO
let geradorId = 2;

//FUNÇÕES DO SISTEMA

//Função de listagem
function listarFilmes() {
  //Laço para percorrer o banco
  for (const i of filmes) {
    i.mostrarDadosFilme()
  }
}

//Função de cadastro
function cadastrarFilme() {
  //Buscando as novas informações
  let nomeFilme = readline.question("Digite o nome do filme: ");
  while(nomeFilme === "" || nomeFilme.length > 20){
    console.log("O nome do filme deve ter até 20 caracteres e não pode ser vazio");
    nomeFilme = readline.question("Digite o nome do filme: ");
  }
  let duracaoFilme = readline.questionInt(
    "Digite a duração do filme (em min.): "
  );
  let generoFilme = readline.question("Digite o gênero do filme: ");
  while (generoFilme === "" || generoFilme.length > 15){
    console.log("O gênero do filme deve ter até 15 caracteres e não pode ser vazio");
    generoFilme = readline.question("Digite o gênero do filme: ");
  }
  let sinopseFilme = readline.question("Digite a sinopse do filme: ");
  while (sinopseFilme === ""){
    console.log("A sinopse do filme não pode ser vazia");
    sinopseFilme = readline.question("Digite a sinopse do filme: ");
  }

  //Criando o novo objeto
  const filme = new Filme(++geradorId, nomeFilme, duracaoFilme, generoFilme, sinopseFilme)
  //Incluindo o novo objeto no banco
  filmes.push(filme);


  //Confirmação da operação
  console.log(`
    Cadastrado com sucesso!!
    `)


  //Info
  filme.mostrarDadosFilme()
}

//Função de busca por nome
function buscarFilme() {
  //Buscando palavra chave
  let buscarFilme = readline.question(
    "Digite o nome do filme que você deseja buscar: "
  );

  //Percorrendo banco de dados
  let achei = false
  for (const b of filmes) {

    //convertendo para minúsculo e buscando todos os filmes de acordo com a palavra da busca.
    //busca fracionada, includes
    if (b.nome.toLowerCase().includes(buscarFilme.toLowerCase())) {

      achei = true;

      b.mostrarDadosFilme()
    }
  }
  if (achei === false) {
    //Caso o nome do filme não seja encontrado
    console.log(`
        Filme não consta na lista.
        `)
  }
}

//Modulo de alteração
function editarFilme() {

  let buscarFilme = readline.question(
    `Digite o nome do filme que você deseja editar: 
      `);
  //Percorrendo banco de dados
  for (const i of filmes) {
    //Buscando filme pela nome
    if (buscarFilme.toLowerCase() === i.nome.toLowerCase()) {
      console.log(`Filme selecionado: `);
      i.mostrarDadosFilme()

      //Exibindo menu secundario
      console.log(`Opções de edição: 
          1 - Editar título
          2 - Editar duração
          3 - Editar gênero
          4 - Editar sinopse
          0 - voltar para o menu principal`);

      const escolha = readline.questionInt("Digite a opção desejada: ");

      //Editando campos do objeto filme
      switch (escolha) {
        case 1:
          i.nome = readline.question("Novo título do filme: ");
          while(i.nome === "" || i.nome.length > 20){
           console.log("O nome do filme deve ter até 20 caracteres e não pode ser vazio");
           i.nome = readline.question("Digite o nome do filme: ");
          }
          break;
        case 2:
          i.duracao = readline.questionInt(
            "Novo tempo de duração do filme (em min.): "
          );
          break;
        case 3:
          i.genero = readline.question("Novo gênero do filme: ");
          while (i.genero === "" || i.genero.length > 15){
            console.log("O gênero do filme deve ter até 15 caracteres e não pode ser vazio");
            i.genero = readline.question("Digite o gênero do filme: ");
          }
          break;
        case 4:
          i.sinopse = readline.question("Nova sinopse do filme: ");
          while (i.sinopse === ""){
            console.log("A sinopse do filme não pode ser vazia");
            i.sinopse = readline.question("Digite a sinopse do filme: ");
          }
          break;
        case 0:
          break;
        default:
          console.log("Opção inválida");
      }
    }
  }
}

//Modulo de exclusão
function deletarFilme() {
  let buscarFilme = readline.question(
    "Digite o nome do filme que você deseja deletar: "
  );
  //Percorrendo banco
  for (const i of filmes) {
    let repetir = true;
    //busca pelo nome
    if (buscarFilme.toLowerCase() === i.nome.toLowerCase()) {
      while (repetir == true) {
        //confirmação de exclusão
        let confirmar =
          readline.questionInt(`Deseja excluir ${i.nome} do sistema?
              para SIM - digite 1
              para NÃO - digite 0
              : `);
        if (confirmar == 1) {
          filmes.splice(filmes.indexOf(i), 1);
          console.log("Filme excluído com sucesso!");
          repetir = false;
        } else if (confirmar == 0) {
          console.log("de volta ao menu principal: ");
          repetir = false;
        } else {
          console.log(`
            Opção inválida
            `);
        }
      }
    }
  }
}

//importando funções
module.exports = {
  listarFilmes,
  cadastrarFilme,
  buscarFilme,
  editarFilme,
  deletarFilme,
};

/*
MELHORIAS QUE PODERIAM SER FEITAS AO PROJETO:

- Disponibilizar links/streaming para assistir filmes;
- Disponibilizar imagens e capas dos filmes;
- Disponibilizar links/streaming de trailers;
- Disponibilizar funções para o usuario final (favoritar, audio, legendas, avaliar);
- Acrescentar opção de checar lançamentos futuros e datas de estreia;
- Acrescentar opções de checagem de planos e tarifas

*/


