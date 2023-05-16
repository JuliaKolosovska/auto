import React, {FC, useEffect} from 'react';
import {useDispatch } from 'react-redux';
import {movieActions} from "../../redux/slices";
import {IMovieDetails} from "../../interfaces";
import {useAppSelector} from "../../hooks";




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
    const {movie} = useAppSelector((state) => state.movie);
    useEffect(() => {
        dispatch(movieActions.getMovieDetails({id}))
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