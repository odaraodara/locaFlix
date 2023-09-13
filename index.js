const readline = require("readline-sync");

const filme1 = {
    id: 1,
    nome: "Titanic",
    duraçao: "194 minutos",
    genero: "drama",
    sinopse: "Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica viagem inaugural do Titanic em 1912. Embora esteja noiva do arrogante herdeiro de uma siderúrgica, a jovem desafia sua família e amigos em busca do verdadeiro amor."
};

const filme2 = {
    id: 2,
    nome: "UP: Altas Aventuras",
    duraçao: "96 minutos",
    genero: "animação",
    sinopse: "Uma animação que conta a história de Carl e Russell que, despropositadamente, partem juntos em busca de um belíssimo lugar chamado Paraíso das Cachoeiras."
}

const filmes = [filme1, filme2];

console.log("=========LOCAFLIX=========");
console.log("==========MENU==========");
console.log("0 - Sair do Sistema");
console.log("1 - Listar filmes");
console.log("2 - Cadastrar filme");
console.log("3 - Buscar filme");
console.log("========================");

let loop = true
while (loop) {

    let opcao = readline.questionInt("Escolha a opção: ")
    switch (opcao) {
        case 1:
            console.log("Todos os filmes");
            console.log(" ----------------");

            listarFilmes()

            break

        case 2:
            cadastrarFilme()

            break

        case 3:
            buscarFilme()

            break

        case 0:
            console.log("Sistema fechado!")
            loop = false;
            break

        default:
            console.log("Operação Inválida")
            break
    }
}


function listarFilmes() {
    for (const i of filmes) {
        console.log(`Id: ${i.id}`);
        console.log(`Nome: ${i.nome}`);
        console.log(`\t - Duração: ${i.duraçao}`);
        console.log(`\t - Gênero: ${i.genero}`);
        console.log(`\t - Sinopse: ${i.sinopse}`);
        console.log(`--------------------------`);
    }
}

function cadastrarFilme() {
    let nomeFilme = readline.question("Digite o nome do filme: ")
    let idFilme = readline.question("Digite a id do filme: ")
    let duracaoFilme = readline.question("Digite a duração do filme: ")
    let generoFilme = readline.question("Digite o gênero do filme: ")
    let sinopseFilme = readline.question("Digite a sinopse do filme: ")

    const filme = {
        id: idFilme,
        nome: nomeFilme,
        duracao: duracaoFilme,
        genero: generoFilme,
        sinopse: sinopseFilme
    }
    filmes.push(filme);
}

function buscarFilme() {
    let buscarFilme = readline.question("Digite o nome do filme que você deseja buscar.")

    for (const b of filmes) {
        if (buscarFilme.toLowerCase() === b.nome.toLowerCase()) {
            console.log(`Id: ${b.id}`);
            console.log(`Nome: ${b.nome}`);
            console.log(`\t - Duração: ${b.duraçao}`);
            console.log(`\t - Gênero: ${b.genero}`);
            console.log(`\t - Sinopse: ${b.sinopse}`);
        }
    }
}
