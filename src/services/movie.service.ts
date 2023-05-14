import {axiosService} from "./axios.service";

import {IMovie, IPagination} from "../interfaces";
import {urls} from "../configs";
import {IRes} from "../types";

class MovieService{
    getAll(page: number = 1):IRes<IPagination<IMovie[]>> {
        return axiosService.get(urls.movies+ '?page=' + page)
    }

}
const movieService=new MovieService()
export {
    movieService
}