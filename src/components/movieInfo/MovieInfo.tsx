import React, {FC, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {movieActions} from "../../redux/slices";
import {IMovie} from "../../interfaces";



export interface IMovieDetails {
    adult: boolean,
    backdrop_path: string,
    budget: number,
    genres: object[],
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    revenue: number,
    runtime: number,
    title: string,
    vote_average: number,
    vote_count: number
}

const MovieInfo: FC<IMovie> = ({
                                          id,
                                          original_title,
                                          genre_ids,
                                          overview,
                                          vote_average,
                                          title,
                                          poster_path,
                                          release_date
                                      }) => {


    const dispatch = useDispatch();
    const {movies, } = useSelector((state) => state.movies);
    useEffect(() => {
        dispatch(movieActions.getMovieDetails(id))
    }, [dispatch]);
    return (
        <div className={'moviesContainer'}>

            <div>{id}</div>
            <div>{title}</div>
            <div>Original title: {original_title}</div>
            {/*<div>{genres}</div>*/}

            <div>{release_date}</div>

            <div>Vote: {vote_average}</div>
            <div>{overview}</div>


        </div>
    );
};

export {MovieInfo}