import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {IError, IMovie, IMovieDetails, IPagination} from "../../interfaces";
import {movieService} from "../../services/";


export interface IState {
    movie: IMovieDetails | null,
    movies: IMovie[],
    page: number,
    currentPage:number,
    errors: IError,
    total_results: number,
    total_pages: number,
    loading: boolean,
    id: number,


}


const initialState: IState = {
    movies: [],
    page: 1,
    currentPage:0,
    errors: null,
    total_results: 0,
    total_pages: 500,
    loading: false,
    id: -1,
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
        nextPage: (state, action) => {
            state.currentPage += 1
        },
        prevPage: (state, action) => {
            state.currentPage -= 1
        },
        resetPage: (state) => {
            state.currentPage =1
        },
        setPage: (state, action) => {
            state.currentPage = action.payload
            // state = { ...state, currentPage: action.payload }
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
        setPage,
        nextPage,
        prevPage,
    }, reducer: movieReducer
} = slice;

const movieActions = {
    nextPage,
    prevPage,
    resetPage,
    setPage,
    getAll,
    getMovieDetails
}

export {
    movieActions,
    movieReducer
}