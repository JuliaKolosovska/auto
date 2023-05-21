import {axiosService} from "./axios.service";

import {ISearchRes} from "../interfaces";
import {urls} from "../configs";
import {IRes} from "../types";

const searchService = {
    search: (name: string): IRes<ISearchRes> => axiosService.get(`${urls.search}${name}`)
}

export {
    searchService
}