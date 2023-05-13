import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slices";
import {MoviesListCard} from "../moviesListCard/MoviesListCard";

const MoviesList:FC = () => {
    const {movies}=useAppSelector(state => state.movieReducer);
    const dispatch=useAppDispatch();
    useEffect(()=>{
        dispatch(movieActions.getAll())
    },[dispatch])
    return (
        <div>
            {movies.map((movie)=><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList}