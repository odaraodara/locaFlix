class Filme {
  //classe dos objetos manipulados
  constructor(id, nome, duracao, genero, sinopse) {
    this.id = id;
    this.nome = nome;
    this.duracao = duracao;
    this.genero = genero;
    this.sinopse = sinopse
  }

  // console.log dos filmes
  mostrarDadosFilme() {
    console.log(`Id: ${this.id}
    Nome: ${this.nome}
    \t - Duração: ${this.duracao} min
    \t - Gênero: ${this.genero}
    \t - Sinopse: ${this.sinopse}
    --------------------------`);
  }
}

//Objetos iniciais
const filme1 = new Filme(1, "Titanic", 194, "drama", `Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica viagem inaugural do Titanic em 1912. 
  Embora esteja noiva do arrogante herdeiro de uma siderúrgica, a jovem desafia sua família e amigos em busca do verdadeiro amor.`)


const filme2 = new Filme(2, "UP: Altas Aventuras", 96, "animação", `Uma animação que conta a história de Carl e Russell que, despropositadamente, partem juntos em busca de um belíssimo
  lugar chamado Paraíso das Cachoeiras.`)


//Banco de dados
const filmes = [filme1, filme2];

module.exports = { Filme, filmes };
