import {axiosService} from "./axios.service";

import {IGenre} from "../interfaces";
import {urls} from "../configs";
import {IRes} from "../types";

export interface IGenreService {
    genres: IGenre[]
}

const genreService={
    getAllGenres:():IRes<IGenreService>=>axiosService.get(`${urls.genres}`),
}

export {
    genreService
}