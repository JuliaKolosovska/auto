import React, {FC, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Rating} from 'react-simple-star-rating'
import {useLocation} from 'react-router-dom';

import {movieActions} from "../../redux/slices";
import {useAppSelector} from "../../hooks";
import {GenreBadge} from "../genreBadge/GenreBadge";
import {IGenre, IMovie} from "../../interfaces";
import {posterURL} from "../../configs";



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


const MovieInfo: FC<IProps> = ({movieId}) => {
    const dispatch = useDispatch<any>();
    const {movie} = useAppSelector(state => state.movieReducer);
    const {title, genres, release_date, poster_path, vote_average} = movie;
    const {movieGenres} = useAppSelector(state => state.genreReducer)

    useEffect(() => {
        dispatch(movieActions.getMovieDetails({id: parseInt(movieId)}))
    }, [dispatch, movieId]);

    if (!movie) {
        return <h4 className={'loading'}>Loading......</h4>
    }

    console.log(movie);
    return (
        <div className={'moviesInfoContainer'}>
            <div className={'posterDiv'}>
                <img className={'poster'} src={posterURL + movie.poster_path}
                     alt="{title}"/></div>
            <div className={'movieInfo'}>
                <div className={'movie-genres'}>
                    {genres.map(genre => (<button key={genre.id} className="genres-btn">{genre.name}</button>))}
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