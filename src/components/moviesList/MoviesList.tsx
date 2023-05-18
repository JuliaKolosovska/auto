import React, {FC, useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slices";
import {MoviesListCard} from "../moviesListCard/MoviesListCard";
import {MoviePagination} from "../moviePagination/MoviePagination";
import {ThemeSwitcher} from "../theme/ThemeSwitcher";
import { useSearchParams } from 'react-router-dom';



const MoviesList:FC = () => {



    const {movies, currentPage}=useAppSelector(state => state.movieReducer);
    const dispatch=useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();
    const thisPage = searchParams.get('page')

    useEffect(()=>{
        dispatch(movieActions.getAll({currentPage: currentPage.toString()}))
    },[dispatch]);



    return (
        <div  className={'moviesContainer'} >
            {movies.map((movie)=><MoviesListCard key={movie.id} movie={movie}/>)}
<MoviePagination key={thisPage}/>

        </div>
    );
};

export {MoviesList}