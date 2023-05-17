import React, {FC, useEffect} from 'react';
import {useDispatch } from 'react-redux';
import {movieActions} from "../../redux/slices";

import {useAppSelector} from "../../hooks";
import {Rating} from 'react-simple-star-rating'


interface IProps {
    movieId: string;
}


const MovieInfo: FC<IProps> = ({movieId}) => {


    const dispatch = useDispatch<any>();
    const {movie}=useAppSelector(state => state.movieReducer);
    useEffect(() => {
        dispatch(movieActions.getMovieDetails({id: parseInt(movieId)}))
    }, [dispatch, movieId]);

    if (!movie) {
        return <h4 className={'loading'}>Loading......</h4>}

    return (
        <div className={'moviesInfoContainer'}>
            <div className={'posterDiv'}>
                <img className={'poster'} src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                    alt="{title}"/></div>
            <div className={'movieInfo'}>
                <div><Rating
                    className={'movie__info-star'}
                    readonly={true}
                    initialValue={Math.round(movie.vote_average)}
                    iconsCount={10}
                    size={30}
                /></div>
                <h2>{movie.title}</h2>

                <div>Original title: {movie.original_title}</div>
                {/*<div>{genres}</div>*/}

                <div>Release date: {movie.release_date}</div>


                <div>Overview <br/>{movie.overview}</div>
            </div>


        </div>
    );
};

export {MovieInfo}