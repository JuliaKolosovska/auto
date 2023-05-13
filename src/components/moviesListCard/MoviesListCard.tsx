import React, {FC} from 'react';
import {IMovie} from "../../interfaces";
import {Link} from "react-router-dom";
import './main.css'

interface IProps {
    movie: IMovie
}
const MoviesListCard:FC<IProps> = ({movie}) => {
const {title, vote_average}=movie;
    return (

            <div className='movieCard'>
                <Link to={`/movie/${movie.id}`}>
                <div>{title}</div>
                <div>{vote_average}</div>
            </Link>
            </div>

    );
};

export {MoviesListCard}