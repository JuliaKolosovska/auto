import {axiosService} from "./axios.service";

import {IMovie, IMovieDetails, IPagination} from "../interfaces";
import {urls} from "../configs";
import {IRes} from "../types";


class MovieService {
    getAll(page: string): IRes<IPagination<IMovie[]>> {
        return axiosService.get(urls.movies+`{page}`)
    };

    byId(id: number): IRes<IMovieDetails> {
        return axiosService.get(urls.byId(id))
    }
}

const movieService = new MovieService()
export {
    movieService
}