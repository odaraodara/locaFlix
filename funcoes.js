import { question, questionInt } from "readline-sync";
import {Filme, filmes} from './models/filme.js';


//GERADOR DA CHAVE IDENTIFICADORA DO OBJETO
let geradorId = 2;

//FUNÇÕES DO SISTEMA

//Função de listagem
export function listarFilmes() {
  //Laço para percorrer o banco
  for (const i of filmes) {
    i.mostrarDadosFilme()
  }
}

//Função de cadastro
export function cadastrarFilme() {
  //Buscando as novas informações
  let nomeFilme = question("Digite o nome do filme: ");
  while (nomeFilme === "" || nomeFilme.length > 20) {
    console.log("O nome do filme deve ter até 20 caracteres e não pode ser vazio");
    nomeFilme = question("Digite o nome do filme: ");
  }
  let duracaoFilme = questionInt(
    "Digite a duração do filme (em min.): "
  );
  let generoFilme = question("Digite o gênero do filme: ");
  while (generoFilme === "" || generoFilme.length > 15) {
    console.log("O gênero do filme deve ter até 15 caracteres e não pode ser vazio");
    generoFilme = question("Digite o gênero do filme: ");
  }
  let sinopseFilme = question("Digite a sinopse do filme: ");
  while (sinopseFilme === "") {
    console.log("A sinopse do filme não pode ser vazia");
    sinopseFilme = question("Digite a sinopse do filme: ");
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
export function buscarFilme() {
  //Buscando palavra chave
  let buscarFilme = question(
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
export function editarFilme() {

  let buscarFilme = question(
    `Digite o nome do filme que você deseja editar: 
      `);

  let achei = false
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

      const escolha = questionInt("Digite a opção desejada: ");

      //Editando campos do objeto filme
      switch (escolha) {
        case 1:
          i.nome = question("Novo título do filme: ");
          while (i.nome === "" || i.nome.length > 20) {
            console.log("O nome do filme deve ter até 20 caracteres e não pode ser vazio");
            i.nome = question("Digite o nome do filme: ");
          }
          break;
        case 2:
          i.duracao = questionInt(
            "Novo tempo de duração do filme (em min.): "
          );
          break;
        case 3:
          i.genero = question("Novo gênero do filme: ");
          while (i.genero === "" || i.genero.length > 15) {
            console.log("O gênero do filme deve ter até 15 caracteres e não pode ser vazio");
            i.genero = question("Digite o gênero do filme: ");
          }
          break;
        case 4:
          i.sinopse = question("Nova sinopse do filme: ");
          while (i.sinopse === "") {
            console.log("A sinopse do filme não pode ser vazia");
            i.sinopse = question("Digite a sinopse do filme: ");
          }
          break;
        case 0:
          break;
        default:
          console.log("Opção inválida");
      }
      achei = true
    }
  }
  if (achei === false) {
    //Caso o nome do filme não seja encontrado
    console.log(`
        Filme não consta na lista.
        `)
  }
}

//Modulo de exclusão
export function deletarFilme() {
  let buscarFilme = question(
    "Digite o nome do filme que você deseja deletar: "
  );
  let achei = false
  //Percorrendo banco
  for (const i of filmes) {
    let repetir = true;
    //busca pelo nome
    if (buscarFilme.toLowerCase() === i.nome.toLowerCase()) {
      while (repetir == true) {
        //confirmação de exclusão
        let confirmar =
          questionInt(`Deseja excluir ${i.nome} do sistema?
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
      achei = true
    }
  }
  if (achei === false) {
    //Caso o nome do filme não seja encontrado
    console.log(`
        Filme não consta na lista.
        `)
  }
}




/*
MELHORIAS QUE PODERIAM SER FEITAS AO PROJETO:

- Disponibilizar imagens e capas dos filmes;
- Disponibilizar links/streaming para assistir trailers ou filmes;
- Disponibilizar funções para o usuario final (favoritar, audio, legendas, avaliar);
- Acrescentar opção de checar lançamentos futuros e datas de estreia;
- Acrescentar opções de checagem de planos de assinatura e eventuais tarifas

*/
