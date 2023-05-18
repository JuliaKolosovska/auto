import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useNavigate, useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux/slices";



const MoviePagination = () => {
    const dispatch = useAppDispatch();

    const { currentPage } = useAppSelector(state => state.movieReducer);
    const [, setQuery] = useSearchParams();
    const [totalPages] = useState(500);
    const [pagesToShow] = useState(15);
    const navigate = useNavigate();

    const prev = async () => {
        dispatch(movieActions.prevPage);
        navigate(`?page=${currentPage - 1}`);
    };

    const next = async () => {
        dispatch(movieActions.nextPage);
        navigate(`?page=${currentPage + 1}`);
    };

    const thisPage = async () => {
        dispatch(movieActions.setPage(currentPage));
        navigate(`?page=${currentPage}`);
    };

    const generatePageNumbers = () => {
        const current = currentPage;
        const last = totalPages;
        const start = Math.max(1, current - Math.floor(pagesToShow / 2));
        const end = Math.min(last, start + pagesToShow - 1);

        const pageNumbers = [];

        for (let i = start; i <= end; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    return (
        <div>
            <ul className="pagination">
                <button onClick={prev} className="page-number" disabled={!prev}>
                    Prev
                </button>
                {generatePageNumbers().map((number) => (
                    <li
                        key={number}
                        onClick={thisPage}

                        className={'page-number ' + (number === currentPage ? 'active' : '')}
                    >
                        {number}
                    </li>
                ))}
                <button onClick={next} className="page-number" disabled={!next}>
                    Next
                </button>
            </ul>
        </div>
    );
};
export {MoviePagination}