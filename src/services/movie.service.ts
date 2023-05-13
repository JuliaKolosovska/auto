import {axiosService} from "./axios.service";

import {IMovie, IPagination} from "../interfaces";
import {urls} from "../constants";
import {IRes} from "../types";

class MovieService{
    getAll():IRes<IPagination<IMovie[]>> {
        return axiosService.get(urls.movies)
    }

}
const movieService=new MovieService()
export {
    movieService
}