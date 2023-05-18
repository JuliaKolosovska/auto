import React, {FC, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {movieActions} from "../../redux/slices";

import {useAppSelector} from "../../hooks";
import {Rating} from 'react-simple-star-rating'
import {GenreBadge} from "../genreBadge/GenreBadge";
import {IGenre} from "../../interfaces";
import {posterURL} from "../../configs";


interface IProps {
    movieId: string;
    genres: IGenre[],
}


const MovieInfo: FC<IProps> = ({movieId, genres}) => {


    const dispatch = useDispatch<any>();
    const {movie} = useAppSelector(state => state.movieReducer);
    useEffect(() => {
        dispatch(movieActions.getMovieDetails({id: parseInt(movieId)}))
    }, [dispatch, movieId]);

    if (!movie) {
        return <h4 className={'loading'}>Loading......</h4>
    }

    return (
        <div className={'moviesInfoContainer'}>
            <div className={'posterDiv'}>
                <img className={'poster'} src={posterURL + movie.poster_path}
                     alt="{title}"/></div>
            <div className={'movieInfo'}>
                <GenreBadge  genresIds={genres.map(genre => genre.id)}/>
                <div className={'rating'}><Rating
                    readonly={true}
                    initialValue={movie.vote_average}
                    allowFraction={true}
                    iconsCount={10}
                    size={30}
                />

                    <div >({movie.vote_count} votes)</div>
                </div>

                <h1>{movie.title}</h1>


                <div>Original title: {movie.original_title}</div>
                {/*<div>{genres}</div>*/}

                <div>Release date: {movie.release_date}</div>


                <div>Overview <br/> <br/>{movie.overview}</div>
            </div>


        </div>
    );
};

export {MovieInfo}