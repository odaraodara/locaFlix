import { questionInt } from "readline-sync";
import { listarFilmes, cadastrarFilme, buscarFilme, editarFilme, deletarFilme } from "./funcoes.js";

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
  let opcao = questionInt("Escolha a opção: ");
  switch (opcao) {
    //Modulo de consulta
    case 1:
      console.clear()
      console.log("Todos os filmes");
      console.log(" ----------------");

      listarFilmes();

      break;

    //Modulo de cadastro
    case 2:
      console.clear()
      cadastrarFilme();

      break;

    //Modulo de busca
    case 3:
      console.clear()
      buscarFilme();

      break;

    //Modulo de alteração de cadastro
    case 4:
      console.clear()
      editarFilme();
      break;

    //Modulo de exclusão
    case 5:
      console.clear()
      deletarFilme();
      break;

    //Opção de saida do sistema
    case 0:
      console.clear()
      console.log(`
      Sistema fechado!
      `);
      loop = false;
      break;

    //AÇÃO PADRÃO DO SISTEMA PARA OPÇÕES INVALIDAS
    default:
      console.clear()
      console.log(`
      Operação inválida!
      `);
      break;
  }
}

