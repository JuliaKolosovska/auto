import React, {FC, useContext, useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slices";
import {MoviesListCard} from "../moviesListCard/MoviesListCard";
import {MoviePagination} from "../moviePagination/MoviePagination";
import {ThemeSwitcher} from "../theme/ThemeSwitcher";
import {ThemeContext} from '../theme/ThemeContext';

const MoviesList: FC = () => {
    const {currentTheme, toggleTheme} = useContext(ThemeContext);
    const {movies, currentPage} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const thisPage = searchParams.get('page');

    useEffect(() => {

        dispatch(movieActions.setPage(thisPage));
        dispatch(movieActions.getAll({currentPage: thisPage}));
    }, [thisPage, dispatch]);

    return (
        <div className={`moviesContainer ${currentTheme}`}>
            {movies.map((movie) => <MoviesListCard key={movie.id} movie={movie}/>)}
            <MoviePagination currentPage={currentPage}/>
        </div>
    );
};

export {MoviesList}