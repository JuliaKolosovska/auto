import React, {FC, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {movieActions} from "../../redux/slices";

import {useAppSelector} from "../../hooks";
import {Rating} from 'react-simple-star-rating'
import {GenreBadge} from "../genreBadge/GenreBadge";
import {IGenre, IMovie} from "../../interfaces";
import {posterURL} from "../../configs";
import { useLocation } from 'react-router-dom';


interface IProps {

    movie: IMovie;
    genres: IGenre[];

    movieId: string;

    id: number,
    title: string,
    original_title: string,
    poster_path: string,
    release_date: number,

    budget: number,
    revenue: number,
    vote_average: number,
    overview: string
}


const MovieInfo: FC<IProps> = ({movieId, genres}) => {


    const dispatch = useDispatch<any>();
    const {movie} = useAppSelector(state => state.movieReducer);

    const location = useLocation()

    const {state} = location
    const {
        genre_ids, overview, original_language, original_title, popularity, title, vote_average, vote_count, poster_path
    } = state

    const movieGenre = genres?.filter(genre => genre_ids.includes(genre.id))

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

                <div className={'movie-genres'}>
                    {movieGenre?.map(genre => (<p key={genre.id}>{genre.name}</p>))}
                </div>

                <div className={'rating'}><Rating
                    readonly={true}
                    initialValue={movie.vote_average}
                    allowFraction={true}
                    iconsCount={10}
                    size={30}
                />

                    <div>({movie.vote_count} votes)</div>
                </div>

                <h1>{movie.title}</h1>


                <div>Original title: {movie.original_title}</div>

                <div>Release date: {movie.release_date}</div>


                <div>Overview <br/> <br/>{movie.overview}</div>
            </div>


        </div>
    );
};

export {MovieInfo}