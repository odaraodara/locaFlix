const readline = require("readline-sync");

const filme1 = {
  id: 1,
  nome: "Titanic",
  duraçao: 194,
  genero: "drama",
  sinopse:
    "Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica viagem inaugural do Titanic em 1912. Embora esteja noiva do arrogante herdeiro de uma siderúrgica, a jovem desafia sua família e amigos em busca do verdadeiro amor.",
};

const filme2 = {
  id: 2,
  nome: "UP: Altas Aventuras",
  duraçao: 96,
  genero: "animação",
  sinopse:
    "Uma animação que conta a história de Carl e Russell que, despropositadamente, partem juntos em busca de um belíssimo lugar chamado Paraíso das Cachoeiras.",
};

const filmes = [filme1, filme2];
let geradorId = 2;

let loop = true;
while (loop) {
    console.log("=========LOCAFLIX=========");
    console.log("==========MENU==========");
    console.log("0 - Sair do Sistema");
    console.log("1 - Listar filmes");
    console.log("2 - Cadastrar filme");
    console.log("3 - Buscar filme");
    console.log("4 - Editar filme");
    console.log("========================");  
  let opcao = readline.questionInt("Escolha a opção: ");
  switch (opcao) {
    case 1:
      console.log("Todos os filmes");
      console.log(" ----------------");

      listarFilmes();

      break;

    case 2:
      cadastrarFilme();

      break;

    case 3:
      buscarFilme();

      break;

    case 4:
        editarFilme();
      break;
      
    case 0:
      console.log("Sistema fechado!");
      loop = false;
      break;

    default:
      console.log("Operação Inválida");
      break;
  }
}

function listarFilmes() {
  for (const i of filmes) {
    console.log(`Id: ${i.id}`);
    console.log(`Nome: ${i.nome}`);
    console.log(`\t - Duração: ${i.duraçao} min`);
    console.log(`\t - Gênero: ${i.genero}`);
    console.log(`\t - Sinopse: ${i.sinopse}`);
    console.log(`--------------------------`);
  }
}

function cadastrarFilme() {
  let nomeFilme = readline.question("Digite o nome do filme: ");
  let duracaoFilme = readline.questionInt("Digite a duração do filme (em min.): ");
  let generoFilme = readline.question("Digite o gênero do filme: ");
  let sinopseFilme = readline.question("Digite a sinopse do filme: ");
  geradorId++;

  const filme = {
    id: geradorId,
    nome: nomeFilme,
    duracao: duracaoFilme,
    genero: generoFilme,
    sinopse: sinopseFilme,
  };
  filmes.push(filme);
}

function buscarFilme() {
  let buscarFilme = readline.question(
    "Digite o nome do filme que você deseja buscar: "
  );

  for (const b of filmes) {
    if (buscarFilme.toLowerCase() === b.nome.toLowerCase()) {
      console.log(`Id: ${b.id}`);
      console.log(`Nome: ${b.nome}`);
      console.log(`\t - Duração: ${b.duraçao} min`);
      console.log(`\t - Gênero: ${b.genero}`);
      console.log(`\t - Sinopse: ${b.sinopse}`);
    }
  }
}

function editarFilme() {
  let buscarFilme = readline.question(
    "Digite o nome do filme que você deseja editar: "
  );
  for (const i of filmes) {
    if (buscarFilme.toLowerCase() === i.nome.toLowerCase()) {
        console.log(`Filme selecionado: ${i.nome}
        - Duração: ${i.duraçao} min
        - Gênero: ${i.genero}
        - Sinopse: ${i.sinopse}
        `);
        console.log(`Opções de edição: 
        1 - Editar título
        2 - Editar duração
        3 - Editar gênero
        4 - Editar sinopse
        0 - voltar para o menu principal`);

        const escolha = readline.questionInt("Digite a opção desejada: ")

        switch(escolha){
            case 1: i.nome = readline.question("Novo título do filme: ")
                break;
            case 2: i.duraçao = readline.questionInt("Novo tempo de duração do filme (em min.): ")
                break;   
            case 3: i.genero = readline.question("Novo gênero do filme: ")   
                break;
            case 4: i.sinopse = readline.question("Nova sinopse do filme: ")
                break;
            case 0: 
                break;   
            default: console.log("Opção inválida");       
        }
    }
  }
}
