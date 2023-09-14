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

  module.exports = {Filme,filmes};