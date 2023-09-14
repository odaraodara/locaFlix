const readline = require("readline-sync");

let geradorId = 2;
//GERADOR DA CHAVE IDENTIFICADORA DO OBJETO
class Filme {
  //classe dos objetos manipulados
  constructor(id, nome, duracao, genero, sinopse) {
    this.id = id;
    this.nome = nome;
    this.duracao = duracao;
    this.genero = genero;
    this.sinopse = sinopse
  }
}


//Objetos iniciais
const filme1 = {
  id: 1,
  nome: "Titanic",
  duracao: 194,
  genero: "drama",
  sinopse:
    `Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica viagem inaugural do Titanic em 1912. 
    Embora esteja noiva do arrogante herdeiro de uma siderúrgica, a jovem desafia sua família e amigos em busca do verdadeiro amor.`,
};

const filme2 = {
  id: 2,
  nome: "UP: Altas Aventuras",
  duracao: 96,
  genero: "animação",
  sinopse:
    `Uma animação que conta a história de Carl e Russell que, despropositadamente, partem juntos em busca de um belíssimo
    lugar chamado Paraíso das Cachoeiras.`,
};

//Banco de dados
const filmes = [filme1, filme2];

//Condição de saida
let loop = true;

//Laço de repetição do menu
while (loop) {

  //MENU
  console.log(`
  =========LOCAFLIX=========
   ==========MENU==========
   0 - Sair do Sistema
   1 - Listar filmes
   2 - Cadastrar filme
   3 - Buscar filme
   4 - Editar filme
   5 - Deletar filme
   ========================`);

  //Buscando opção do usuario
  let opcao = readline.questionInt("Escolha a opção: ");
  switch (opcao) {
    //Modulo de consulta
    case 1:
      console.log("Todos os filmes");
      console.log(" ----------------");

      listarFilmes();

      break;

    //Modulo de cadastro
    case 2:
      cadastrarFilme();

      break;

    //Modulo de busca
    case 3:
      buscarFilme();

      break;

    //Modulo de alteração de cadastro
    case 4:
      editarFilme();
      break;

    //Modulo de exclusão
    case 5:
      deletarFilme();
      break;

    //Opção de saida do sistema
    case 0:
      console.log(`
      Sistema fechado!
      `);
      loop = false;
      break;

    //AÇÃO PADRÃO DO SISTEMA PARA OPÇÕES INVALIDAS
    default:
      console.log(`
      Operação inválida!
      `);
      break;
  }
}


//FUNÇÕES DO SISTEMA

//Função de listagem
function listarFilmes() {
  //Laço para percorrer o banco
  for (const i of filmes) {
    console.log(`Id: ${i.id}
    Nome: ${i.nome}
    \t - Duração: ${i.duracao} min
    \t - Gênero: ${i.genero}
    \t - Sinopse: ${i.sinopse}
    --------------------------`);
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
  console.log(`Id: ${filme.id}
    Nome: ${filme.nome}
    \t - Duração: ${filme.duracao} min
    \t - Gênero: ${filme.genero}
    \t - Sinopse: ${filme.sinopse}
    --------------------------`)


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

    //convertendo para caixa baixa, e buscando no vetor
    if (buscarFilme.toLowerCase() === b.nome.toLowerCase()) {
      achei = true;
      console.log(`Id: ${b.id}
      Nome: ${b.nome}
      \t - Duração: ${b.duracao} min
      \t - Gênero: ${b.genero}
      \t - Sinopse: ${b.sinopse}`);
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
      console.log(`Filme selecionado: ${i.nome}
        - Duração: ${i.duracao} min
        - Gênero: ${i.genero}
        - Sinopse: ${i.sinopse}
        `);
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
