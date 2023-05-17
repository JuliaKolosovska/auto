import React,{FC} from 'react';
import {MovieInfo} from "../components";
import {useParams} from "react-router-dom";





const MovieDetailPage:FC= () => {
    const { id } = useParams<{ id:string }>();


    return (
        <div>
           <MovieInfo movieId={id}/>

        </div>
    );
};

export {MovieDetailPage}