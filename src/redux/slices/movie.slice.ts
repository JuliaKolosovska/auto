import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IError, IMovie, IMoviesService, IPagination} from "../../interfaces";
import {movieService} from "../../services/movie.service";
import {AxiosError} from "axios";

interface IState {
    movies: IMovie[],
    currentPage: number,
    errors: IError,
    total_results: number,
    total_pages: number,
    loading: boolean,



}


const initialState: IState = {
    movies: [],
    currentPage: 1,
    errors: null,
    total_results: 0,
    total_pages: 500,
    loading: false
};

const getAll = createAsyncThunk<IPagination<IMovie[]>, { currentPage: number }>(
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

const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        resetPage: (state) => {
            state.currentPage = 1
        },
        setPage: (state, action) => {
            state.currentPage = action.payload
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
            .addCase(getAll.pending,(state)=>{
                state.loading=true
            })

})

const {actions, reducer: movieReducer} = slice;

const movieActions = {
    ...actions,
    getAll
}

export {
    movieActions,
    movieReducer
}