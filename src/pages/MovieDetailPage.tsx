import React,{FC, useState, useEffect} from 'react';
import {MovieInfo, ThemeSwitcher} from "../components";
import {useParams} from "react-router-dom";
import {IMovie} from "../interfaces";
import {movieService} from "../services";





const MovieDetailPage:FC= () => {
    const { id } = useParams<{ id:string }>();

    const [movie, setMovie] = useState<IMovie>()


    return (
        <div>
           <MovieInfo movieId={id} genres={movie.genre_ids} />


        </div>
    );
};

export {MovieDetailPage}