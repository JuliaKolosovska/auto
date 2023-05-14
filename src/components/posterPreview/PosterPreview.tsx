import React, {FC} from 'react';
import {useAppSelector} from "../../hooks";
import {IMovie} from "../../interfaces";


interface IProps {
        movie: IMovie
}

const PosterPreview:FC<IProps> = ({movie}) => {
    const {poster_path}=movie;
    return (
        <div>
            <img className={'poster'} src={"https://image.tmdb.org/t/p/w500/" + poster_path} alt="{title}"/>
        </div>
    );
};

export {PosterPreview}