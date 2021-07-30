export interface IFilmData {
    nome: string;
    ano: number;
    diretor: string;
    genero: string;
    descricao: string;
    poster: string;
}

export class FilmData {
    name: string;
    year: number;
    director: string;
    gender: string;
    description: string;
    poster: string;

    constructor(data: IFilmData) {
        this.name = data.nome;
        this.year = data.ano;
        this.director = data.diretor;
        this.gender = data.genero;
        this.description = data.descricao;
        this.poster = data.poster;
    }

}