import React, {FC, useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slices";
import {MoviesListCard} from "../moviesListCard/MoviesListCard";
import {MoviePagination} from "../moviePagination/MoviePagination";
import {ThemeSwitcher} from "../theme/ThemeSwitcher";



const MoviesList:FC = () => {



    const {movies, currentPage}=useAppSelector(state => state.movieReducer);
    const dispatch=useAppDispatch();



    useEffect(()=>{
        dispatch(movieActions.getAll({currentPage: currentPage.toString()}))
    },[dispatch]);



    return (
        <div  className={'moviesContainer'} >
            {movies.map((movie)=><MoviesListCard key={movie.id} movie={movie}/>)}
<MoviePagination/>

        </div>
    );
};

export {MoviesList}