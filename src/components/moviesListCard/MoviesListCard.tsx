import React, {FC, useContext} from 'react';
import {Link} from "react-router-dom";

import {Rating} from 'react-simple-star-rating'

import {IMovie} from "../../interfaces";
import {ThemeContext} from '../theme/ThemeContext';

interface IProps {
    movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {poster_path, title, vote_average, id} = movie;
    const {currentTheme, toggleTheme} = useContext(ThemeContext);

    return (

        <div className={`movieCard ${currentTheme}`}>
            <Link to={`/movie/${id}`}>
                <img
                    className="poster"
                    src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'https://ps.w.org/replace-broken-images/assets/icon-256x256.png'}
                    alt={title}
                />
                <div className={'title-vote'}>
                    <div className={`title ${currentTheme}`}>{title}</div>
                    <div className={'vote'}>
                        <Rating
                            readonly={true}
                            initialValue={vote_average}
                            allowFraction={true}
                            iconsCount={10}
                            size={10}
                        />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export {MoviesListCard}