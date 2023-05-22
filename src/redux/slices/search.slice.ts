import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovieDetails, ISearch} from "../../interfaces";
import {searchService} from "../../services";

export interface ISearchState {
    searched: ISearch[] | [];
    filterParam: ''
}

const initialState: ISearchState = {
    searched: [],
    filterParam: ''
};

const find = createAsyncThunk<ISearch[] | [], { name: string }>(
    "searchSlice/find",
    async ({name}, {rejectWithValue}) => {
        try {
            if (name.length <= 1) return [];
            const {data} = await searchService.search(name);
            return data.results.map((res: IMovieDetails): ISearch => {

                const item: ISearch = {
                    id: res.id,
                    name: res.title,
                    poster_path: res.poster_path,
                    vote_average: res.vote_average,
                }
                return item
            });
        } catch (e) {
            return rejectWithValue((e as AxiosError).response?.data)
        }
    }
);

const searchSlice = createSlice({
    name: "searchSlice",
    initialState,
    reducers: {
        resetSearch: (state) => {
            state.searched = [];
        },
    },
    extraReducers: (builder) =>
        builder.addCase(find.fulfilled, (state, action) => {
            state.searched = action.payload;
        }),
});

const {
    reducer: searchReducer,
    actions: {resetSearch},
} = searchSlice;

const searchAction = {
    find,
    resetSearch
};

export {searchAction, searchReducer};