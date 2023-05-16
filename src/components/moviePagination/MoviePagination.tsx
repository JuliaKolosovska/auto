import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux/slices";



const MoviePagination = () => {
    const dispatch = useAppDispatch();

    const { currentPage } = useAppSelector(state => state.movieReducer);
    const [, setQuery] = useSearchParams();
    const [totalPages] = useState(500);
    const [pagesToShow] = useState(15);


    const prev = () => {
        setQuery(currentPage => ({ ...currentPage, page: +(currentPage.get('currentPage')) - 1 }));

    };

    const next = () => {
        setQuery(currentPage => ({ ...currentPage, page: +(currentPage.get('currentPage')) + 1 }));
    };

    const pageButton = () => {
        setQuery(currentPage => ({ ...currentPage, page: currentPage }));
    };

    const generatePageNumbers = () => {
        const current = +currentPage;
        const last = totalPages;
        const start = Math.max(1, current - Math.floor(pagesToShow / 2));
        const end = Math.min(last, start + pagesToShow - 1);

        const pageNumbers = [];

        for (let i = start; i <= end; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };
    dispatch(movieActions.resetPage())
    return (
        <div>
            <ul className="pagination">
                <button onClick={prev} className="page-number" disabled={!prev}>
                    Prev
                </button>
                {generatePageNumbers().map((number) => (
                    <li
                        key={number}
                        onClick={pageButton}
                        // onClick={() => (number)}
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