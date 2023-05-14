import axios from "axios";

import {accessToken, baseURL, posterURL} from "../configs";


const axiosService=axios.create({baseURL});

axiosService.interceptors.request.use(res=> {

    res.headers.Authorization = `Bearer ${accessToken}`

    return res
})



export {
    axiosService
}