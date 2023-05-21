import React,{FC, useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {MovieInfo, ThemeSwitcher} from "../components";
import {IGenre, IMovie} from "../interfaces";
import {movieService} from "../services";
import { useAppDispatch } from '../hooks';
import { movieActions } from '../redux/slices';





const MovieDetailPage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<IMovie | null>(null);
    const [genres, setGenres] = useState<IGenre[]>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getMovieDetails({ id: parseInt(id) })).then(({ payload }) => {
            setMovie(payload);
        });
    }, [dispatch, id]);

    if (!movie) {
        return <h4 className={'loading'}>Loading......</h4>;
    }

    return (
        <div>
            <MovieInfo movie={movie} genres={movie.genres} movieId={id}   id={movie.id} title={movie.title} original_title={movie.original_title} poster_path={movie.poster_path}
                       release_date={movie.release_date} budget={movie.budget} revenue={movie.revenue} vote_average={movie.vote_average} overview={movie.overview} />
        </div>
    );
};



export {MovieDetailPage}