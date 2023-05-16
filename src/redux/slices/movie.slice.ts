import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AsyncThunkAction} from '@reduxjs/toolkit';
import {AxiosError} from "axios";
import {IError, IMovie, IMovieDetails, IPagination} from "../../interfaces";
import {movieService} from "../../services/movie.service";


export interface IState {
    movie: IMovieDetails | null,
    movies: IMovie[],
    page: number,
    currentPage:number|string
    errors: IError,
    total_results: number,
    total_pages: number,
    loading: boolean,
    id: number | null,


}


const initialState: IState = {
    movies: [],
    page: 5,
    currentPage:1,
    errors: null,
    total_results: 0,
    total_pages: 500,
    loading: false,
    id: null,
    movie: null
};

const getAll = createAsyncThunk<IPagination<IMovie[]>, { currentPage: string }>(
    'movieSlice/getAll',
    async ({currentPage}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(currentPage);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getMovieDetails = createAsyncThunk<IMovieDetails, { id: number }, { rejectValue: any }>(
    'movieSlice/getMovieDetails',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.byId(id);
            return data;
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
        resetPage: (state) => {
            state.currentPage = 1
        },
        setPage: (state, action) => {
            // state.currentPage = action.payload
            state = { ...state, currentPage: action.payload }
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results
                if (action.payload.total_pages <= 500) {
                    state.total_pages = action.payload.total_pages

                } else {
                    state.total_pages = 500
                }
                state.loading = false
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
            })
            .addCase(getMovieDetails.pending, (state) => {

            })
            .addCase(getMovieDetails.fulfilled, (state, action) => {

                state.movie = action.payload;
            }),

})

const {
    actions: {
        resetPage,
        setPage
    }, reducer: movieReducer
} = slice;

const movieActions = {
    resetPage,
    setPage,
    getAll,
    getMovieDetails
}

export {
    movieActions,
    movieReducer
}