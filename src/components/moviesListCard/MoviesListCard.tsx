import React, {FC} from 'react';
import {IMovie} from "../../interfaces";
import {Link} from "react-router-dom";


interface IProps {
    movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {poster_path, title, vote_average, id} = movie;

    return (

        <div className='movieCard'>
            <Link to={`/movie/${id}`}>
                <img className={'poster'} src={"https://image.tmdb.org/t/p/w500/" + poster_path} alt="{title}"></img>
                <div className={'title'}>{title}</div>
                <div className={'vote'}>{vote_average}</div>
            </Link>
        </div>

    );
};

export {MoviesListCard}