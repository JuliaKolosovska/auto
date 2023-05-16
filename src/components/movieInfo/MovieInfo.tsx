import React, {FC, useEffect} from 'react';
import {useDispatch } from 'react-redux';
import {movieActions} from "../../redux/slices";
import {IMovieDetails} from "../../interfaces";
import {useAppSelector} from "../../hooks";
import {RootState} from "../../redux";




const MovieInfo: FC<IMovieDetails> = ({
                                          id,
                                          original_title,
                                          genres,
                                          overview,
                                          vote_average,
                                          title,
                                          poster_path,
                                          release_date
                                      }) => {


    const dispatch = useDispatch();
    const movie = useAppSelector((state: RootState) => state.movieReducer.movie);
    useEffect(() => {
        dispatch(movieActions.getMovieDetails({id}))
    }, [dispatch]);
    return (
        <div className={'moviesContainer'}>

            <div>{movie.id}</div>
            <div>{movie.title}</div>
            <div>Original title: {movie.original_title}</div>
            {/*<div>{genres}</div>*/}

            <div>{movie.release_date}</div>

            <div>Vote: {movie.vote_average}</div>
            <div>{movie.overview}</div>


        </div>
    );
};

export {MovieInfo}