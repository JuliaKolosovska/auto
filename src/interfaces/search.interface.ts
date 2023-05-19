import { IMovie } from "./movie.interface"

export interface ISearch {
    id: number,
    poster_path: string,
    name?: string,
    title?: string
    release_date?: string,
    first_air_date?: string,
}

export interface ISearchRes {
    results: IMovie[]
}