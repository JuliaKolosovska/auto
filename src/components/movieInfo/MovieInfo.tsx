import React, {FC, useEffect} from 'react';
import {useDispatch } from 'react-redux';
import {movieActions} from "../../redux/slices";
import {IMovieDetails} from "../../interfaces";
import {useAppSelector} from "../../hooks";
import {RootState} from "../../redux";
import { Dispatch, AnyAction } from 'redux';




const MovieInfo: FC = ({
                                          // id,
                                          // original_title,
                                          // genres,
                                          // overview,
                                          // vote_average,
                                          // title,
                                          // poster_path,
                                          // release_date
                                      }) => {


    const dispatch = useDispatch<any>();
    const {movie, id}=useAppSelector(state => state.movieReducer);
    useEffect(() => {
        dispatch(movieActions.getMovieDetails({id:movie.id}))
    }, [dispatch]);

    if (!movie) {
        return <h4 className={'loading'}>Loading......</h4>}

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