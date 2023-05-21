import {IMovie} from "./movie.interface"

export interface ISearch {
    id: number,
    name:string
    // poster_path: string,
    // title?: string
    // vote_average?: number;
    // release_date?: string,
    // first_air_date?: string,
}

export interface ISearchRes {
    results: IMovie[]
}