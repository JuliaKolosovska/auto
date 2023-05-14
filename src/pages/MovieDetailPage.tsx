import React, {FC} from 'react';
import {IMovieDatails, MovieInfo} from "../components";
import {IMovie} from "../interfaces";



const MovieDetailPage:FC<IMovieDatails>= () => {
    return (
        <div>
           <MovieInfo/>
        </div>
    );
};

export {MovieDetailPage}