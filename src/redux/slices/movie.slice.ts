import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IError, IMovie, IPagination} from "../../interfaces";
import {movieService} from "../../services/movie.service";
import {AxiosError} from "axios";

interface IState {
    movies: IMovie[],
    prev: string,
    next: string,
    errors: IError,


}


const initialState: IState = {
    movies: [],
    prev: null,
    next: null,
    errors: null,

};

const getAll = createAsyncThunk<IPagination<IMovie[]>, void>(
    'movieSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {


    },
    extraReducers: builder =>
        builder


})

const {actions, reducer: movieReducer} = slice;

const movieActions = {
    ...actions,
    getAll
}

export{
    movieActions,
    movieReducer
}