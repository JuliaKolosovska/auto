import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slices";
import {MoviesListCard} from "../moviesListCard/MoviesListCard";




const MoviesList:FC = () => {
    const {movies, currentPage}=useAppSelector(state => state.movieReducer);
    const dispatch=useAppDispatch();

    // const [query, setQuery] = useSearchParams();
    //
    // useEffect(() => {
    //     setQuery(prev => ({...prev, page: '1'}))
    // }, [setQuery])

    useEffect(()=>{
        dispatch(movieActions.getAll({currentPage}))
    },[dispatch]);



    return (
        <div>
            {movies.map((movie)=><MoviesListCard key={movie.id} movie={movie}/>)}

        </div>
    );
};

export {MoviesList}