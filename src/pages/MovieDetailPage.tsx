import React,{FC, useState, useEffect} from 'react';
import {MovieInfo, ThemeSwitcher} from "../components";
import {useParams} from "react-router-dom";
import {IGenre, IMovie} from "../interfaces";
import {movieService} from "../services";




interface MovieDetailPageProps {}

const MovieDetailPage: FC<MovieDetailPageProps> = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<IMovie | undefined>();
    const [genres, setGenres] = useState<IGenre[]>([]);

    // useEffect(() => {
    //
    //     const fetchMovie = async () => {
    //         try {
    //             const response = await fetch(`API_URL/movies/${id}`);
    //             const data = await response.json();
    //             setMovie(data);
    //         } catch (error) {
    //             console.error('Error fetching movie:', error);
    //         }
    //     };
    //
    //
    //     const fetchGenres = async () => {
    //         try {
    //             const response = await fetch(`API_URL/genres`);
    //             const data = await response.json();
    //             setGenres(data);
    //         } catch (error) {
    //             console.error('Error fetching genres:', error);
    //         }
    //     };
    //
    //     fetchMovie();
    //     fetchGenres();
    // }, [id]);
    return (
        <div>
           <MovieInfo movieId={id} genres={genres} />


        </div>
    );
};

export {MovieDetailPage}