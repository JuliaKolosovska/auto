import React from 'react';
import {MovieInfo} from "../components";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {movieService} from "../services/movie.service";
import {IMovieDetails} from "../interfaces";




const MovieDetailPage= () => {
    type MovieParams = {
        id: string;
    };

    const {id} = useParams<MovieParams>();


    const [movie, setMovie] = useState<IMovieDetails>();

    useEffect(()=>{
        movieService.byId(+id).then(value=>value.data).then(value => setMovie(value))
    }, [id]);

    if (!movie) {
        return <h4 className={'loading'}>Loading......</h4>
    }
    return (
        <div>
           <MovieInfo
               id={movie.id}
                      title={movie.title}
                      original_title={movie.original_title}
                      poster_path={movie.poster_path}
                      backdrop_path={movie.backdrop_path}
                      release_date={movie.release_date}
                      runtime={movie.runtime}
                      genres={movie.genres}
                      budget={movie.budget}
                      revenue={movie.revenue}
                      vote_average={movie.vote_average}
                      overview={movie.overview}
                      adult={movie.adult}
                      imdb_id={movie.imdb_id}
                      original_language={movie.original_language}
                      popularity={movie.popularity}
                      vote_count={movie.vote_count}/>
        </div>
    );
};

export {MovieDetailPage}