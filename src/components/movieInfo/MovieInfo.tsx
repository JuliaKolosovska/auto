import React, {FC, useEffect} from 'react';

import {PosterPreview} from "../posterPreview/PosterPreview";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slices";
import {MoviesListCard} from "../moviesListCard/MoviesListCard";


export interface IMovieDatails {
    id: number,
    title: string,
    original_title: string,
    poster_path: string,
    backdrop_path: string,
    release_date: string,
    runtime: number
    genres: string[],
    budget: number,
    revenue: number,
    vote_average: number,
    overview: string
}

const MovieInfo: FC<IMovieDatails> = ({id,budget, revenue, original_title, overview, vote_average, runtime, genres, title, poster_path, release_date}) => {


    return (
        <div>

                <div>{title}</div>
                <div>Original title: {original_title}</div>
                <div>{genres}</div>
                <div>{release_date}</div>
                <div>Budget: {budget}</div>
                <div>Revenue: {revenue}</div>
                <div>Runtime: {runtime}</div>
                <div>Vote: {vote_average}</div>
                <div>{overview}</div>


        </div>
    );
};

export {MovieInfo}