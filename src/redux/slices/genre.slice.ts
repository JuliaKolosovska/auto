import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {IGenre} from "../../interfaces";
import {genreService} from "../../services";

export interface IGenreState {
    movieGenres: IGenre[],
    movieGenre:object,
    id: number | null,
    status: string | null,
    error: string | null
}

const initialState: IGenreState = {
    movieGenres: [],
    movieGenre:null,
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
    reducers: { getGenre: (state, action) => {
            state.movieGenre = action.payload
        }},
    extraReducers: builder => builder
        .addCase(getGenres.fulfilled, (state, action) => {
            state.movieGenres = action.payload
            state.error=''
        })


})

const {reducer:genreReducer,actions:{getGenre

}}=genreSlice

const genreActions={
    getGenres,
    getGenre
}

export {
    genreActions,
    genreReducer
}