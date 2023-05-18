import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {IGenre} from "../../interfaces";
import {genreService} from "../../services";

export interface IGenreState {
    movieGenres: IGenre[],
    id: number | null,
    status: string | null,
    error: string | null
}

const initialState: IGenreState = {
    movieGenres: [],
    id: null,
    status: null,
    error: ''
}

const getGenres = createAsyncThunk<IGenre[], void>(
    'genreSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAllGenres()
            return data.genres
        } catch (e) {
            return rejectWithValue((e as AxiosError).response?.data)
        }
    }
)


const genreSlice=createSlice({
    name:'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getGenres.fulfilled, (state, action) => {
            state.movieGenres = action.payload
            state.error=''
        })
})

const {reducer:genreReducer,actions:{

}}=genreSlice

const genreActions={
    getGenres
}

export {
    genreActions,
    genreReducer
}