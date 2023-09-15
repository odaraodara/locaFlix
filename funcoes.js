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
  let duracaoFilme = readline.questionInt(
    "Digite a duração do filme (em min.): "
  );
  let generoFilme = readline.question("Digite o gênero do filme: ");
  let sinopseFilme = readline.question("Digite a sinopse do filme: ");

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
    if (b.nome.toLowerCase().includes(buscarFilme.toLowerCase())) {
      achei = true;

      b.mostrarDadosFilme()
    }
  }
  if (achei === false) {
    console.log(`
        Filme não consta na lista.
        `)
  }
}

function editarFilme() {
  let buscarFilme = readline.question(
    `Digite o nome do filme que você deseja editar: 
      `);
  for (const i of filmes) {
    if (buscarFilme.toLowerCase() === i.nome.toLowerCase()) {
      console.log(`Filme selecionado: `);
      i.mostrarDadosFilme()

      console.log(`Opções de edição: 
          1 - Editar título
          2 - Editar duração
          3 - Editar gênero
          4 - Editar sinopse
          0 - voltar para o menu principal`);

      const escolha = readline.questionInt("Digite a opção desejada: ");

      switch (escolha) {
        case 1:
          i.nome = readline.question("Novo título do filme: ");
          break;
        case 2:
          i.duracao = readline.questionInt(
            "Novo tempo de duração do filme (em min.): "
          );
          break;
        case 3:
          i.genero = readline.question("Novo gênero do filme: ");
          break;
        case 4:
          i.sinopse = readline.question("Nova sinopse do filme: ");
          break;
        case 0:
          break;
        default:
          console.log("Opção inválida");
      }
    }
  }
}

function deletarFilme() {
  let buscarFilme = readline.question(
    "Digite o nome do filme que você deseja deletar: "
  );
  for (const i of filmes) {
    let repetir = true;
    if (buscarFilme.toLowerCase() === i.nome.toLowerCase()) {
      while (repetir == true) {
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

module.exports = {
  listarFilmes,
  cadastrarFilme,
  buscarFilme,
  editarFilme,
  deletarFilme,
};
