// import {createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import {AxiosError} from "axios";
//
// import {IMovie, ISearch } from "../../interfaces";
// import { searchService } from "../../services";
//
// export interface ISearchState {
//     searched: ISearch[],
//     genresSelected: string,
//
// }
//
// const initialState: ISearchState = {
//     searched: [],
//     genresSelected: 'all',
//
// }
//
// const find = createAsyncThunk<ISearch[] | [], { name: string }>(
//     'searchSlice/find',
//     async ({name}, {rejectWithValue}) => {
//         try {
//             if (name.length<=1) return [];
//             const {data} = await searchService.search(name)
//             return data.results.map((item: IMovie): ISearch => {
//                 const newList: ISearch = {
//                     id: item.id,
//                     poster_path: item.poster_path
//                 }
//
//                 } else {
//                 newList.title = item.title
//                 newList.release_date = item.release_date
//                 }
//                 return newList;
//             })
//         } catch (e) {
//             return rejectWithValue((e as AxiosError).response?.data)
//         }
//     }
// )
//
//
// const searchSlice = createSlice({
//     name: 'optionsSLice',
//     initialState,
//     reducers: {
//
//     },
//     extraReducers: builder => builder
//         .addCase(getSimilar.fulfilled, (state, action) => {
//             state.searched = action.payload
//         })
// })